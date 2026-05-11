// Run Lighthouse on a list of URLs, output a compact summary.
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const URLS = [
  'http://127.0.0.1:8123/',
  'http://127.0.0.1:8123/seo-sydney/',
  'http://127.0.0.1:8123/seo-for-tradies/',
  'http://127.0.0.1:8123/answer-engine-optimisation/',
  'http://127.0.0.1:8123/seo-packages-sydney/',
];

const MOBILE_CONFIG = {
  port: null,
  output: 'json',
  logLevel: 'error',
  onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  formFactor: 'mobile',
  screenEmulation: { mobile: true, width: 412, height: 823, deviceScaleFactor: 1.75, disabled: false },
  throttling: { rttMs: 150, throughputKbps: 1638.4, cpuSlowdownMultiplier: 4 },
};
const DESKTOP_CONFIG = {
  ...MOBILE_CONFIG,
  formFactor: 'desktop',
  screenEmulation: { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false },
  throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 },
};

async function run(chromePort, url, baseConfig) {
  const config = { ...baseConfig, port: chromePort };
  const r = await lighthouse(url, config);
  const cats = r.lhr.categories;
  return {
    url,
    perf: Math.round(cats.performance.score * 100),
    a11y: Math.round(cats.accessibility.score * 100),
    bp:   Math.round(cats['best-practices'].score * 100),
    seo:  Math.round(cats.seo.score * 100),
    lcp:  r.lhr.audits['largest-contentful-paint']?.numericValue,
    cls:  r.lhr.audits['cumulative-layout-shift']?.numericValue,
    fcp:  r.lhr.audits['first-contentful-paint']?.numericValue,
  };
}

async function main() {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless=new', '--no-sandbox'] });

  console.log('Mobile audits (412×823, 4× CPU slowdown, slow-3G-ish)');
  console.log('URL'.padEnd(56), 'Perf', 'A11y', 'BP', 'SEO', 'LCP(ms)', 'CLS', 'FCP(ms)');
  console.log('-'.repeat(110));
  for (const url of URLS) {
    const r = await run(chrome.port, url, MOBILE_CONFIG);
    console.log(
      r.url.padEnd(56),
      String(r.perf).padStart(4),
      String(r.a11y).padStart(4),
      String(r.bp).padStart(2),
      String(r.seo).padStart(3),
      String(Math.round(r.lcp)).padStart(7),
      r.cls.toFixed(3).padStart(5),
      String(Math.round(r.fcp)).padStart(7),
    );
  }

  console.log();
  console.log('Desktop audits (1350×940, no throttle)');
  console.log('URL'.padEnd(56), 'Perf', 'A11y', 'BP', 'SEO', 'LCP(ms)', 'CLS', 'FCP(ms)');
  console.log('-'.repeat(110));
  for (const url of URLS) {
    const r = await run(chrome.port, url, DESKTOP_CONFIG);
    console.log(
      r.url.padEnd(56),
      String(r.perf).padStart(4),
      String(r.a11y).padStart(4),
      String(r.bp).padStart(2),
      String(r.seo).padStart(3),
      String(Math.round(r.lcp)).padStart(7),
      r.cls.toFixed(3).padStart(5),
      String(Math.round(r.fcp)).padStart(7),
    );
  }

  await chrome.kill();
}

main().catch((e) => { console.error(e); process.exit(1); });

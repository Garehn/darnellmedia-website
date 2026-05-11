// Show failed audits for Best Practices on the home page.
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless=new', '--no-sandbox'] });
const r = await lighthouse('http://127.0.0.1:8123/', {
  port: chrome.port, output: 'json', logLevel: 'error',
  onlyCategories: ['best-practices'],
  formFactor: 'mobile',
  screenEmulation: { mobile: true, width: 412, height: 823, deviceScaleFactor: 1.75 },
  throttling: { rttMs: 150, throughputKbps: 1638.4, cpuSlowdownMultiplier: 4 },
});

const cat = r.lhr.categories['best-practices'];
console.log(`Best Practices score: ${cat.score * 100}\n`);

console.log('Audit refs flagged (score < 1):');
for (const ref of cat.auditRefs) {
  const audit = r.lhr.audits[ref.id];
  if (audit.score !== null && audit.score < 1) {
    console.log(`  [${audit.score}] ${audit.id}: ${audit.title}`);
    if (audit.description) console.log(`        ${audit.description.slice(0, 200)}`);
  }
}

await chrome.kill();

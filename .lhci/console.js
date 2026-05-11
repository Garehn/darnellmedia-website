// Show actual console errors.
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless=new', '--no-sandbox'] });
const r = await lighthouse('http://127.0.0.1:8123/', {
  port: chrome.port, output: 'json', logLevel: 'error',
  onlyAudits: ['errors-in-console'],
  formFactor: 'mobile',
  screenEmulation: { mobile: true, width: 412, height: 823, deviceScaleFactor: 1.75 },
});
const audit = r.lhr.audits['errors-in-console'];
console.log(JSON.stringify(audit.details, null, 2));
await chrome.kill();

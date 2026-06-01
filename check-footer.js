const { chromium } = require('playwright/test');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.setViewportSize({ width: 1280, height: 800 });
  await p.goto('http://localhost:3000');
  await p.waitForTimeout(1000);
  const data = await p.evaluate(() => {
    const footer = document.querySelector('footer');
    const body = document.body;
    const r = footer.getBoundingClientRect();
    return {
      footerTop: r.top,
      footerBottom: r.bottom,
      footerHeight: r.height,
      bodyHeight: body.scrollHeight,
      viewportHeight: window.innerHeight,
      footerDisplay: getComputedStyle(footer).display,
      containerHeight: document.querySelector('.container').getBoundingClientRect().height,
    };
  });
  console.log(JSON.stringify(data, null, 2));
  await b.close();
})();

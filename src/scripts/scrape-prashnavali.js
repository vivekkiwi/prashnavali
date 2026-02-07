const { chromium } = require("playwright");
const fs = require("fs");

const START_URL =
  "https://prashnavali.net/ramcharitmanas-prashnavali-online/";

async function gotoMain(page, maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await page.goto(START_URL, { waitUntil: "domcontentloaded" });
      await page.waitForSelector('table.my_table input.button7[type="submit"]');
      return;
    } catch (error) {
      console.warn(`Navigation attempt ${attempt} failed: ${error.message}`);
      if (attempt === maxAttempts) throw error;
      await page.waitForTimeout(2000);
    }
  }
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log("Opening main page...");
  await gotoMain(page);

  // Use a locator so handles stay valid after navigation
  const buttonsLocator = page.locator('table.my_table input.button7[type="submit"]');
  const buttonCount = await buttonsLocator.count();

  console.log(`Found ${buttonCount} buttons`);

  const resultMap = {};
  const MAX_PER_ROW = 15;

  for (let i = 0; i < buttonCount; i++) {
    const rowId = Math.floor(i / MAX_PER_ROW);
    const colId = i % MAX_PER_ROW;

    const button = buttonsLocator.nth(i);
    const letter = await button.getAttribute("value");
    const id = `${rowId}_${colId}_${letter}`;

    console.log(`Processing ${id}`);

    // Click and wait for the result to render (same-page update, not a full navigation)
    try {
      await Promise.all([
        page.waitForSelector(".result_hindi", { timeout: 40000 }),
        button.click()
      ]);
    } catch (error) {
      console.warn(`Timed out waiting for result for ${id}, skipping.`, error.message);
      await gotoMain(page);
      continue;
    }

    // Extract result data
    const data = await page.evaluate(() => {
      const container = document.querySelector(".result_hindi");
      if (!container) return null;

      const spans = container.querySelectorAll("span");

      let tone = "";
      let result = "";
      let slogan = "";
      let description = "";

      // Tone + result (first span)
      if (spans[0]) {
        tone = spans[0].querySelector("img")?.alt || "";
        result = spans[0].innerText.trim();
      }

      // Chaupayi
      if (spans[1]) {
        slogan = spans[1].innerText
          .replace("चौपाई :", "")
          .trim();
      }

      // Description
      if (spans[2]) {
        description = spans[2].innerText
          .replace("राम चरित मानस में स्थान :", "")
          .trim();
      }

      return { tone, result, slogan, description };
    });

    resultMap[id] = {
      tone: data?.tone || "",
      result: data?.result || "",
      slogan: data?.slogan || "",
      description: data?.description || "",
      metaInfo: {
        source: page.url()
      }
    };

    // Go back to main table
    await gotoMain(page);
  }

  await browser.close();

  fs.writeFileSync(
    "ramcharitmanas_prashnavali_results.json",
    JSON.stringify(resultMap, null, 2),
    "utf-8"
  );

  console.log("✅ Scraping complete. File saved.");
})();

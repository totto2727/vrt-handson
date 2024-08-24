import { test, expect } from "@playwright/test";

/* 課題を行う場合はコメントアウトを外してください */
test("制作事例のページ全体のVRT", async ({ page }) => {
  await page.goto("/jirei2.html");

  await page.evaluate(() => {
    document.querySelectorAll("img").forEach((e) => {
      e.removeAttribute("loading");
      e.removeAttribute("decoding");
    });
  });

  await page.waitForFunction(() => {
    const selectors = Array.from(document.getElementsByTagName("img"));
    return selectors.map((img) => img.complete).reduce((a, b) => a && b);
  });

  // 2. 全ての画像を読み込めるようにしよう！
  // 先に1.の課題を進めてください

  // 1. ページ全体のスナップショットを取得する処理を修正しよう！
  await expect(page).toHaveScreenshot();
});

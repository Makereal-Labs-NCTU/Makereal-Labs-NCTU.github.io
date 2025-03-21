const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const routes = require("./src/routes"); // 讀取 routes.js

const hostname = "https://makereal-labs-nctu.github.io/"; // 你的網站網址
const sitemap = new SitemapStream({ hostname });

// 逐個加入 Sitemap
routes.forEach((page) => sitemap.write(page));
sitemap.end();

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync("public/sitemap.xml", data);
  console.log("✅ Sitemap 產生成功！");
});

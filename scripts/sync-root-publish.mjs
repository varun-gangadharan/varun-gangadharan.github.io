import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const root = process.cwd();
const distDir = join(root, "dist");
const distAssetsDir = join(distDir, "site-assets");
const rootAssetsDir = join(root, "site-assets");
const publicImagesDir = join(root, "public", "images");
const rootImagesDir = join(root, "images");
const indexPath = join(root, "index.html");
const distIndexPath = join(distDir, "index.html");

function shortHash(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex").slice(0, 10);
}

function syncDirFiles(fromDir, toDir) {
  mkdirSync(toDir, { recursive: true });

  for (const name of readdirSync(fromDir)) {
    copyFileSync(join(fromDir, name), join(toDir, basename(name)));
  }
}

const jsPath = join(distAssetsDir, "app.js");
const cssPath = join(distAssetsDir, "app.css");
const jsVersion = shortHash(jsPath);
const cssVersion = shortHash(cssPath);

syncDirFiles(distAssetsDir, rootAssetsDir);
syncDirFiles(publicImagesDir, rootImagesDir);

const sourceHtml = readFileSync(indexPath, "utf8");
const updatedHtml = sourceHtml
  .replace(/stylesheet\.href = "\/site-assets\/app\.css(?:\?v=[^"]*)?";/, `stylesheet.href = "/site-assets/app.css?v=${cssVersion}";`)
  .replace(/const entry = useProductionBundle \? "\/site-assets\/app\.js(?:\?v=[^"]*)?" : "\/src\/main\.tsx";/, `const entry = useProductionBundle ? "/site-assets/app.js?v=${jsVersion}" : "/src/main.tsx";`);

writeFileSync(indexPath, updatedHtml);
writeFileSync(distIndexPath, updatedHtml);

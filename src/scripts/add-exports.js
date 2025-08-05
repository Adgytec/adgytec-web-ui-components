import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const base = path.resolve(__dirname, "../../dist/components");
const pkgPath = path.resolve(__dirname, "../../package.json");

// Read package.json
const pkgRaw = await fs.readFile(pkgPath, "utf-8");
const pkg = JSON.parse(pkgRaw);

// Static entries to preserve
const staticExports = {
  ".": {
    import: "./dist/index.js",
    types: "./dist/index.d.ts",
  },
  "./styles/main.css": {
    import: "./dist/styles/main.css",
  },
};

// Dynamic deep exports like "./Button/ButtonBase" → "./dist/components/Button/ButtonBase/index.js"
async function walk(dir) {
  const entries = {};
  const files = await fs.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      const subEntries = await walk(fullPath);
      Object.assign(entries, subEntries);
    } else if (file.name === "index.js") {
      const relPath = path
        .relative("dist/components", fullPath)
        .replace(/\\/g, "/"); // e.g., Button/ButtonBase/index.js
      const key = "./" + path.dirname(relPath); // "./Button/ButtonBase"
      entries[key] = {
        import: "./dist/components/" + relPath,
        types: "./dist/components/" + relPath.replace(/\.js$/, ".d.ts"),
      };
    }
  }

  return entries;
}

const dynamicExports = await walk(base);

pkg.exports = {
  ...staticExports,
  ...dynamicExports,
};

// Write updated package.json
await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
console.log("✅ package.json exports updated (components prefix removed)");

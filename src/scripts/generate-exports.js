import { writeFileSync } from "fs";
import { globSync } from "glob";

// ⬇️ Manual exports can be declared here
const manualExports = ['export * from "./utils/types";'];

// ⬇️ Auto-collect component exports
// const files = globSync("src/components/**/index.ts");
//
// const componentExports = files.map((filePath) => {
//   let relativePath = filePath;
//   relativePath = relativePath.slice(0, -9);
//   relativePath = relativePath.slice(4);
//   relativePath = "./" + relativePath;
//   relativePath = relativePath.replaceAll("\\", "/");
//
//   return `export * from "${relativePath}";`;
// });
//
// Sort exports alphabetically
// componentExports.sort((a, b) => a.localeCompare(b));

// Final output
const outputPath = "src/index.ts";
const banner = `// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY\n\n`;
// const finalContent =
//   banner + [...manualExports, "", ...componentExports].join("\n") + "\n";
//
const finalContent = banner + [...manualExports].join("\n") + "\n";

// Write to index.ts
writeFileSync(outputPath, finalContent);

// console.log(
//   `✅ Generated ${outputPath} with ${componentExports.length} component exports.`,
// );

console.log(`✅ Generated ${outputPath} component exports.`);

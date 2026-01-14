import { writeFileSync } from "fs";

// ⬇️ Manual exports can be declared here
const manualExports = [
  'export * from "./utils/types";',
  'export * from "./utils/env";',
  'export * from "./utils/apiError";',
];

// Final output
const outputPath = "src/index.ts";
const banner = `// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY\n\n`;

const finalContent = banner + [...manualExports].join("\n") + "\n";

// Write to index.ts
writeFileSync(outputPath, finalContent);

console.log(`✅ Generated ${outputPath} component exports.`);

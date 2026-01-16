import { glob } from "glob";
import { writeFileSync } from "node:fs";
import { relative, dirname } from "node:path";

/**
 * 👇 Any custom exports you want to force into src/index.ts.
 * Write them exactly as you want them to appear.
 */
const MANUAL_EXPORTS = ['export type * from "./utils/types";'];

const COMPONENT_INDEX_GLOB = "src/components/**/index.ts";
const ROOT_INDEX = "src/index.ts";

const files = glob.sync(COMPONENT_INDEX_GLOB);

const autoExports = files.map((file) => {
  const rel = relative("src", dirname(file)).replaceAll("\\", "/");
  return `export * from "./${rel}";`;
});

// Merge + dedupe + sort
const allExports = Array.from(
  new Set([...autoExports, ...MANUAL_EXPORTS]),
).sort();

const content = ["// AUTO-GENERATED. DO NOT EDIT.", "", ...allExports, ""].join(
  "\n",
);

writeFileSync(ROOT_INDEX, content);

console.log(`Generated ${allExports.length} exports in src/index.ts`);

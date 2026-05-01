import { writeFileSync } from "node:fs";
import { dirname, relative } from "node:path";
import { glob } from "glob";

const MANUAL_EXPORTS = [];

const INDEX_GLOB = [
    "src/*/index.ts", // top-level
    "src/components/*/index.ts", // one level inside components
];

const ROOT_INDEX = "src/index.ts";

const files = glob.sync(INDEX_GLOB, {
    ignore: [ROOT_INDEX],
});

const autoExports = files.map((file) => {
    const rel = relative("src", dirname(file)).replaceAll("\\", "/");
    return `export * from "./${rel}";`;
});

const allExports = Array.from(
    new Set([...autoExports, ...MANUAL_EXPORTS])
).sort();

const content = ["// AUTO-GENERATED. DO NOT EDIT.", "", ...allExports, ""].join(
    "\n"
);

writeFileSync(ROOT_INDEX, content);

console.log(`Generated ${allExports.length} exports in src/index.ts`);

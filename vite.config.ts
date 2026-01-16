import path, { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";
import optimizeLocales from "@react-aria/optimize-locales-plugin";
import { fileURLToPath } from "node:url";
import { globSync } from "glob";

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: "tsconfig.app.json",
      insertTypesEntry: true,
    }),
    {
      ...optimizeLocales.vite({
        locales: ["en-US", "fr-FR"],
      }),
      enforce: "pre",
    },
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    cssCodeSplit: true,
    rollupOptions: {
      input: Object.fromEntries([
        // 1️⃣ Auto-discovered entries (components + root index)
        ...globSync(["src/components/**/index.ts", "src/index.ts"]).map(
          (file) => [
            // entry name: remove `src/` and extension
            path.relative(
              "src",
              file.slice(0, file.length - path.extname(file).length),
            ),
            // absolute file path
            fileURLToPath(new URL(file, import.meta.url)),
          ],
        ),

        // 2️⃣ Explicit style entries
        [
          "styles/main",
          fileURLToPath(new URL("src/styles/main.ts", import.meta.url)),
        ],
        [
          "styles/reset",
          fileURLToPath(new URL("src/styles/reset.ts", import.meta.url)),
        ],
      ]),
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react-aria-components",
        "lucide-react",
        "usehooks-ts",
        "zod",
      ],
    },
  },
});

import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";
import optimizeLocales from "@react-aria/optimize-locales-plugin";

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
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        index: "src/index.ts",
        "styles/main": "src/styles/index-main.ts",
        "styles/reset": "src/styles/index-reset.ts",
      },
      output: {
        dir: "dist",
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
      external: [
        "react",
        "react-dom",
        "react-aria-components",
        "lucide-react",
        "usehooks-ts",
        "zod",
      ],
    },
  },
});

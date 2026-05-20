import path, { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import optimizeLocales from "@react-aria/optimize-locales-plugin";
import react from "@vitejs/plugin-react-swc";
import { globSync } from "glob";
import Sonda from "sonda/vite";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

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
        Sonda(),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    build: {
        sourcemap: true,
        outDir: "dist",
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            formats: ["es"],
            fileName: "index",
        },
        cssCodeSplit: true,
        rollupOptions: {
            input: Object.fromEntries(
                // 1️⃣ Auto-discovered entries (components + root index + optional styles)
                globSync([
                    "src/components/**/index.ts",
                    "src/index.ts",

                    "src/styles/*.ts",
                ]).map((file) => [
                    // entry name: remove `src/` and extension
                    path.relative(
                        "src",
                        file.slice(0, file.length - path.extname(file).length)
                    ),
                    // absolute file path
                    fileURLToPath(new URL(file, import.meta.url)),
                ])
            ),
            output: {
                chunkFileNames: "chunks/[name]",
                entryFileNames: "[name].js",
                assetFileNames: "assets/[name].[ext]",
            },
            external: [
                "react",
                "react-dom",
                "react/jsx-runtime",
                "react-aria",
                "react-aria-components",
                "lucide-react",
                "usehooks-ts",
                "zod",
                "sonner",
                "clsx",
                "@internationalized/date",
                "react-transition-group",
            ],
        },
    },
});

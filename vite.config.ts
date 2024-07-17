import * as path from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { bundleStats } from "rollup-plugin-bundle-stats";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), bundleStats({ json: true })],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name === "index") {
            const entryModule =
              chunkInfo.moduleIds[chunkInfo.moduleIds.length - 1];

            const segments = path.dirname(entryModule).split("/");
            const segment = segments[segments.length - 1];

            chunkInfo.name = segment;

            return `assets/component-${segment}.[hash].js`;
          }

          return "assets/[name].[hash].js";
        },
      },
    },
  },
});

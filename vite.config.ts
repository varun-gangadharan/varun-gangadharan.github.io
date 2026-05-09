import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    cssCodeSplit: false,
    rollupOptions: {
      input: "app.html",
      output: {
        inlineDynamicImports: true,
        entryFileNames: "site-assets/app.js",
        chunkFileNames: "site-assets/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "site-assets/app.css";
          }

          return "site-assets/[name][extname]";
        },
      },
    },
  },
  server: {
    watch: {
      ignored: ["**/_old_site/**", "**/.git/**"],
    },
  },
  base: "/",
});

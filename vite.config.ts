import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import singlefile from "vite-plugin-singlefile";

export default defineConfig(({ mode }) => ({
  base: "./", // important: use relative base for single HTML portability
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && singlefile(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    assetsInlineLimit: Infinity,
    cssCodeSplit: false,
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: () => "everything.js",
      },
    },
  },
}));
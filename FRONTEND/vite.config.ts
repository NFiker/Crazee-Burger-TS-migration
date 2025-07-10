import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true, // pour ne pas avoir à importer describe/it/expect
    environment: "jsdom", // pour simuler un navigateur pour React
  },
});

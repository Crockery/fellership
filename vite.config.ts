import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import webfontDownload from "vite-plugin-webfont-dl";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      quoteStyle: "single",
    }),
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Jost&display=swap",
      "https://fonts.googleapis.com/css2?family=Jost:wght@700&display=swap",
    ]),
    react(),
  ],
});

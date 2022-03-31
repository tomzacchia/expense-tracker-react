import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from "rollup-plugin-visualizer";
const path = require("path");

const VERCEL_URL = process.env.VERCEL_URL;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "favicon.svg",
        // "favicon.ico",
        // "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "Budgety",
        short_name: "Budgety",
        description: "Expense Tracker",
        theme_color: "#7b1fa2",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
    visualizer(),
  ],
});

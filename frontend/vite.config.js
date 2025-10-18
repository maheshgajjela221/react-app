import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",      // 👈 Allows external access
    port: 5175,
    proxy: {
      "/api": "http://52.64.85.12:3175", // backend API
    },
  },
});

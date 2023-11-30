import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    proxy: {
      "/api/v1/menu": "http://localhost:5000",
      "/api/v1/orders": "http://localhost:5000",
    },
  },
});

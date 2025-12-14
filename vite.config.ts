import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api/submit": {
        target: process.env.SHEETS_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbzwDw9khhWQ10HQ3JNMJnWHuGUVopMSlyqCO2lUCvdTcLVRBN0KzYS6dqOr6MZYbIOUew/exec",
        changeOrigin: true,
        secure: true,
        rewrite: () => "",
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

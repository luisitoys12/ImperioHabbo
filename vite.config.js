import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Asegura rutas correctas en producción
  build: {
    outDir: "dist",
  },
  server: {
    allowedHosts: ["imperiohabbo.onrender.com", "imperio-habbo.vercel.app"], // Permite estos hosts
  },
});
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5173, // Asegúrate de que es el puerto correcto
  },
  preview: {
    port: 4173, // Vercel usa este puerto por defecto para previsualización
  }
});

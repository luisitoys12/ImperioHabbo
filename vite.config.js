import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Prueba con '/' si sigue fallando
  build: {
    outDir: 'dist', // Confirma que la carpeta de salida es correcta
  },
});

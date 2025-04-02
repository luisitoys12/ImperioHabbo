import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  server: {
    allowedHosts: ["imperiohabbo.onrender.com", "imperio-habbo.vercel.app"]
  }
};

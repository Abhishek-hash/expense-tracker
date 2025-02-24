import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  base: '/', // Ensure the correct base path
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
});

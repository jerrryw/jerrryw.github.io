import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// This repo is a GitHub *user* site (jerrryw.github.io), which serves from the
// domain root — so base is '/'. If you ever move this to a project repo
// (e.g. github.com/jerrryw/portfolio), change base to '/portfolio/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: { outDir: 'dist', sourcemap: false },
});

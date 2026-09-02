import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  // This repository is intended to be published as WEIWEICurry.github.io.
  // Change this to '/repository-name/' when deploying as a project site.
  base: '/',
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  build: {
    // Keep the static Pages artifact separate from Vinext's server output.
    outDir: 'dist-pages',
    emptyOutDir: true,
  },
});

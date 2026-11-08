import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Absolute base so /terms, /privacy, /fees, and /invoice/<payload>
// load scripts and images from the domain root. The site is served at
// https://hive-keychain.com; GitHub Pages uses the 404.html fallback
// copied during deploy.
export default defineConfig({
  base: '/',
  plugins: [react()],
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' so the production build also works when served from a
// subpath, e.g. GitHub Pages project sites
// (https://manu38ale.github.io/Keychain-Multichain-Landing/).
export default defineConfig({
  base: './',
  plugins: [react()],
});

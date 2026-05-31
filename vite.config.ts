import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import svgr from 'vite-plugin-svgr';
import { copyFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

// Client-side routes that must resolve on a direct hit / refresh.
const ROUTES = ['price', 'documentation', 'activity'];

// Base path: '/' for a custom domain / root, or e.g. '/newmeit/' for a
// GitHub Pages project site. Configured via PAGES_BASE at build time.
const base = process.env.PAGES_BASE ?? '/';

// SPA support on GitHub Pages: copy index.html -> 404.html so deep links and
// refreshes on client-side routes resolve, and emit .nojekyll so Jekyll does
// not strip files. Runs after the bundle is written.
const githubPagesSpa = () => ({
  name: 'github-pages-spa',
  closeBundle() {
    const outDir = resolve(__dirname, 'dist');
    const indexHtml = resolve(outDir, 'index.html');
    // Fallback for any unknown path.
    copyFileSync(indexHtml, resolve(outDir, '404.html'));
    writeFileSync(resolve(outDir, '.nojekyll'), '');
    // Emit a 200 shell at each route path so deep links / refreshes return
    // HTTP 200 (not the 404 fallback) — matters for accreditation and SEO.
    for (const route of ROUTES) {
      mkdirSync(resolve(outDir, route), { recursive: true });
      copyFileSync(indexHtml, resolve(outDir, route, 'index.html'));
    }
  },
});

export default defineConfig({
  base,
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
    svgr(),
    githubPagesSpa(),
  ],
});

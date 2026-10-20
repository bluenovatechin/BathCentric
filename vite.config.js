import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// BASE_PATH is '/BathCentric/' on GitHub Pages (project site) and '/' on Vercel / your own domain.
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: command === 'build' ? env.BASE_PATH || '/BathCentric/' : '/',
    build: { target: 'es2019', cssCodeSplit: false, assetsInlineLimit: 0 },
    ssr: { noExternal: [/^@fontsource/] },
  };
});

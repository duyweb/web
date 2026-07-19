import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isProjectPage = Boolean(
  process.env.GITHUB_ACTIONS &&
    owner &&
    repository &&
    repository !== `${owner}.github.io`,
);

export default defineConfig({
  plugins: [react()],
  // A repository site lives at /<repository>/; a <owner>.github.io site lives at /.
  base: isProjectPage ? `/${repository}/` : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    port: 3000,
  },
});

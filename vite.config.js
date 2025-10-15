import { defineConfig } from 'vite'

export default defineConfig({
  base: '/spano-fules/', // GitHub Pages repo subpath
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 3000,
    open: true
  }
})
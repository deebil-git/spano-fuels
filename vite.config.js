import { defineConfig } from 'vite'

export default defineConfig({
  base: '/', // Custom domain root
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 3000,
    open: true
  }
})
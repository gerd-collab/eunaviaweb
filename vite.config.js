import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    // Multi-Page: index.html (Marketing) + fahrerwohl.html (Produktseite)
    //           + datenschutz.html (Datenschutz-Erklärseite)
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        fahrerwohl: resolve(__dirname, 'fahrerwohl.html'),
        datenschutz: resolve(__dirname, 'datenschutz.html'),
      },
    },
  },
})

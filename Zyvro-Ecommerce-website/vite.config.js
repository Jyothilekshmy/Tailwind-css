import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        shop: resolve(__dirname, 'shop.html'),
        pdp: resolve(__dirname, 'pdp.html'),
      },
    },
  },
})
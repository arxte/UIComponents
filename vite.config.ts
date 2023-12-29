import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: vue()
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/variables.scss";
        `
      }
    }
  },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: "inline",
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: "vue-openweather-jsl",
      fileName: (format) => `vue-openweather-jsl.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [
    vue(),
  ]
})

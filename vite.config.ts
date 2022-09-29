import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: " ProjectName",
      fileName: (format) => `project-name.${format}.js`// questo risolve

    },
    rollupOptions: {
      external: ["vue"], // Make sure to also externalize any dependencies that you do not want to bundle into your library
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [
    vue()]
})


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import typescript from 'rollup-plugin-typescript2';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats:["es","cjs"],
      name: "VueLibrary",
      fileName: (format) => `vue-library.${format}.js`// questo risolve

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
    typescript({
      check: false,
      //include:["src/components/*.vue"], // per esportare i tipi
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration:true,
          declarationMap: true
        },
        exclude: [ 
          "vite.config.ts"
        ]
      }
      // typescript: require('typescript')
    }),
    vue()
  ]
})


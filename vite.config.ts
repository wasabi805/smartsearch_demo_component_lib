import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['lib'] })
  ],
  server: {
    port: 3000,
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'], 
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      
         output: {
                 assetFileNames: 'assets/[name][extname]',
                 entryFileNames: '[name].js',
        }
    }
  }
})

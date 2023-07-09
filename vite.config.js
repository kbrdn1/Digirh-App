import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSSL from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSSL()],
  server: {
    port: 3000,
    https: true
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
      '@hooks': '/src/hooks',
      '@stores': '/src/stores',
      '@contexts': '/src/contexts',
      '@router': '/src/router'
    }
  },
  base: "/Digirh-App/",
  build: {
    outDir: 'dist'
  }
})

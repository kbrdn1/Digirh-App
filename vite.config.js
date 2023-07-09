import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
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
  }
})

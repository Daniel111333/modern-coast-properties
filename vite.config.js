
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/modern-coast-properties/',
  server: {
    port: 8080,
    open: true
  }
})

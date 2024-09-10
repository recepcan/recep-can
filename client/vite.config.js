import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://my-personal-blog-onvercel-api.vercel.app',
        changeOrigin: true, // Origin başlığını değiştirir
        secure: false, 
      },
    },
  },
  plugins: [react()],
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://my-personal-blog-api-xi.vercel.app/',
        changeOrigin: true, // Origin başlığını değiştirir
        secure: true, // HTTPS yerine HTTP kullanıyorsanız
      },
    },
  },
  plugins: [react()],
});

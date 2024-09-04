import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://my-personal-blog-1x6y.vercel.app',
        changeOrigin: true, // Origin başlığını değiştirir
        secure: false, // HTTPS yerine HTTP kullanıyorsanız
      },
    },
  },
  plugins: [react()],
});

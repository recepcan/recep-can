import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/',
        changeOrigin: true, // Origin başlığını değiştirir
        secure: true, // HTTPS yerine HTTP kullanıyorsanız
      },
    },
  },
  plugins: [react()],
});

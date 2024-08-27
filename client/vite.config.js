import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://personal-website-recepcan-d4573b70e262.herokuapp.com/',
        changeOrigin: true, // Origin başlığını değiştirir
        secure: false, // HTTPS yerine HTTP kullanıyorsanız
      },
    },
  },
  plugins: [react()],
});

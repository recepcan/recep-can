import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import postcss from 'vite-plugin-postcss'

export default defineConfig({


  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        secure: false,
      },
    },
    },

    plugins: [
      react(),
      // postcss(),
      ],
  });
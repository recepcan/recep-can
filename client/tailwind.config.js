/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

const Myclass = plugin(function({ addUtilities }) {
  addUtilities({
    // 3D dönüşüm yardımcı sınıfları
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective1": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },

    // Metin gölge sınıfları
    '.text-shadow-sm': {
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    },
    '.text-shadow-md': {
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    '.text-shadow-lg': {
      textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
    },
    '.text-shadow-xl': {
      textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
    },
    '.text-shadow-none': {
      textShadow: 'none',
    },
  })
})

export default {
  mode: 'jit', // Just-In-Time derleyici
  darkMode: 'class', // Karanlık mod desteği

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playwrite: ['"Playwrite England"', 'cursive'],
        robotoSlab: ['"Roboto Slab"', 'serif'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },

      colors: {
        dark: {
          DEFAULT: '#333333',
          // Dark mode için ek renkler eklenebilir
        },
      },

      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        xl: '4px 4px 8px rgba(0, 0, 0, 0.5)',
      },

      animation: {
        'spin-slow': 'spin 1s linear infinite',
        fadeIn: 'fadeIn 1.5s ease-in-out forwards',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },

  plugins: [Myclass],
}

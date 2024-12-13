/** @type {import('tailwindcss').Config} */

import { transform } from 'framer-motion'

const plugin = require('tailwindcss/plugin')
 const Myclass=plugin(function({addUtilities}){
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)"
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d",
    },
    ".perspective1":{
      perspective:"1000px",
    },
    ".backface-hidden":{
      backfaceVisibility:"hidden"
    },
    '.text-shadow-sm': {
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    },
    '.text-shadow-md': {
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    '.text-shadow-lg': {
      textShadow: '1px 1px 6px rgba(0, 0, 0, 0.5)',
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
  mode: 'jit',
  darkMode: 'class',
  
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
      },
      colors: {
      dark: {
        DEFAULT: '#333333',
        // Diğer dark mode renkleri...
      }, 
      'serif': ['Playfair Display', 'serif'],
      'sans': ['Poppins', 'sans-serif'],
      
    },
    textShadow: {
      'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
      'md': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      'lg': '3px 3px 6px rgba(0, 0, 0, 0.5)',
      'xl': '4px 4px 8px rgba(0, 0, 0, 0.5)',
    },
    animation: {
      'spin-slow': 'spin 1s linear infinite',
    }
  
  },
  },
  plugins: [Myclass,
    ],
}


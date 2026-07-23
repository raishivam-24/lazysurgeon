/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d2a5a',
          deep: '#0a2049',
          light: '#0f326a',
        },
        accent: '#1d6fe0',
        accentlight: '#eaf2fc',
        gold: '#f0b11b',
        offwhite: '#f4f8fe',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

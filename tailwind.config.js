/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#121212',
          darker: '#1A1A1A',
          dark: '#242424',
          gray: '#2C2C2C'
        },
        accent: '#4F46E5', // Changed from bright red to a more subtle indigo
        light: '#FFFFFF'
      }
    },
  },
  plugins: [],
};
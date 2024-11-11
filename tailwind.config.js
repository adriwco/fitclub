/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#111317',
        'secondary-dark': '#1f2125',
        'tertiary-dark': '#35373b',
        'primary-light': '#f9ac54',
        'secondary-light': '#d79447',
        'tertiary-light': '#d1d5db',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};

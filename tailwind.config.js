/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

const fontSizePlugin = plugin(({ addBase }) => {
  addBase({
    html: { fontSize: '15px' },
  });
});

export default {
  content: [
    './pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './components/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: { 500: '#0067c7', 700: '#003464' },
      },
    },
  },
  plugins: [fontSizePlugin],
};

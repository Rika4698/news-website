/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212121',
        secondary: '#2c3e50',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'Helvetica', 'Arial', 'sans-serif'],
        pserif: ['var(--font-pt-serif)', 'Helvetica', 'Arial', 'sans-serif'],
        condensed: ['var(--font-roboto-condensed)', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: '#F6F6F6',
        'light-2': '#ECEFF1',
        transparent: 'transparent',
        primary: '#5F4DEE',
        'primary-2': '#9941ED',
        'primary-3': '#6258B3',
        'primary-4': '#8251B2',
        'primary-5': '#C64FFF',
        'primary-hover': '#AD67F1',
        secondary: '#FFF438',
        'secondary-2': '#FFF76A',
        black: '#170B30',
        danger: '#A61212',
        valid: '#4CB74C',
        gray: '#607D8B',
        'gray-2': '#B0BEC5',
        'gray-3': '#616161',
        'gray-4': '#546E7A',
        'gray-5': '#78909C',
        'red-1': '#A61212',
        'red-2': '#B84141',
        'red-3': '#FF2C1D',
        'red-4': '#650D0D',
        'green-1': '#4CB74C',
        'green-2': '#8DD18D',
      },
      fontFamily: {
        franklin: '__Libre_Franklin_66e5c3',
        nunito: '__Nunito_9c5fe4',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 50px 100px -20px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  plugins: [require('@tailwindcss/line-clamp')],
  theme: {
    extend: {
      colors: {
        traverse: {
          yellow: '#FAB114',
          off_yellow: '#FFF9EC',
          purple: '#8171DA',
          off_purple: '#EFECFF',
          blue: '#6997B1',
          off_blue: '#ECF8FF',
          green: '#60AB73',
          off_green: '#ECFFF1',
          dark: '#303B4B',
          icon_gray: '#7B8AA0',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'sign-up':
          "linear-gradient(to right, #19212D, rgba(33, 44, 58, 0.94), rgba(33, 44, 58, 0.78), rgba(33, 44, 58, 0.3)), url('/sign_up_bg.png')",
      },
      textDecorationThickness: {
        3: '3px',
      },
      textUnderlineOffset: {
        18: '18px',
      },
    },
  },
};

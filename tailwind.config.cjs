const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './main.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        'instagram-l': 'hsl(37, 97%, 70%)',
        'instagram-r': 'hsl(329, 70%, 58%)',
        youtube: 'hsl(348, 97%, 39%)',
        'lime-green': ' hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        'light-card': 'hsl(227, 47%, 96%)',
        'dark-blue': 'hsl(230, 17%, 14%)',
        'dark-text': 'hsl(228, 34%, 66%)',
        'dark-card': 'hsl(228, 28%, 20%)',
        'toggle-l': 'hsl(210, 78%, 56%)',
        'toggle-r': 'hsl(146, 68%, 55%)',
        'toggle-bg': 'hsl(230, 22%, 74%)',
      },
    },
  },
  plugins: [],
};

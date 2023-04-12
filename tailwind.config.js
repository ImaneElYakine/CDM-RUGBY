/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'poules.html', 'finale.html', 'matchs-passés.html', 'classement.html', 'bonus.html', 'règles.html',
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'fushia' : '#AD005E',
        'dark-fushia': '#73003f',
        'vert' : '#629D00',
        'bleu' : '#37CDEB',
        'gold' : "#e6c619",
        'dark-bleu' : "#1E40AF"
      },
      fontFamily: {
        'mediametrie': ['Mediametrie', 'sans-serif'],
      },
      screens: {
        'xs' : '450px',
        'sm': '600px',
        'lg': '1250px',
        'md': '900px'
      },
      fontSize: {
        'xxs': '0.625rem'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

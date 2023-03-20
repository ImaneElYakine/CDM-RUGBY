/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'poules.html', 'finale.html', 'matchs-passés.html', 'classement.html'
  ],
  theme: {
    extend: {
      colors: {
        'fushia' : '#AD005E',
        'dark-fushia': '#73003f',
        'vert' : '#629D00',
        'bleu' : '#37CDEB'
      },
      fontFamily: {
        'mediametrie': ['Mediametrie', 'sans-serif'],
      },
      screens: {
        'sm': '600px',
        'lg': '1250px',
        'md': '900px'
      }
    },
  },
  plugins: [],
}

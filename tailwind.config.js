/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'green-section-bg': "url(https://kiire.com/sites/default/files/2025-08/green-section-bg%201.png)"
      },
      colors: {
        'kiire-circle': '#FEF8ED',
        'kiire-green': '#F4FFD7',
        'kiire-green-light': '#FBFEE9',
        'kiire-lime': '#FAFFE4',
        'kiire-lime-100': '#F2FFC5',
        'kiire-lime-200': '#E4FF92',
        'kiire-orange': '#FEF8ED',
        'kiire-international-orange': '#FF5900',
        'kiire-purple': '#BCB9F5',
        'kiire-purple2': '#ECE4FF',
        'kiire-text': '#171B5B',
        'kiire-white': '#FAFAFA',
        'kiire-green-buttons': '#BCEA3D',
        'kiire-green-buttons-hover': '#91D500',
        'kiire-green-body': '#E5FCA6',
        'kiire-item-selected': '#FAFFED',
        'kiire-contacto': '#FDFFF8',
        'visa-green-body': '#193000',
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'bricolage-grotesque': ['Bricolage Grotesque', 'serif'],
        'libre': ['"Libre Caslon Display"', 'sans-serif'],
        'ibm': ['"IBM Plex Mono"', 'sans-serif']
      }
    },
  },
  plugins: [],
}


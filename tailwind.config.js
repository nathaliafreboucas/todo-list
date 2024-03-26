/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        'color-main': '#7DD0FF',
        'color-sec': '#384349',
        'color-text-gray': '#384349',
        'color-bg-white': '#384349',
        'form': '#d9d9d9',
      },
      fontWeight: {
        'wt-logo':'900',
        'wt-title':'500'
      },
      fontSize: {
        'sz-logo':'30px'
      },
      backgroundImage: {
        
        'main-texture': "url(../src/assets/imageProd.png)",
      }
    },
  },
  plugins: [],
}


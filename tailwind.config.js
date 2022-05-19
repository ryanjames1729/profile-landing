module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      darkBlue: '#2B2D42',
      darkGray: '#8D99AE',
      lightGray: '#EDF2F4',
      darkRed: '#D90429'
    },
    extend: {
    },
  },
  plugins: [],
}

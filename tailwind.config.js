module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      dynalight: ['Dynalight', 'cursive'],
      montserrat: ['Montserrat', 'Roboto', 'sans-serif'],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};

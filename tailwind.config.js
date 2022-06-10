module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Nunito Sans']
    },
    fontSize: {
      'sm': '14px',
      'md': '16px'
    },
    fontWieght: {
      light: 300,
      normal: 600,
      bold: 800
    }
  },
  plugins: [],
}

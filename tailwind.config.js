module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'rubik': ['Rubik', 'sans', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#409FFF',
        'dark': '#38455D',
        'sub-dark': '#929BAA',
        'green': '#29CC44',
        'main-gray': '#CFD3DE',
        'rare-gray': '#F7F8FA',
        'light-blue': '#E5F2FF',
        'sub-gray': '#EBEEF5',
        'light-yello': '#FFF9E6',
        'light-green': '#83DA91',
        'light-red': '#FFE8E6',
        'yellow': '#FFCC33',
        'red': '#FF5040',
      },
      boxShadow: {
        'default': '0px 3px 8px rgba(56, 69, 93, 0.03), 0px 1.5px 3px rgba(56, 69, 93, 0.04), 0px 0.5px 1px rgba(56, 69, 93, 0.1)'
      },
      backgroundImage: {
        'checkbox-img': 'url("./assets/icons/checked.svg")'
      }
    },
  },
  plugins: [],
}
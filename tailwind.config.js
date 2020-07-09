module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        mainGreen: {
          darker: '#0F3811',
          dark: '#306230',
          default: '#8CAC0D',
          light: '#9BBC0F'
        },
        mainGrey: {
          darker: '#000000',
          dark: '#555555',
          default: '#AAAAAA',
          light: '#FFFFFF'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
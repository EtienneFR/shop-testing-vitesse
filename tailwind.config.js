// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('windicss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}

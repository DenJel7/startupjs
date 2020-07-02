const variables = require('./variables.cjs')
const shadows = require('./shadows.cjs')
const PALLETE = require('./palette.json')
const generateColorsFromPalette = require('./generateColorsFromPalette.cjs')

module.exports = function (pallete = PALLETE) {
  return {
    pallete,
    shadows,
    colors: generateColorsFromPalette(pallete),
    ...variables
  }
}

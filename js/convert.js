const path = require('path')
const getColors = require('get-image-colors')
 
var colorCodes = [];
getColors(path.join(__dirname, 'images/img3.jpeg')).then(colors => {
  colors.map(currVal => {
  	colorCodes.push(currVal._rgb);
  })
  grabCol(colorCodes);
})

//console.log($('#container'))

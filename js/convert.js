const path = require('path');
const getColors = require('get-image-colors');

var colorCodes = [];
$('#btn').on('click', function(){
	let link = 'https://cdn.clarivate.com/wp-content/uploads/2017/05/antifraud-darkweb-and-cyber-intelligence-560x320.jpg';

	getColors(link).then(colors => {
	  colors.map(currVal => {
	  	colorCodes.push(currVal._rgb);
	  })
	  grabCol(colorCodes);
	})
})

//console.log($('#container'))


//grabs colors from image conversion
function grabCol(colors) {
	colors.map(currVal => {
		console.log(currVal)
		$('#container').append(`<div class="color" style="background-color:rgb(${currVal[0]}, ${currVal[1]}, ${currVal[2]})"></div>`);
	})
}
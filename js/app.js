
//grabs colors from image conversion
function grabCol(colors) {
	colors.map(currVal => {
		console.log(currVal)
		$('#container').append(`<div class="color" style="background-color:rgb(${currVal[0]}, ${currVal[1]}, ${currVal[2]})"></div>`);
	})
}


//makes dynamic element the same height and width
// var $elem = ​$('div');
// $(window).resize(function () {
//     $elem.height($elem.width());
// }).resize();

let $img = $('#playImg');
$(window).resize(function () {
	$img.height($img.width());
}).resize();
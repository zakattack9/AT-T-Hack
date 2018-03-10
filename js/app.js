
//grabs colors from image conversion
$(window).scroll(() => {
	$('#titleWrap').css('opacity', Math.max(1 - $(window).scrollTop() / 275, 0));
});

function grabCol(colors) {
	colors.map(currVal => {
		console.log(currVal)
		$('#container').append(`<div class="color" style="background-color:rgb(${currVal[0]}, ${currVal[1]}, ${currVal[2]})"></div>`);
	})
}

function convertor() {
	console.log($('#displayImg').attr('src'))
}

var loadFile = function(event) {
  var output = document.getElementById('displayImg');
  output.src = URL.createObjectURL(event.target.files[0]);
};
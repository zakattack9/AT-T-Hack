
//grabs colors from image conversion
function grabCol(colors) {
	colors.map(currVal => {
		console.log(currVal)
		$('#container').append(`<div class="color" style="background-color:rgb(${currVal[0]}, ${currVal[1]}, ${currVal[2]})"></div>`);
	})
}

function convertor() {
	console.log($('#displayImg').attr('src'))
}

// let fileInput = document.getElementById("fileIntake");

// fileInput.accept = "image/*";
// fileInput.require = true;

// fileInput.addEventListener("change", () => {
//   let reader = new FileReader();
//   let displayImg = document.getElementById("displayImg");

//   reader.addEventListener("load", () => {
//       displayImg.src = reader.result;
//       console.log(displayImg.src)
//   }, false)

//   reader.readAsDataURL(fileInput.files[0])
// })


var loadFile = function(event) {
  var output = document.getElementById('displayImg');
  output.src = URL.createObjectURL(event.target.files[0]);
};
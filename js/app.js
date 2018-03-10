
//grabs colors from image conversion
function grabCol(colors) {
	colors.map(currVal => {
		console.log(currVal)
		$('#container').append(`<div class="color" style="background-color:rgb(${currVal[0]}, ${currVal[1]}, ${currVal[2]})"></div>`);
	})
}
<<<<<<< HEAD
/*var context = new AudioContext()
var o = context.createOscillator()
o.type = "sine"
o.connect(context.destination)
o.end()
*/
//get's an array with 5 arrays with 4 elements
var test=[[39,56,81,1],[191,177,171,1],[45,132,94,1],[87,191,161,1],[68,112,178,1]];

var list = [
["red","Rmoance",[255,0,0,1]],
["pink","Love",[255,105,180,1]],
["orange","Energetic",[255,165,0,1]],
["yellow","Creativity",[255,255,0,1]],
["blue","Relax",[0,0,225,1]],
["green","Calm",[0,128,0,1]],
["purple","Royal",[128,0,128,1]],
["brown","Bold",[205,133,63,1]],
["black","Alternative",[0,0,0,1]],
["white","Upliftng",[255,255,255,1]]];
function round(data){
	var avg =[];
	var red=0;
	var green=0;
	var blue=0;
	data.map(rgb =>{
		red += rgb[0];
	});
	data.map(rgb =>{
		green += rgb[1];
	});
	data.map(rgb =>{
		blue += rgb[2];
	});
	avg.push(red/5);
	avg.push(green/5);
	avg.push(blue/5);
	console.log("avg"+avg)
	////////
	var diff =[];
	list.map(rgb => diff.push((Math.abs(rgb[2][0]-avg[0])+Math.abs(rgb[2][1]-avg[1])+Math.abs(rgb[2][2]-avg[2]))/3));
	console.log(diff)
	return (diff.indexOf(Math.min(...diff)));
}
console.log(round(test));
//diff.push((Math.abs(rgb[2][0]-avg[0])+Math.abs(rbg[2][1]-avg[1])+Math.abs(rgb[2][2]-avg[2]))/3)
=======

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
>>>>>>> 5989ad57625d93746d457d6d75515af3035cd98e

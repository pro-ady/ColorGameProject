// var colors = [
// 	"rgb(0, 255, 255)",
// 	"rgb(255, 0, 255)",
// 	"rgb(255, 255, 0)",
// 	"rgb(127, 255, 255)",
// 	"rgb(255, 127, 255)",
// 	"rgb(255, 255, 127)"
// ]

var colors = generateColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#color");
colorDisplay.textContent = pickedColor;

var messageDisplay = document.querySelector("#message");

h1 = document.querySelector("h1");

reset_button = document.querySelector("#reset");

reset_button.addEventListener("click", function(){
	console.log("Reset Button Clicked");
	colors = generateColors(colors.length);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}

	if(reset_button.textContent === "Play Again"){
		reset_button.textContent = "New Colors";
		h1.style.backgroundColor = "steelblue";
		messageDisplay.textContent = "";
	}
});

hard_button = document.querySelector("#hardBtn");
easy_button = document.querySelector("#easyBtn");
var switch_mode = 1; // 0 means Easy, 1 means Hard

hard_button.addEventListener("click", function(){
	if(switch_mode === 0){
		switch_mode = 1;
		this.classList.add("selected");
		easy_button.classList.remove("selected");

		colors = generateColors(6);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		messageDisplay.textContent = "";
		h1.style.backgroundColor = "steelblue";

		for(var i=0; i<squares.length;i++){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
	}
});

easy_button.addEventListener("click", function(){
	if(switch_mode === 1){
		switch_mode = 0;
		this.classList.add("selected");
		hard_button.classList.remove("selected");

		colors = generateColors(3);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		messageDisplay.textContent = "";
		h1.style.backgroundColor = "steelblue";

		for(var i=0;i<squares.length;i++){
			if(colors[i]){
				squares[i].style.backgroundColor = colors[i];
			}

			else{
				squares[i].style.display = "none";
			}
		}
	}
});

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];

	// Add Click Listeners to quares
	squares[i].addEventListener("click", function(){
		console.log("Clicked a square");

		// Get color of clicked square
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor);

		if(clickedColor === pickedColor){
			console.log("Correct");
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
			reset_button.textContent = "Play Again";
		}

		else{
			console.log("Incorrect");
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function changeColors(color){
	for(var i=0;i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateColors(n){
	var main_set = [];

	for(var i=0;i<n;i++){
		var color_subset = [];

		for(var j=0;j<3;j++){
			color_subset.push(Math.floor(Math.random()*256));
		}

		main_set.push("rgb(" + color_subset[0] + ", " + color_subset[1]
					  + ", " + color_subset[2] + ")");
	}

	return main_set;
}
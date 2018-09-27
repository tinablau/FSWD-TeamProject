for (let i = 1; i < 5; i++) {
	document.getElementById("w"+i).addEventListener("click", function(){showBar(i)})
}

function showBar(x) {
	var blue_bar = document.getElementsByClassName("blue_bar")[0];
	var red_bar = document.getElementsByClassName("red_bar")[0];
	var green_bar = document.getElementsByClassName("green_bar")[0];
	var yellow_bar = document.getElementsByClassName("yellow_bar")[0];
	var week1 = document.getElementById("w1")
	var week2 = document.getElementById("w2")
	var week3 = document.getElementById("w3")
	var week4 = document.getElementById("w4")
	if (x == 1) {
		blue_bar.style.width = "10%";
		red_bar.style.width = "100%";
		green_bar.style.width = "50%";
		yellow_bar.style.width = "100%";
		week1.style.filter = "grayscale(0%)";
		week2.style.filter = "grayscale(90%)";
		week3.style.filter = "grayscale(90%)";
		week4.style.filter = "grayscale(90%)";
	} else if (x == 2) {
		blue_bar.style.width = "20%";
		red_bar.style.width = "100%";
		green_bar.style.width = "60%";
		yellow_bar.style.width = "80%";
		week1.style.filter = "grayscale(90%)";
		week2.style.filter = "grayscale(0%)";
		week3.style.filter = "grayscale(90%)";
		week4.style.filter = "grayscale(90%)";
	} else if (x == 3) {
		blue_bar.style.width = "20%";
		red_bar.style.width = "70%";
		green_bar.style.width = "70%";
		yellow_bar.style.width = "60%";
		week1.style.filter = "grayscale(90%)";
		week2.style.filter = "grayscale(90%)";
		week3.style.filter = "grayscale(0%)";
		week4.style.filter = "grayscale(90%)";
	} else if (x == 4) {
		blue_bar.style.width = "30%";
		red_bar.style.width = "40%";
		green_bar.style.width = "30%";
		yellow_bar.style.width = "40%";
		week1.style.filter = "grayscale(90%)";
		week2.style.filter = "grayscale(90%)";
		week3.style.filter = "grayscale(90%)";
		week4.style.filter = "grayscale(0%)";
	}
}
let carouselWidth = 600; 

let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

let imageNum = 0;


function showNextImage() {
	imageNum ++;
	checkControls();
	let calcLeft = -carouselWidth * imageNum;
	imageRow.style.left = calcLeft + "px";

}

nextButton.onclick = showNextImage;

function showPrevImage() {

	imageNum --;
	checkControls();
	let calcLeft = -carouselWidth * imageNum;
	imageRow.style.left = calcLeft + "px";


}

prevButton.onclick = showPrevImage;
let totalImages = document.getElementsByClassName("carousel-image").length;

/* Part 2.7 */
function checkControls() {
	if (imageNum == 0) {
		prevButton.classList.add("hidden")
	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove("hidden")
	}
	if (imageNum == totalImages-1) {
		nextButton.classList.add("hidden")
		
	}
	else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove("hidden")

	}
}



let prevButton1 = document.getElementById("button-previous-1");
let nextButton1 = document.getElementById("button-next-1");
let imageRow1 = document.getElementById("carousel-image-row-1");

let imageNum1 = 0;


function showNextImage1() {
	imageNum1 ++;
	checkControls1();
	let calcLeft = -carouselWidth * imageNum1;
	imageRow1.style.left = calcLeft + "px";

}

nextButton1.onclick = showNextImage1;

function showPrevImage1() {

	imageNum1 --;
	checkControls1();
	let calcLeft = -carouselWidth * imageNum1;
	imageRow1.style.left = calcLeft + "px";


}

prevButton1.onclick = showPrevImage1;
let totalImages1 = document.getElementsByClassName("carousel-image-1").length;

/* Part 2.7 */
function checkControls1() {
	if (imageNum1 == 0) {
		prevButton1.classList.add("hidden")
	}
	else if (prevButton1.classList.contains("hidden")) {
		prevButton1.classList.remove("hidden")
	}
	if (imageNum1 == totalImages1-1) {
		nextButton1.classList.add("hidden")
		
	}
	else if (nextButton1.classList.contains("hidden")) {
		nextButton1.classList.remove("hidden")

	}
}



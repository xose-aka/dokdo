let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
	const slides = document.getElementsByClassName("mainSlides");
	const dots = document.getElementsByClassName("dot");
	
	for(let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	if(n > slides.length || slideIndex > slides.length) {
		slideIndex = 1;
	}

	for(let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	slideIndex++;
	setTimeout(showSlides, 5000);
} 

function currentSlides(n) {
  showSlides(slideIndex = n);
}


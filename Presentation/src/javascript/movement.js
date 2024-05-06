let slideIndex = 0;
showSlide(slideIndex);

function nextSlide() {
  showSlide(slideIndex += 1);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  
  // Se n for maior ou igual ao número de slides, volte ao primeiro slide
  if (n >= slides.length) {
    slideIndex = 0;
  }
  
  // Esconda todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  // Mostre o slide atual
  slides[slideIndex].classList.add("active");
}
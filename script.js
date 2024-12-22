const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  const slider = document.querySelector('.slider');
  slider.style.transform = translateX(-${currentIndex * 100}%);
}

setInterval(showNextSlide, 3000); // Pindah slide setiap 3 detik
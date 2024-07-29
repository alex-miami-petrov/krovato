// const slides = document.querySelectorAll(".slides img");
// const dots = document.querySelectorAll(".dot");
// const slideInterval = 3000; // 3 секунди для автоматичної зміни

// let currentSlide = 0;
// let slideTimer;

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.toggle("active", i === index);
//   });
//   dots.forEach((dot, i) => {
//     dot.classList.toggle("active", i === index);
//   });
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// function startSlideShow() {
//   slideTimer = setInterval(nextSlide, slideInterval);
// }

// function stopSlideShow() {
//   clearInterval(slideTimer);
// }

// dots.forEach((dot) => {
//   dot.addEventListener("click", () => {
//     stopSlideShow();
//     currentSlide = parseInt(dot.getAttribute("data-slide"));
//     showSlide(currentSlide);
//     startSlideShow();
//   });
// });

// showSlide(currentSlide);
// startSlideShow();

const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");
const slideInterval = 3000; // 3 секунди для автоматичної зміни

let currentSlide = 0;
let slideTimer;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
    dot.classList.toggle("inactive", i !== index); // Змінюємо клас для неактивних кружечків
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function startSlideShow() {
  slideTimer = setInterval(nextSlide, slideInterval);
}

function stopSlideShow() {
  clearInterval(slideTimer);
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    stopSlideShow();
    currentSlide = parseInt(dot.getAttribute("data-slide"));
    showSlide(currentSlide);
    startSlideShow();
  });
});

showSlide(currentSlide);
startSlideShow();

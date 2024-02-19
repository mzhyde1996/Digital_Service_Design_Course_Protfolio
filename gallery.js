"use strict";
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const fields = document.getElementsByClassName('field');
const modals = document.getElementsByClassName('modal');

// Add click event listener to each field
for (let i = 0; i < fields.length; i++) {
  fields[i].addEventListener('click', function () {
    openModal(i); // Pass the index of the clicked field to open the corresponding modal
  });
}

// Function to open a specific modal
function openModal(index) {
  modals[index].style.display = 'block';
}

// Function to close a specific modal
function closeModal(index) {
  modals[index].style.display = 'none';
}

// Add click event listener to close buttons in all modals
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    closeModal(index);
  });
});

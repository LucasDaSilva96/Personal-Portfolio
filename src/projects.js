const carousel = document.querySelector(".project-box");
const firstImage = carousel.querySelectorAll("img")[0];
const leftArrow = document.querySelector(".left-icon");
const rightArrow = document.querySelector(".right-icon");

let firstImageWidth = firstImage.clientWidth;
const AmountOfImgs = carousel.querySelectorAll("img").length;
const allImages = carousel.querySelectorAll("img");
let COUNTER = 0;

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

export function dragStart(e) {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
}

export function dragStop() {
  isDragStart = false;
}

export function dragging(e) {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
}

export function scrollRight() {
  rightArrow.addEventListener("click", function () {
    carousel.scrollLeft += firstImageWidth;
    COUNTER++;
    showHideScroll(COUNTER);
  });
}

export function scrollLeft() {
  leftArrow.addEventListener("click", function () {
    carousel.scrollLeft += -firstImageWidth;
    COUNTER--;
    showHideScroll(COUNTER);
  });
}

function showHideScroll(COUNTER) {
  if (COUNTER < 1) {
    leftArrow.classList.add("hidden");
  } else if (COUNTER === AmountOfImgs - 1) {
    rightArrow.classList.add("hidden");
  } else {
    leftArrow.classList.remove("hidden");
    rightArrow.classList.remove("hidden");
  }
}

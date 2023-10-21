const projectBox = document.querySelector(".project-box");
const prev = document.querySelector(".left");
const next = document.querySelector(".right");
const scrollContainer = document.querySelector(".projects-container");

const image_width = 410;
let COUNTER = 410;
const MAX = scrollContainer.scrollWidth;

export function nextSlide() {
  next.addEventListener("click", () => {
    if (COUNTER + image_width < MAX - 205) {
      COUNTER += image_width;
    } else {
      next.classList.add("hidden");
      return;
    }
    projectBox.style.transform = `translateX(-${COUNTER}px)`;
    prev.classList.remove("hidden");
    console.log(COUNTER);
  });
}

export function prevSlide() {
  prev.addEventListener("click", () => {
    if (COUNTER > image_width - image_width) {
      COUNTER -= image_width;
    } else {
      prev.classList.add("hidden");
      return;
    }
    projectBox.style.transform = `translateX(-${COUNTER}px)`;
    next.classList.remove("hidden");
  });
}

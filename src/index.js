import "./style.css";
import { renderLangList, renderHamburger, hideNav } from "./nav.js";
import { renderHeroSpline } from "./spline.js";
import {
  dragStart,
  dragStop,
  dragging,
  scrollLeft,
  scrollRight,
} from "./projects.js";

// Language-selection
const selectedLangBox = document.querySelector(".selected-lang");
selectedLangBox.addEventListener("click", renderLangList);

renderHamburger();
// renderHeroSpline();
hideNav();

const carousel = document.querySelector(".project-box");

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
scrollRight();
scrollLeft();

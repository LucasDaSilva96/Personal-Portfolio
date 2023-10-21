import "./style.css";
import { renderLangList, renderHamburger, hideNav } from "./nav.js";
import { renderHeroSpline } from "./spline.js";
import { nextSlide, prevSlide } from "./projects.js";
// Language-selection
const selectedLangBox = document.querySelector(".selected-lang");
selectedLangBox.addEventListener("click", renderLangList);

renderHamburger();
// renderHeroSpline();
hideNav();
nextSlide();
prevSlide();

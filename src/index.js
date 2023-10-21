import "./style.css";
import { renderLangList, renderHamburger, hideNav } from "./nav.js";
import { renderHeroSpline } from "./spline.js";
import { nextSlide, prevSlide } from "./projects.js";
import { formAction } from "./form";
// Language-selection
const selectedLangBox = document.querySelector(".selected-lang");
selectedLangBox.addEventListener("click", renderLangList);

renderHamburger();
renderHeroSpline();
hideNav();
nextSlide();
prevSlide();
formAction();

const hero_section = document.getElementById("hero-sec");
const contact_section = document.getElementById("contact-sec");

const letsTalkBtn = document.querySelector(".lets-talk-btn");
const scrollUpBtn = document.querySelector(".up-icon-box");

letsTalkBtn.addEventListener("click", () => {
  contact_section.scrollIntoView();
});

scrollUpBtn.addEventListener("click", () => {
  hero_section.scrollIntoView();
});

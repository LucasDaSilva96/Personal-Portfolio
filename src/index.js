import "./style.css";
import { renderLangList, renderHamburger, hideNav } from "./nav.js";
import { renderHeroSpline, renderContactSpline } from "./spline.js";
import { nextSlide, prevSlide } from "./projects.js";
import { formAction } from "./form";
import { translate } from "./language.js";
// Language-selection
const selectedLangBox = document.querySelector(".selected-lang");
selectedLangBox.addEventListener("click", renderLangList);
const lang_options = document.querySelectorAll(".lang-opt");

window.addEventListener("DOMContentLoaded", () => {
  lang_options.forEach((box) => {
    box.addEventListener("click", () => {
      translate(box.id);
    });
  });
});

renderHamburger();
renderHeroSpline();
renderContactSpline();
hideNav();
nextSlide();
prevSlide();
formAction();

const hero_section = document.getElementById("hero-sec");
const about_section = document.getElementById("about-p");
const portfolio_section = document.getElementById("portfolio-h4");
const contact_section = document.getElementById("contact-p");

const home_nav = document.querySelector(".home");
const about_nav = document.querySelector(".about");
const portfolio_nav = document.querySelector(".showcase");
const contact_nav = document.querySelector(".contact");

const letsTalkBtn = document.querySelector(".lets-talk-btn");
const scrollUpBtn = document.querySelector(".up-icon-box");

letsTalkBtn.addEventListener("click", () => {
  contact_section.scrollIntoView();
});

scrollUpBtn.addEventListener("click", () => {
  hero_section.scrollIntoView();
});

function elementInViewport(el) {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  let width = el.offsetWidth;
  let height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + window.innerHeight &&
    left + width <= window.pageXOffset + window.innerWidth
  );
}

window.addEventListener("scroll", () => {
  if (elementInViewport(hero_section)) {
    home_nav.classList.add("is-on");
  } else {
    home_nav.classList.remove("is-on");
  }

  if (elementInViewport(about_section)) {
    about_nav.classList.add("is-on");
  } else {
    about_nav.classList.remove("is-on");
  }

  if (elementInViewport(portfolio_section)) {
    portfolio_nav.classList.add("is-on");
  } else {
    portfolio_nav.classList.remove("is-on");
  }

  if (elementInViewport(contact_section)) {
    contact_nav.classList.add("is-on");
  } else {
    contact_nav.classList.remove("is-on");
  }
});

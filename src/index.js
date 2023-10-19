import "./style.css";
import { renderLangList, renderHamburger } from "./nav.js";
import { renderHeroSpline } from "./spline.js";

// Language-selection
const selectedLangBox = document.querySelector(".selected-lang");
selectedLangBox.addEventListener("click", renderLangList);

renderHamburger();
renderHeroSpline();

import "./style.css";
import { renderLangList } from "./nav.js";

// Language-selection
const selectedLangBox = document.querySelector(".selected-lang");
selectedLangBox.addEventListener("click", renderLangList);

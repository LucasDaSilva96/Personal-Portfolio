const menuContainer = document.querySelector(".lang-menu");
const selectedLangBox = document.querySelector(".selected-lang");
const langList = document.getElementById("lang-list");
const langOptions = document.querySelectorAll(".lang-opt");
const sectionsNavContainer = document.querySelector(".sections-container");
const sections = sectionsNavContainer.querySelectorAll("a");
const hamburger = document.querySelector(".hamburger");

export function hideNav() {
  sections.forEach((section) => {
    section.addEventListener("click", function () {
      sectionsNavContainer.classList.toggle("show-menu");
      hamburger.classList.toggle("is-active");
    });
  });
}

export function renderLangList() {
  langList.classList.toggle("hidden");
  renderLangSelected();
}

selectedLangBox.addEventListener("click", renderLangList);

function renderLangSelected() {
  langOptions.forEach((el) => {
    el.addEventListener("click", function () {
      selectedLangBox.innerHTML = el.innerHTML;
      langList.classList.add("hidden");
    });
  });
}

export function renderHamburger() {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    sectionsNavContainer.classList.toggle("show-menu");
  });
}

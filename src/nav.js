const menuContainer = document.querySelector(".lang-menu");
const selectedLangBox = document.querySelector(".selected-lang");
const langList = document.getElementById("lang-list");
const langOptions = document.querySelectorAll(".lang-opt");
const sectionsNavContainer = document.querySelector(".sections-container");

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
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    sectionsNavContainer.classList.toggle("show-menu");
  });
}

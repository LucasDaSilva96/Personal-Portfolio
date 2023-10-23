const loader = document.querySelector(".spinner-box");
const hero_bg = document.querySelector(".background-hero");

export function renderHeroSpline() {
  setTimeout(() => {
    hero_bg.classList.remove("hidden");
    loader.classList.add("hidden");
  }, 3000);
}

const contact_bg = document.querySelector(".background-contact");
const contactLoader = document.querySelector(".loading");
export function renderContactSpline() {
  setTimeout(() => {
    contact_bg.classList.remove("hidden");
    contactLoader.classList.add("hidden");
  }, 3000);
}

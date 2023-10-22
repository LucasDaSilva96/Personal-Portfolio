const loader = document.querySelector(".spinner-box");
const hero_video = document.getElementById("hero-video");

export function renderHeroSpline() {
  setTimeout(() => {
    hero_video.classList.remove("hidden");
    loader.classList.add("hidden");
  }, 3000);
}

const contact_video = document.getElementById("contact-video");
const contactLoader = document.querySelector(".loading");
export function renderContactSpline() {
  setTimeout(() => {
    contact_video.classList.remove("hidden");
    contactLoader.classList.add("hidden");
  }, 3000);
}

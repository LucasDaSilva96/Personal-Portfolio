const heroIframe = document.getElementById("hero-spline");
const loader = document.querySelector(".spinner-box");
export async function renderHeroSpline() {
  try {
    const URL = await fetch(
      "https://my.spline.design/theorbhand-70f9471499959493b0b4fdb1d489a7f6/"
    );

    heroIframe.src = `${URL.url}`;

    setTimeout(() => {
      heroIframe.classList.remove("hidden");
      loader.classList.add("hidden");
    }, 3000);
  } catch (error) {
    console.error(error);
  }
}

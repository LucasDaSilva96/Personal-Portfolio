/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formAction: () => (/* binding */ formAction)
/* harmony export */ });
const form = document.querySelector("form");
function formAction() {
  return form.action = "https://formsubmit.co/dasilvajunior881@gmail.com";
}

/***/ }),

/***/ "./src/language.js":
/*!*************************!*\
  !*** ./src/language.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translate: () => (/* binding */ translate)
/* harmony export */ });
// ***************** NAV ******************
const home_nav = document.querySelector(".home");
const about_nav = document.querySelector(".about");
const portfolio_nav = document.querySelector(".showcase");
const contact_nav = document.querySelector(".contact");
const letsTalk_nav = document.querySelector(".lets-talk-btn");

// ***************** HERO-SECTION ******************
const hero_box = document.querySelector(".hero-txt-container");

// ***************** ABOUT-SECTION ******************
const about_h1 = document.getElementById("about-h1");
const about_p = document.getElementById("about-p");
const about_skills_h2 = document.getElementById("skill-h2");

// ***************** SHOWCASE-SECTION ******************
const showcase_h3 = document.getElementById("portfolio-h3");
const showcase_h4 = document.getElementById("portfolio-h4");
const showcase_view_live = document.querySelectorAll(".view-live");
const showcase_see_code = document.querySelectorAll(".view-code");

// ***************** CONTACT-SECTION ******************
const contact_h2 = document.getElementById("contact-h2");
const contact_p = document.getElementById("contact-p");
const contact_form_name = document.querySelector(".form-name");
const contact_form_phone = document.querySelector(".form-phone");
const contact_form_email = document.querySelector(".form-email");
const contact_form_send = document.querySelector(".send-btn");

// ***************** FOOTER-SECTION ******************
const footer_h5 = document.getElementById("footer-h5");
const footer_h1 = document.getElementById("footer-h1");
const footer_quickLinks_h6 = document.getElementById("quick-h6");
const footer_home_nav = document.querySelector(".footer-home");
const footer_about_nav = document.querySelector(".footer-about");
const footer_portfolio_nav = document.querySelector(".footer-projects");
const footer_sayHello_h6 = document.getElementById("hello-h6");
const ENG = {
  home_nav: "Home",
  about_nav: "About",
  portfolio_nav: "Showcase",
  contact_nav: "Contact",
  letsTalk_nav: "LET'S TALK",
  // *************************
  hero_box: `<h4 class="hero-h4">Front-End Developer</h4>
  <h1 class="hero-h1">
    Hello, I'm <strong class="name">Lucas</strong><br />
    Welcome To My World.
  </h1>`,
  // *************************
  about_h1: "Front-End Developer",
  about_p: ` Hello, I'm Lucas, a passionate front-end developer with a clear vision of becoming a full-stack maestro. I craft beautiful, user-friendly websites using HTML, CSS, and JavaScript, ensuring a seamless experience for every visitor. With a strong grasp of Git for version control and Webpack for efficient project management, I'm well-versed in the art of modern web development.
  But it doesn't stop there. My journey towards full-stack expertise is in full swing, and I'm already making API calls to bring dynamic data into my projects. My design sensibilities are honed through experience with Figma, giving me a keen eye for aesthetics.
  I'm currently studying a two-year program for front-end development at Folkuniversitet-Gothenburg and working on my personal portfolio, where you can witness the culmination of my skills. Each project showcases my dedication to delivering top-notch user experiences. As I bridge the gap from front-end to full-stack, I'm excited to bring dynamic, data-driven web applications to life.`,
  about_skills_h2: "Main skills",
  // *************************
  showcase_h3: "PORTFOLIO",
  showcase_h4: "Discover my latest works",
  showcase_view_live: "View live",
  showcase_see_code: "See code",
  // *************************
  contact_h2: "Hire Me",
  contact_p: "I'am available for freelance work. Connect with me.",
  contact_form_name: "Your Name*",
  contact_form_email: "Your Email*",
  contact_form_phone: "Telephone",
  contact_form_send: "Submit",
  // *************************
  footer_h5: "READY TO DO THIS",
  footer_h1: "Let's get to work",
  footer_quickLinks_h6: "Quick Link",
  footer_home_nav: "Home",
  footer_about_nav: "About",
  footer_portfolio_nav: "Showcase",
  footer_sayHello_h6: "Say Hello!"
};
const SWE = {
  home_nav: "Hem",
  about_nav: "Om",
  portfolio_nav: "Projekt",
  contact_nav: "Kontakt",
  letsTalk_nav: "Låt oss prata",
  // *************************
  hero_box: `<h4 class="hero-h4">Front-End-Utvecklare</h4>
   <h1 class="hero-h1">
   Hej, Jag heter <strong class="name">Lucas</strong><br />
   Välkommen till min värld.
   </h1>`,
  // *************************
  about_h1: "Front-End Utvecklare",
  about_p: ` Hej, jag heter Lucas, en passionerad frontend-utvecklare med en tydlig vision om att bli en full-stack maestro. Jag skapar vackra, användarvänliga webbplatser med HTML, CSS och JavaScript, vilket säkerställer en upplevelse för varje besökare. Med ett starkt grepp om Git för versionskontroll och Webpack för effektiv projektledning, är jag väl insatt i webbutveckling.
  Men det stannar inte där. Min resa mot full-stack expertis är i full gång, och jag gör redan API-anrop för att få in dynamisk data i mina projekt. Min designkänslighet finslipas genom erfarenhet med Figma, vilket ger mig ett skarpt öga för estetik.
  Jag läser just nu ett tvåårigt program för frontend-utveckling på Folkuniversitet-Göteborg och arbetar med min personliga portfolio, där du kan bevittna mina kunskaper. Varje projekt visar mitt engagemang för att leverera förstklassiga användarupplevelser. När jag överbryggar klyftan från front-end till full-stack är jag glad över att få liv i dynamiska, datadrivna webbapplikationer.`,
  about_skills_h2: "Färdigheter",
  // *************************
  showcase_h3: "PORTFOLIO",
  showcase_h4: "Upptäck mina senaste verk",
  showcase_view_live: "Se live",
  showcase_see_code: "Se Kod",
  // *************************
  contact_h2: "Anställ Mig",
  contact_p: "Jag är tillgänglig för frilansarbete. Ta kontakt med mig.",
  contact_form_name: "Ditt Namn*",
  contact_form_email: "Din Email*",
  contact_form_phone: "Telefonnummer",
  contact_form_send: "Skicka in",
  // *************************
  footer_h5: "Redo att göra detta",
  footer_h1: "Låt oss börja jobba",
  footer_quickLinks_h6: "Snabblänkar",
  footer_home_nav: "Hem",
  footer_about_nav: "Om",
  footer_portfolio_nav: "Projekt",
  footer_sayHello_h6: "Säg Hej!"
};
const NOR = {
  home_nav: "Hjem",
  about_nav: "Om",
  portfolio_nav: "Prosjekter",
  contact_nav: "Kontakt",
  letsTalk_nav: "LA OSS SNAKKE",
  // *************************
  hero_box: `<h4 class="hero-h4">Front-End Utvikler</h4>
    <h1 class="hero-h1">
    Hei, Jag heter <strong class="name">Lucas</strong><br />
    Velkommen til min verden.
    </h1>`,
  // *************************
  about_h1: "Front-End Utvikler",
  about_p: ` Hei, jeg heter Lucas, en lidenskapelig front-end-utvikler med en klar visjon om å bli en full-stack maestro. Jeg lager vakre, brukervennlige nettsider ved hjelp av HTML, CSS og JavaScript, og sikrer en  opplevelse for alle besøkende. Med et sterkt grep om Git for versjonskontroll og Webpack for effektiv prosjektledelse, er jeg godt bevandret i kunsten å moderne webutvikling.
  Men det stopper ikke der. Reisen min mot full-stack-ekspertise er i full gang, og jeg foretar allerede API-kall for å bringe dynamiske data inn i prosjektene mine. Mine designfølsomheter er finpusset gjennom erfaring med Figma, noe som gir meg et godt øye for estetikk.
  Jeg studerer for tiden et toårig program for frontend-utvikling ved Folkuniversitet-Gøteborg og jobber med min personlige portefølje, hvor du kan se kulminasjonen av ferdighetene mine. Hvert prosjekt viser min dedikasjon til å levere førsteklasses brukeropplevelser. Når jeg bygger bro fra front-end til full-stack, er jeg glad for å bringe dynamiske, datadrevne nettapplikasjoner til live.`,
  about_skills_h2: "Hovedferdigheter",
  // *************************
  showcase_h3: "PORTFOLIO",
  showcase_h4: "Oppdag de siste verkene mine",
  showcase_view_live: "Se live",
  showcase_see_code: "Se Kode",
  // *************************
  contact_h2: "Ansette Meg",
  contact_p: "Jeg er tilgjengelig for frilansarbeid. Ta kontakt med meg.",
  contact_form_name: "Navnet Ditt*",
  contact_form_email: "Din Epost*",
  contact_form_phone: "Telefonnummer",
  contact_form_send: "Sende inn",
  // *************************
  footer_h5: "KLAR TIL Å GJØRE DETTE",
  footer_h1: "La oss gå på jobb",
  footer_quickLinks_h6: "Rask Link",
  footer_home_nav: "Hjem",
  footer_about_nav: "Om",
  footer_portfolio_nav: "Projekter",
  footer_sayHello_h6: "Si Hei!"
};
function translate(lang) {
  if (lang === "eng") {
    home_nav.textContent = ENG.home_nav;
    about_nav.textContent = ENG.about_nav;
    portfolio_nav.textContent = ENG.portfolio_nav;
    contact_nav.textContent = ENG.contact_nav;
    letsTalk_nav.textContent = ENG.letsTalk_nav;
    hero_box.innerHTML = ENG.hero_box;
    about_h1.textContent = ENG.about_h1;
    about_p.textContent = ENG.about_p;
    about_skills_h2.textContent = ENG.about_skills_h2;
    showcase_h3.textContent = ENG.showcase_h3;
    showcase_h4.textContent = ENG.showcase_h4;
    showcase_view_live.forEach(btn => {
      btn.textContent = ENG.showcase_view_live;
    });
    showcase_see_code.forEach(btn => {
      btn.textContent = ENG.showcase_see_code;
    });
    contact_h2.textContent = ENG.contact_h2;
    contact_h2.style.fontSize = "42px";
    contact_p.textContent = ENG.contact_p;
    contact_form_name.placeholder = ENG.contact_form_name;
    contact_form_phone.placeholder = ENG.contact_form_phone;
    contact_form_email.placeholder = ENG.contact_form_email;
    contact_form_send.textContent = ENG.contact_form_send;
    footer_h5.textContent = ENG.footer_h5;
    footer_h1.textContent = ENG.footer_h1;
    footer_quickLinks_h6.textContent = ENG.footer_quickLinks_h6;
    footer_home_nav.textContent = ENG.footer_home_nav;
    footer_about_nav.textContent = ENG.footer_home_nav;
    footer_portfolio_nav.textContent = ENG.footer_portfolio_nav;
    footer_sayHello_h6.textContent = ENG.footer_sayHello_h6;
  }
  if (lang === "swe") {
    home_nav.textContent = SWE.home_nav;
    about_nav.textContent = SWE.about_nav;
    portfolio_nav.textContent = SWE.portfolio_nav;
    contact_nav.textContent = SWE.contact_nav;
    letsTalk_nav.textContent = SWE.letsTalk_nav;
    hero_box.innerHTML = SWE.hero_box;
    about_h1.textContent = SWE.about_h1;
    about_p.textContent = SWE.about_p;
    about_skills_h2.textContent = SWE.about_skills_h2;
    showcase_h3.textContent = SWE.showcase_h3;
    showcase_h4.textContent = SWE.showcase_h4;
    showcase_view_live.forEach(btn => {
      btn.textContent = SWE.showcase_view_live;
    });
    showcase_see_code.forEach(btn => {
      btn.textContent = SWE.showcase_see_code;
    });
    contact_h2.textContent = SWE.contact_h2;
    contact_p.textContent = SWE.contact_p;
    contact_p.style.paddingRight = "10px";
    contact_h2.style.fontSize = "32px";
    contact_form_name.placeholder = SWE.contact_form_name;
    contact_form_phone.placeholder = SWE.contact_form_phone;
    contact_form_email.placeholder = SWE.contact_form_email;
    contact_form_send.textContent = SWE.contact_form_send;
    footer_h5.textContent = SWE.footer_h5;
    footer_h1.textContent = SWE.footer_h1;
    footer_quickLinks_h6.textContent = SWE.footer_quickLinks_h6;
    footer_home_nav.textContent = SWE.footer_home_nav;
    footer_about_nav.textContent = SWE.footer_home_nav;
    footer_portfolio_nav.textContent = SWE.footer_portfolio_nav;
    footer_sayHello_h6.textContent = SWE.footer_sayHello_h6;
  }
  if (lang === "nor") {
    home_nav.textContent = NOR.home_nav;
    about_nav.textContent = NOR.about_nav;
    portfolio_nav.textContent = NOR.portfolio_nav;
    contact_nav.textContent = NOR.contact_nav;
    letsTalk_nav.textContent = NOR.letsTalk_nav;
    hero_box.innerHTML = NOR.hero_box;
    about_h1.textContent = NOR.about_h1;
    about_p.textContent = NOR.about_p;
    about_skills_h2.textContent = NOR.about_skills_h2;
    showcase_h3.textContent = NOR.showcase_h3;
    showcase_h4.textContent = NOR.showcase_h4;
    showcase_view_live.forEach(btn => {
      btn.textContent = NOR.showcase_view_live;
    });
    showcase_see_code.forEach(btn => {
      btn.textContent = NOR.showcase_see_code;
    });
    contact_h2.textContent = NOR.contact_h2;
    contact_h2.style.fontSize = "32px";
    contact_p.textContent = NOR.contact_p;
    contact_form_name.placeholder = NOR.contact_form_name;
    contact_form_phone.placeholder = NOR.contact_form_phone;
    contact_form_email.placeholder = NOR.contact_form_email;
    contact_form_send.textContent = NOR.contact_form_send;
    footer_h5.textContent = NOR.footer_h5;
    footer_h1.textContent = NOR.footer_h1;
    footer_quickLinks_h6.textContent = NOR.footer_quickLinks_h6;
    footer_home_nav.textContent = NOR.footer_home_nav;
    footer_about_nav.textContent = NOR.footer_home_nav;
    footer_portfolio_nav.textContent = NOR.footer_portfolio_nav;
    footer_sayHello_h6.textContent = NOR.footer_sayHello_h6;
  }
}

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideNav: () => (/* binding */ hideNav),
/* harmony export */   renderHamburger: () => (/* binding */ renderHamburger),
/* harmony export */   renderLangList: () => (/* binding */ renderLangList)
/* harmony export */ });
const menuContainer = document.querySelector(".lang-menu");
const selectedLangBox = document.querySelector(".selected-lang");
const langList = document.getElementById("lang-list");
const langOptions = document.querySelectorAll(".lang-opt");
const sectionsNavContainer = document.querySelector(".sections-container");
const sections = sectionsNavContainer.querySelectorAll("a");
const hamburger = document.querySelector(".hamburger");
function hideNav() {
  sections.forEach(section => {
    section.addEventListener("click", function () {
      sectionsNavContainer.classList.toggle("show-menu");
      hamburger.classList.toggle("is-active");
    });
  });
  const letsTalkBtn = document.querySelector(".lets-talk-btn");
  letsTalkBtn.addEventListener("click", () => {
    sectionsNavContainer.classList.toggle("show-menu");
    hamburger.classList.toggle("is-active");
  });
}
function renderLangList() {
  langList.classList.toggle("hidden");
  renderLangSelected();
}
selectedLangBox.addEventListener("click", renderLangList);
function renderLangSelected() {
  langOptions.forEach(el => {
    el.addEventListener("click", function () {
      selectedLangBox.innerHTML = el.innerHTML;
      langList.classList.add("hidden");
    });
  });
}
function renderHamburger() {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    sectionsNavContainer.classList.toggle("show-menu");
  });
}

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nextSlide: () => (/* binding */ nextSlide),
/* harmony export */   prevSlide: () => (/* binding */ prevSlide)
/* harmony export */ });
const projectBox = document.querySelector(".project-box");
const prev = document.querySelector(".left");
const next = document.querySelector(".right");
const scrollContainer = document.querySelector(".projects-container");
const image_width = 410;
let COUNTER = 410;
const MAX = scrollContainer.scrollWidth;
function nextSlide() {
  next.addEventListener("click", () => {
    if (COUNTER + image_width < MAX - image_width * 3) {
      COUNTER += image_width;
    } else {
      next.classList.add("hidden");
      return;
    }
    projectBox.style.transform = `translateX(-${COUNTER}px)`;
    prev.classList.remove("hidden");
  });
}
function prevSlide() {
  prev.addEventListener("click", () => {
    if (COUNTER > image_width - image_width) {
      COUNTER -= image_width;
    } else {
      prev.classList.add("hidden");
      return;
    }
    projectBox.style.transform = `translateX(-${COUNTER}px)`;
    next.classList.remove("hidden");
  });
}

/***/ }),

/***/ "./src/spline.js":
/*!***********************!*\
  !*** ./src/spline.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderContactSpline: () => (/* binding */ renderContactSpline),
/* harmony export */   renderHeroSpline: () => (/* binding */ renderHeroSpline)
/* harmony export */ });
const loader = document.querySelector(".spinner-box");
const hero_video = document.getElementById("hero-video");
function renderHeroSpline() {
  setTimeout(() => {
    hero_video.classList.remove("hidden");
    loader.classList.add("hidden");
  }, 3000);
}
const contact_video = document.getElementById("contact-video");
const contactLoader = document.querySelector(".loading");
function renderContactSpline() {
  setTimeout(() => {
    contact_video.classList.remove("hidden");
    contactLoader.classList.add("hidden");
  }, 3000);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400&family=Inter:wght@300;400;700&family=Noto+Serif:ital,wght@0,400;0,500;0,600;1,300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-family: "Inter", sans-serif;
  scroll-behavior: smooth;
}

body {
  background-color: var(--black);
  min-height: 100vh;
  position: relative;
}

:root {
  --black: #000000;
  --dark-grey: #1a1a1a;
  --white: #eeeeee;
  --blue: #068fff;
  --purple: #4e4feb;
}

header {
  min-width: 100vw;
}
section {
  min-height: 100vh;
  min-width: 98vw;
}
nav {
  z-index: 1000;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-items: center;
  padding: 20px 30px;
  font-size: 18px;
  background-color: #00000000;
  backdrop-filter: blur(20px) saturate(160%) contrast(45%) brightness(140%);
  -webkit-backdrop-filter: blur(20px) saturate(160%) contrast(45%)
    brightness(140%);
  position: fixed;
  min-width: 100vw;
}

.lang-menu ul li,
.selected-lang {
  display: flex;
  align-items: center;
  gap: 5px;
  max-width: 80px;
}

.lang-menu ul {
  background-color: var(--white);
  position: absolute;
  max-width: 80px;
  margin-top: 10px;
  margin-left: -8px;
  padding: 8px;
  height: 130px;
  border-radius: 0px 0px 5px 5px;
}

.selected-lang a {
  text-decoration: none;
  color: var(--white);
}

.selected-lang {
  position: relative;
  cursor: pointer;
  color: var(--white);
  padding: 2px;
}

ul li {
  list-style: none;
  line-height: 2;
}

.eng,
.swe,
.nor {
  text-decoration: none;
  color: var(--black);
}

.flag-box {
  max-width: 27px;
  max-height: 21px;
}

.lang-menu {
  border: 1px solid var(--white);
  background-color: transparent;
  border-radius: 5px;
  padding: 8px;
  max-width: 80px;
}

.sections-container {
  display: flex;
  align-items: center;
  gap: 40px;
  transition: all 0.3s linear;
}

.nav {
  text-decoration: none;
  font-weight: 500;
  color: var(--black);
  transition: all 0.3s linear;
  border-bottom: 1px solid transparent;
  font-size: 22px;
}

.nav:hover {
  color: var(--blue);
  border-bottom: 1px solid var(--blue);
}

.contact-nav-container {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-icon {
  width: 28px;
  height: 28px;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: all 0.3s linear;
}

.nav-icon:hover {
  border-color: var(--blue);
}

.lets-talk-btn {
  background-color: transparent;
  font-size: 16px;
  padding: 8px;
  color: var(--black);
  border-radius: 5px;
  border: 1px solid var(--black);
  cursor: pointer;
  transition: all 0.3s linear;
}

.lets-talk-btn:hover {
  color: var(--blue);
  border: 1px solid var(--blue);
}

.col {
  display: block;
  float: left;
  margin: 1% 0 1% 1.6%;
}

.col:first-of-type {
  margin-left: 0;
}

.three {
  display: none;
  margin-left: auto;
}

.row .three {
  padding: 80px 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
}

.hamburger .line {
  width: 50px;
  height: 5px;
  background-color: #ecf0f1;
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

#hamburger-6.is-active {
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-transition-delay: 0.6s;
  -o-transition-delay: 0.6s;
  transition-delay: 0.6s;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#hamburger-6.is-active .line:nth-child(2) {
  width: 0px;
}

#hamburger-6.is-active .line:nth-child(1),
#hamburger-6.is-active .line:nth-child(3) {
  -webkit-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

#hamburger-6.is-active .line:nth-child(1) {
  -webkit-transform: translateY(13px);
  -ms-transform: translateY(13px);
  -o-transform: translateY(13px);
  transform: translateY(13px);
}

#hamburger-6.is-active .line:nth-child(3) {
  -webkit-transform: translateY(-13px) rotate(90deg);
  -ms-transform: translateY(-13px) rotate(90deg);
  -o-transform: translateY(-13px) rotate(90deg);
  transform: translateY(-13px) rotate(90deg);
}

iframe {
  width: 100vw;
  height: 100vh;
  position: absolute;
}

#hero-video {
  width: 100%;
  height: 101vh;
  position: absolute;
}

.hero-txt-container {
  z-index: 100;
  position: absolute;
  top: 12%;
  left: 3%;
  color: var(--white);
}

.hero-h4 {
  font-weight: 300;
  color: var(--purple);
  font-size: 22px;
}

.hero-h1 {
  color: var(--white);
  font-size: 62px;
  font-weight: 600;
}

.name {
  font-weight: bolder;
  color: var(--blue);
  -webkit-text-stroke: 2px var(--black);
}

/******* Loader *******/
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
.spinner-box {
  /* Center vertically and horizontally */
  float: right;
  margin-top: 15%;
  margin-right: 30%;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.circle-border {
  width: 150px;
  height: 150px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63, 249, 220);
  background: linear-gradient(
    0deg,
    rgba(63, 249, 220, 0.1) 33%,
    rgba(63, 249, 220, 1) 100%
  );
  animation: spin 0.8s linear 0s infinite;
}

.circle-core {
  width: 100%;
  height: 100%;
  background-color: var(--black);
  border-radius: 50%;
}
.lang-menu {
  margin-right: auto;
}

#about-sec {
  background-color: var(--dark-grey);
  margin-top: 100px;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  justify-content: center;
  padding: 30px 0 0 0;
}

.about-text-container {
  max-width: 750px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skills-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.skill-icons-box {
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 20px;
}

.skill-icons-box svg {
  max-width: 52px;
  max-height: 52px;
}

.img-container {
  display: flex;
  justify-content: center;
}

.img-container img {
  max-width: 418px;
  max-height: 624px;
}

#about-h1 {
  text-align: center;
  font-size: 36px;
  color: var(--blue);
  border-bottom: 1px solid var(--blue);
}

#about-p {
  margin-top: 20px;
  font-size: 18px;
  font-weight: 300;
  color: var(--white);
  line-height: 1.7;
  letter-spacing: 2px;
}

#skill-h2 {
  color: var(--blue);
  text-align: center;
  border-bottom: 1px solid var(--blue);
}

#portfolio-sec {
  background-color: var(--dark-grey);
  position: relative;
  margin-top: 100px;
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

#portfolio-h3 {
  position: absolute;
  color: var(--white);
  top: 70px;
  font-size: 48px;
  border-bottom: 1px solid var(--white);
}

#portfolio-h4 {
  position: absolute;
  top: 150px;
  color: #8b8b8b;
  font-size: 22px;
}

.projects-container {
  margin-top: 150px;
  max-width: 90vw;
  overflow-x: scroll;
  scroll-behavior: smooth;
}

.project-box {
  display: flex;
  align-items: center;
  padding: 0px 20px 0 10px;
  transition: all 0.3s ease-in-out;
}

.projects-container::-webkit-scrollbar {
  display: none;
}

.box {
  position: relative;
  display: grid;
  grid-template-rows: 1fr 0.4fr;
  transition: all 0.3s linear;
}

.box img {
  max-width: 400px;
  height: auto;
  margin-left: 10px;
}
.project-btn-box {
  width: 100%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.project-btn-box a {
  text-decoration: none;
  color: var(--white);
  padding: 10px;
  border: 1px solid var(--blue);
  border-radius: 5px;
  background-color: transparent;
  transition: all 0.2s linear;
}

.project-btn-box a:active {
  background-color: var(--blue);
  transform: scale(1.1);
}

.icon-box {
  z-index: 20;
  position: absolute;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.534);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.2s linear;
}

.icon-box svg {
  fill: var(--dark-grey);
}
.icon-box:active {
  background-color: var(--blue);
  transform: scale(1.1);
}

.left {
  top: 350px;
}

.right {
  top: 350px;
  right: 45px;
}

#contact-sec {
  /* margin-top: -200px; */
  position: relative;
}

#contact-h2 {
  z-index: 40;
  font-size: 42px;
  color: var(--white);
  border-bottom: 1px solid var(--white);
  font-weight: 800;
  position: absolute;
  top: 2%;
  left: 10%;
}

#contact-p {
  z-index: 39;
  font-size: 22px;
  color: var(--white);
  position: absolute;
  top: 12%;
  left: 2%;
}

form {
  z-index: 55;
  position: absolute;
  top: 20%;
  left: 2%;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  gap: 30px;
  backdrop-filter: blur(10px);
}

input {
  color: var(--white);
  padding: 10px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid var(--blue);
}

textarea {
  resize: none;
  border: 2px solid var(--blue);
  background-color: rgba(245, 245, 245, 0.2);
  color: var(--white);
  border-radius: 5px;
  padding: 5px;
}

.send-btn {
  padding: 10px;
  border-radius: 5px;
  background-color: var(--blue);
  font-weight: 600;
  font-size: 18px;
  color: var(--white);
  width: 80%;
  align-self: center;
  cursor: pointer;
  transition: all 0.3s linear;
}

.send-btn:active {
  background-color: var(--white);
  color: var(--black);
  transform: scale(1.05);
}

/* ******************** LOADER ******************* */
/* Absolute Center Spinner */
.loading {
  position: absolute;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 50%;
  left: 40%;
}

/* :not(:required) hides these rules from IE9 and below */
.loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.loading:not(:required):after {
  content: "";
  display: block;
  font-size: 10px;
  width: 8em;
  height: 8em;
  margin-top: -0.5em;
  -webkit-animation: spinner 1500ms infinite linear;
  -moz-animation: spinner 1500ms infinite linear;
  -ms-animation: spinner 1500ms infinite linear;
  -o-animation: spinner 1500ms infinite linear;
  animation: spinner 1500ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
    rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
    rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0,
    rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,
    rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
  box-shadow: rgba(255, 255, 255, 0.75) 1.5em 0 0 0,
    rgba(255, 255, 255, 0.75) 1.1em 1.1em 0 0,
    rgba(255, 255, 255, 0.75) 0 1.5em 0 0,
    rgba(255, 255, 255, 0.75) -1.1em 1.1em 0 0,
    rgba(255, 255, 255, 0.75) -1.5em 0 0 0,
    rgba(255, 255, 255, 0.75) -1.1em -1.1em 0 0,
    rgba(255, 255, 255, 0.75) 0 -1.5em 0 0,
    rgba(255, 255, 255, 0.75) 1.1em -1.1em 0 0;
}

/* Animation */

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/* ************************************************ */

footer {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: auto;
}

.ready-container {
  background-color: var(--blue);
  padding: 50px;
  height: 120%;
}

.links-container {
  background-color: var(--dark-grey);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
  height: 120%;
}

#footer-h1 {
  text-align: center;
  color: var(--white);
  font-size: 62px;
  font-weight: 800;
}

#footer-h5 {
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  color: var(--white);
}

#quick-h6,
#hello-h6 {
  font-size: 18px;
  color: #acacac;
  border-bottom: 1px solid #acacac;
  max-width: 100px;
}

.hello-box p {
  color: #acacac;
  margin-top: 15px;
}

.quick-links-box {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.quick-links-box a {
  padding-left: 20px;
  text-decoration: none;
  color: #acacac;
  transition: all 0.3s linear;
}

.quick-links-box a:hover {
  padding-left: 20px;
  text-decoration: none;
  color: var(--blue);
}

footer span {
  position: absolute;
  bottom: -15%;
  right: 10%;
  color: var(--white);
}

.up-icon-box {
  position: absolute;
  bottom: 5%;
  right: 3%;
  background-color: var(--blue);
  padding: 8px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s linear;
}

.up-icon-box:active {
  transform: scale(1.1);
  background-color: var(--white);
}

/* ********************* */

/* Reusable classes */
.hidden {
  display: none;
}

.is-on {
  color: var(--blue);
  border-color: var(--blue);
}

/* Media Queries */

@media (max-width: 1060px) {
  .hero-txt-container {
    top: 8%;
  }
  .left,
  .right {
    display: none;
  }
  .img-container img {
    padding-top: 50px;
    max-width: 318px;
    max-height: 424px;
  }
}

@media (max-width: 950px) {
  header {
    position: relative;
  }
  .sections-container {
    z-index: 540;
    top: 0%;
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--black);
    transform: translate(1200px);
  }

  .sections-container a {
    color: var(--white);
  }

  .lets-talk-btn {
    color: var(--white);
    border-color: var(--white);
  }

  .contact-nav-container {
    width: 100%;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 1fr;
    padding: 0 50px;
  }
  .three {
    z-index: 550;
    display: block;
  }

  .spinner-box {
    margin-top: 25%;
  }
}

.show-menu {
  transform: translate(0px);
}

@media (max-width: 875px) {
  footer span {
    right: 5%;
  }
  .hero-h1 {
    font-size: 52px;
  }
  #about-h1 {
    font-size: 26px;
  }

  #about-p {
    font-size: 16px;
  }
  #skill-h2 {
    font-size: 22px;
  }

  .img-container {
    display: none;
  }
}

@media (max-width: 750px) {
  .ready-container {
    display: none;
  }
  footer {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 650px) {
  .spinner-box {
    margin-top: 35%;
  }

  .about-text-container {
    max-width: 550px;
  }

  .skill-icons-box svg {
    max-width: 46px;
    max-height: 46px;
  }
  #about-sec {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}

@media (max-width: 550px) {
  #contact-p {
    font-size: 16px;
  }
  .skill-icons-box svg {
    max-width: 36px;
    max-height: 36px;
  }
}

@media (max-width: 500px) {
  .hero-h1 {
    font-size: 52px;
  }
  .spinner-box {
    margin-top: 45%;
  }

  .about-text-container {
    max-width: 350px;
  }
}

@media (max-width: 450px) {
  #contact-h2 {
    left: 30%;
  }
  #contact-p {
    left: 10%;
  }
  form {
    left: 10%;
    width: 300px;
    height: 400px;
  }
  .skill-icons-box svg {
    max-width: 26px;
    max-height: 26px;
  }
  .spinner-box {
    margin-top: 50%;
  }

  .hero-h1 {
    font-size: 42px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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EACX;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,0BAA0B;EAC5B;AACF;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,0BAA0B;IAC1B,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;EACA;IACE,eAAe;IACf,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;;EAEA;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,SAAS;EACX;EACA;IACE,SAAS;EACX;EACA;IACE,SAAS;IACT,YAAY;IACZ,aAAa;EACf;EACA;IACE,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400&family=Inter:wght@300;400;700&family=Noto+Serif:ital,wght@0,400;0,500;0,600;1,300&display=swap\");\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-family: \"Inter\", sans-serif;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  background-color: var(--black);\r\n  min-height: 100vh;\r\n  position: relative;\r\n}\r\n\r\n:root {\r\n  --black: #000000;\r\n  --dark-grey: #1a1a1a;\r\n  --white: #eeeeee;\r\n  --blue: #068fff;\r\n  --purple: #4e4feb;\r\n}\r\n\r\nheader {\r\n  min-width: 100vw;\r\n}\r\nsection {\r\n  min-height: 100vh;\r\n  min-width: 98vw;\r\n}\r\nnav {\r\n  z-index: 1000;\r\n  display: grid;\r\n  grid-template-columns: 0.5fr 1fr;\r\n  align-items: center;\r\n  padding: 20px 30px;\r\n  font-size: 18px;\r\n  background-color: #00000000;\r\n  backdrop-filter: blur(20px) saturate(160%) contrast(45%) brightness(140%);\r\n  -webkit-backdrop-filter: blur(20px) saturate(160%) contrast(45%)\r\n    brightness(140%);\r\n  position: fixed;\r\n  min-width: 100vw;\r\n}\r\n\r\n.lang-menu ul li,\r\n.selected-lang {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n  max-width: 80px;\r\n}\r\n\r\n.lang-menu ul {\r\n  background-color: var(--white);\r\n  position: absolute;\r\n  max-width: 80px;\r\n  margin-top: 10px;\r\n  margin-left: -8px;\r\n  padding: 8px;\r\n  height: 130px;\r\n  border-radius: 0px 0px 5px 5px;\r\n}\r\n\r\n.selected-lang a {\r\n  text-decoration: none;\r\n  color: var(--white);\r\n}\r\n\r\n.selected-lang {\r\n  position: relative;\r\n  cursor: pointer;\r\n  color: var(--white);\r\n  padding: 2px;\r\n}\r\n\r\nul li {\r\n  list-style: none;\r\n  line-height: 2;\r\n}\r\n\r\n.eng,\r\n.swe,\r\n.nor {\r\n  text-decoration: none;\r\n  color: var(--black);\r\n}\r\n\r\n.flag-box {\r\n  max-width: 27px;\r\n  max-height: 21px;\r\n}\r\n\r\n.lang-menu {\r\n  border: 1px solid var(--white);\r\n  background-color: transparent;\r\n  border-radius: 5px;\r\n  padding: 8px;\r\n  max-width: 80px;\r\n}\r\n\r\n.sections-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40px;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.nav {\r\n  text-decoration: none;\r\n  font-weight: 500;\r\n  color: var(--black);\r\n  transition: all 0.3s linear;\r\n  border-bottom: 1px solid transparent;\r\n  font-size: 22px;\r\n}\r\n\r\n.nav:hover {\r\n  color: var(--blue);\r\n  border-bottom: 1px solid var(--blue);\r\n}\r\n\r\n.contact-nav-container {\r\n  margin-left: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.nav-icon {\r\n  width: 28px;\r\n  height: 28px;\r\n  border: 2px solid transparent;\r\n  border-radius: 5px;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.nav-icon:hover {\r\n  border-color: var(--blue);\r\n}\r\n\r\n.lets-talk-btn {\r\n  background-color: transparent;\r\n  font-size: 16px;\r\n  padding: 8px;\r\n  color: var(--black);\r\n  border-radius: 5px;\r\n  border: 1px solid var(--black);\r\n  cursor: pointer;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.lets-talk-btn:hover {\r\n  color: var(--blue);\r\n  border: 1px solid var(--blue);\r\n}\r\n\r\n.col {\r\n  display: block;\r\n  float: left;\r\n  margin: 1% 0 1% 1.6%;\r\n}\r\n\r\n.col:first-of-type {\r\n  margin-left: 0;\r\n}\r\n\r\n.three {\r\n  display: none;\r\n  margin-left: auto;\r\n}\r\n\r\n.row .three {\r\n  padding: 80px 30px;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  background-color: #2c3e50;\r\n  color: #ecf0f1;\r\n  text-align: center;\r\n}\r\n\r\n.hamburger .line {\r\n  width: 50px;\r\n  height: 5px;\r\n  background-color: #ecf0f1;\r\n  display: block;\r\n  margin: 8px auto;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  -o-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n#hamburger-6.is-active {\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  -o-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n  -webkit-transition-delay: 0.6s;\r\n  -o-transition-delay: 0.6s;\r\n  transition-delay: 0.6s;\r\n  -webkit-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  -o-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n#hamburger-6.is-active .line:nth-child(2) {\r\n  width: 0px;\r\n}\r\n\r\n#hamburger-6.is-active .line:nth-child(1),\r\n#hamburger-6.is-active .line:nth-child(3) {\r\n  -webkit-transition-delay: 0.3s;\r\n  -o-transition-delay: 0.3s;\r\n  transition-delay: 0.3s;\r\n}\r\n\r\n#hamburger-6.is-active .line:nth-child(1) {\r\n  -webkit-transform: translateY(13px);\r\n  -ms-transform: translateY(13px);\r\n  -o-transform: translateY(13px);\r\n  transform: translateY(13px);\r\n}\r\n\r\n#hamburger-6.is-active .line:nth-child(3) {\r\n  -webkit-transform: translateY(-13px) rotate(90deg);\r\n  -ms-transform: translateY(-13px) rotate(90deg);\r\n  -o-transform: translateY(-13px) rotate(90deg);\r\n  transform: translateY(-13px) rotate(90deg);\r\n}\r\n\r\niframe {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: absolute;\r\n}\r\n\r\n#hero-video {\r\n  width: 100%;\r\n  height: 101vh;\r\n  position: absolute;\r\n}\r\n\r\n.hero-txt-container {\r\n  z-index: 100;\r\n  position: absolute;\r\n  top: 12%;\r\n  left: 3%;\r\n  color: var(--white);\r\n}\r\n\r\n.hero-h4 {\r\n  font-weight: 300;\r\n  color: var(--purple);\r\n  font-size: 22px;\r\n}\r\n\r\n.hero-h1 {\r\n  color: var(--white);\r\n  font-size: 62px;\r\n  font-weight: 600;\r\n}\r\n\r\n.name {\r\n  font-weight: bolder;\r\n  color: var(--blue);\r\n  -webkit-text-stroke: 2px var(--black);\r\n}\r\n\r\n/******* Loader *******/\r\n@keyframes spin {\r\n  from {\r\n    transform: rotate(0);\r\n  }\r\n  to {\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n.spinner-box {\r\n  /* Center vertically and horizontally */\r\n  float: right;\r\n  margin-top: 15%;\r\n  margin-right: 30%;\r\n  width: 300px;\r\n  height: 300px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: transparent;\r\n}\r\n\r\n.circle-border {\r\n  width: 150px;\r\n  height: 150px;\r\n  padding: 3px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  background: rgb(63, 249, 220);\r\n  background: linear-gradient(\r\n    0deg,\r\n    rgba(63, 249, 220, 0.1) 33%,\r\n    rgba(63, 249, 220, 1) 100%\r\n  );\r\n  animation: spin 0.8s linear 0s infinite;\r\n}\r\n\r\n.circle-core {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--black);\r\n  border-radius: 50%;\r\n}\r\n.lang-menu {\r\n  margin-right: auto;\r\n}\r\n\r\n#about-sec {\r\n  background-color: var(--dark-grey);\r\n  margin-top: 100px;\r\n  display: grid;\r\n  grid-template-columns: 0.8fr 1fr;\r\n  justify-content: center;\r\n  padding: 30px 0 0 0;\r\n}\r\n\r\n.about-text-container {\r\n  max-width: 750px;\r\n  padding: 0 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.skills-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.skill-icons-box {\r\n  justify-self: center;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 25px;\r\n  padding: 20px;\r\n}\r\n\r\n.skill-icons-box svg {\r\n  max-width: 52px;\r\n  max-height: 52px;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.img-container img {\r\n  max-width: 418px;\r\n  max-height: 624px;\r\n}\r\n\r\n#about-h1 {\r\n  text-align: center;\r\n  font-size: 36px;\r\n  color: var(--blue);\r\n  border-bottom: 1px solid var(--blue);\r\n}\r\n\r\n#about-p {\r\n  margin-top: 20px;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  color: var(--white);\r\n  line-height: 1.7;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n#skill-h2 {\r\n  color: var(--blue);\r\n  text-align: center;\r\n  border-bottom: 1px solid var(--blue);\r\n}\r\n\r\n#portfolio-sec {\r\n  background-color: var(--dark-grey);\r\n  position: relative;\r\n  margin-top: 100px;\r\n  padding-top: 130px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n#portfolio-h3 {\r\n  position: absolute;\r\n  color: var(--white);\r\n  top: 70px;\r\n  font-size: 48px;\r\n  border-bottom: 1px solid var(--white);\r\n}\r\n\r\n#portfolio-h4 {\r\n  position: absolute;\r\n  top: 150px;\r\n  color: #8b8b8b;\r\n  font-size: 22px;\r\n}\r\n\r\n.projects-container {\r\n  margin-top: 150px;\r\n  max-width: 90vw;\r\n  overflow-x: scroll;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.project-box {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0px 20px 0 10px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.projects-container::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.box {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-rows: 1fr 0.4fr;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.box img {\r\n  max-width: 400px;\r\n  height: auto;\r\n  margin-left: 10px;\r\n}\r\n.project-btn-box {\r\n  width: 100%;\r\n  margin-top: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.project-btn-box a {\r\n  text-decoration: none;\r\n  color: var(--white);\r\n  padding: 10px;\r\n  border: 1px solid var(--blue);\r\n  border-radius: 5px;\r\n  background-color: transparent;\r\n  transition: all 0.2s linear;\r\n}\r\n\r\n.project-btn-box a:active {\r\n  background-color: var(--blue);\r\n  transform: scale(1.1);\r\n}\r\n\r\n.icon-box {\r\n  z-index: 20;\r\n  position: absolute;\r\n  padding: 8px;\r\n  background-color: rgba(255, 255, 255, 0.534);\r\n  border-radius: 10px;\r\n  backdrop-filter: blur(10px);\r\n  cursor: pointer;\r\n  transition: all 0.2s linear;\r\n}\r\n\r\n.icon-box svg {\r\n  fill: var(--dark-grey);\r\n}\r\n.icon-box:active {\r\n  background-color: var(--blue);\r\n  transform: scale(1.1);\r\n}\r\n\r\n.left {\r\n  top: 350px;\r\n}\r\n\r\n.right {\r\n  top: 350px;\r\n  right: 45px;\r\n}\r\n\r\n#contact-sec {\r\n  /* margin-top: -200px; */\r\n  position: relative;\r\n}\r\n\r\n#contact-h2 {\r\n  z-index: 40;\r\n  font-size: 42px;\r\n  color: var(--white);\r\n  border-bottom: 1px solid var(--white);\r\n  font-weight: 800;\r\n  position: absolute;\r\n  top: 2%;\r\n  left: 10%;\r\n}\r\n\r\n#contact-p {\r\n  z-index: 39;\r\n  font-size: 22px;\r\n  color: var(--white);\r\n  position: absolute;\r\n  top: 12%;\r\n  left: 2%;\r\n}\r\n\r\nform {\r\n  z-index: 55;\r\n  position: absolute;\r\n  top: 20%;\r\n  left: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 400px;\r\n  height: 400px;\r\n  gap: 30px;\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\ninput {\r\n  color: var(--white);\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  background-color: transparent;\r\n  border: 1px solid var(--blue);\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  border: 2px solid var(--blue);\r\n  background-color: rgba(245, 245, 245, 0.2);\r\n  color: var(--white);\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n}\r\n\r\n.send-btn {\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  background-color: var(--blue);\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n  color: var(--white);\r\n  width: 80%;\r\n  align-self: center;\r\n  cursor: pointer;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.send-btn:active {\r\n  background-color: var(--white);\r\n  color: var(--black);\r\n  transform: scale(1.05);\r\n}\r\n\r\n/* ******************** LOADER ******************* */\r\n/* Absolute Center Spinner */\r\n.loading {\r\n  position: absolute;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: visible;\r\n  margin: auto;\r\n  top: 50%;\r\n  left: 40%;\r\n}\r\n\r\n/* :not(:required) hides these rules from IE9 and below */\r\n.loading:not(:required) {\r\n  /* hide \"loading...\" text */\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.loading:not(:required):after {\r\n  content: \"\";\r\n  display: block;\r\n  font-size: 10px;\r\n  width: 8em;\r\n  height: 8em;\r\n  margin-top: -0.5em;\r\n  -webkit-animation: spinner 1500ms infinite linear;\r\n  -moz-animation: spinner 1500ms infinite linear;\r\n  -ms-animation: spinner 1500ms infinite linear;\r\n  -o-animation: spinner 1500ms infinite linear;\r\n  animation: spinner 1500ms infinite linear;\r\n  border-radius: 0.5em;\r\n  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,\r\n    rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,\r\n    rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0,\r\n    rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,\r\n    rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\r\n  box-shadow: rgba(255, 255, 255, 0.75) 1.5em 0 0 0,\r\n    rgba(255, 255, 255, 0.75) 1.1em 1.1em 0 0,\r\n    rgba(255, 255, 255, 0.75) 0 1.5em 0 0,\r\n    rgba(255, 255, 255, 0.75) -1.1em 1.1em 0 0,\r\n    rgba(255, 255, 255, 0.75) -1.5em 0 0 0,\r\n    rgba(255, 255, 255, 0.75) -1.1em -1.1em 0 0,\r\n    rgba(255, 255, 255, 0.75) 0 -1.5em 0 0,\r\n    rgba(255, 255, 255, 0.75) 1.1em -1.1em 0 0;\r\n}\r\n\r\n/* Animation */\r\n\r\n@-webkit-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -ms-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@-moz-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -ms-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@-o-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -ms-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -ms-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/* ************************************************ */\r\n\r\nfooter {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  margin-top: auto;\r\n}\r\n\r\n.ready-container {\r\n  background-color: var(--blue);\r\n  padding: 50px;\r\n  height: 120%;\r\n}\r\n\r\n.links-container {\r\n  background-color: var(--dark-grey);\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  padding: 30px;\r\n  height: 120%;\r\n}\r\n\r\n#footer-h1 {\r\n  text-align: center;\r\n  color: var(--white);\r\n  font-size: 62px;\r\n  font-weight: 800;\r\n}\r\n\r\n#footer-h5 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  color: var(--white);\r\n}\r\n\r\n#quick-h6,\r\n#hello-h6 {\r\n  font-size: 18px;\r\n  color: #acacac;\r\n  border-bottom: 1px solid #acacac;\r\n  max-width: 100px;\r\n}\r\n\r\n.hello-box p {\r\n  color: #acacac;\r\n  margin-top: 15px;\r\n}\r\n\r\n.quick-links-box {\r\n  margin-left: 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.quick-links-box a {\r\n  padding-left: 20px;\r\n  text-decoration: none;\r\n  color: #acacac;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.quick-links-box a:hover {\r\n  padding-left: 20px;\r\n  text-decoration: none;\r\n  color: var(--blue);\r\n}\r\n\r\nfooter span {\r\n  position: absolute;\r\n  bottom: -15%;\r\n  right: 10%;\r\n  color: var(--white);\r\n}\r\n\r\n.up-icon-box {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  right: 3%;\r\n  background-color: var(--blue);\r\n  padding: 8px;\r\n  border-radius: 20px;\r\n  cursor: pointer;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.up-icon-box:active {\r\n  transform: scale(1.1);\r\n  background-color: var(--white);\r\n}\r\n\r\n/* ********************* */\r\n\r\n/* Reusable classes */\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.is-on {\r\n  color: var(--blue);\r\n  border-color: var(--blue);\r\n}\r\n\r\n/* Media Queries */\r\n\r\n@media (max-width: 1060px) {\r\n  .hero-txt-container {\r\n    top: 8%;\r\n  }\r\n  .left,\r\n  .right {\r\n    display: none;\r\n  }\r\n  .img-container img {\r\n    padding-top: 50px;\r\n    max-width: 318px;\r\n    max-height: 424px;\r\n  }\r\n}\r\n\r\n@media (max-width: 950px) {\r\n  header {\r\n    position: relative;\r\n  }\r\n  .sections-container {\r\n    z-index: 540;\r\n    top: 0%;\r\n    position: absolute;\r\n    display: flex;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    background-color: var(--black);\r\n    transform: translate(1200px);\r\n  }\r\n\r\n  .sections-container a {\r\n    color: var(--white);\r\n  }\r\n\r\n  .lets-talk-btn {\r\n    color: var(--white);\r\n    border-color: var(--white);\r\n  }\r\n\r\n  .contact-nav-container {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 0.5fr 1fr;\r\n    padding: 0 50px;\r\n  }\r\n  .three {\r\n    z-index: 550;\r\n    display: block;\r\n  }\r\n\r\n  .spinner-box {\r\n    margin-top: 25%;\r\n  }\r\n}\r\n\r\n.show-menu {\r\n  transform: translate(0px);\r\n}\r\n\r\n@media (max-width: 875px) {\r\n  footer span {\r\n    right: 5%;\r\n  }\r\n  .hero-h1 {\r\n    font-size: 52px;\r\n  }\r\n  #about-h1 {\r\n    font-size: 26px;\r\n  }\r\n\r\n  #about-p {\r\n    font-size: 16px;\r\n  }\r\n  #skill-h2 {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .img-container {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 750px) {\r\n  .ready-container {\r\n    display: none;\r\n  }\r\n  footer {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n@media (max-width: 650px) {\r\n  .spinner-box {\r\n    margin-top: 35%;\r\n  }\r\n\r\n  .about-text-container {\r\n    max-width: 550px;\r\n  }\r\n\r\n  .skill-icons-box svg {\r\n    max-width: 46px;\r\n    max-height: 46px;\r\n  }\r\n  #about-sec {\r\n    grid-template-columns: 1fr;\r\n    justify-items: center;\r\n  }\r\n}\r\n\r\n@media (max-width: 550px) {\r\n  #contact-p {\r\n    font-size: 16px;\r\n  }\r\n  .skill-icons-box svg {\r\n    max-width: 36px;\r\n    max-height: 36px;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .hero-h1 {\r\n    font-size: 52px;\r\n  }\r\n  .spinner-box {\r\n    margin-top: 45%;\r\n  }\r\n\r\n  .about-text-container {\r\n    max-width: 350px;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  #contact-h2 {\r\n    left: 30%;\r\n  }\r\n  #contact-p {\r\n    left: 10%;\r\n  }\r\n  form {\r\n    left: 10%;\r\n    width: 300px;\r\n    height: 400px;\r\n  }\r\n  .skill-icons-box svg {\r\n    max-width: 26px;\r\n    max-height: 26px;\r\n  }\r\n  .spinner-box {\r\n    margin-top: 50%;\r\n  }\r\n\r\n  .hero-h1 {\r\n    font-size: 42px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _spline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spline.js */ "./src/spline.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./language.js */ "./src/language.js");






// Language-selection
const selectedLangBox = document.querySelector(".selected-lang");
selectedLangBox.addEventListener("click", _nav_js__WEBPACK_IMPORTED_MODULE_1__.renderLangList);
const lang_options = document.querySelectorAll(".lang-opt");
window.addEventListener("DOMContentLoaded", () => {
  lang_options.forEach(box => {
    box.addEventListener("click", () => {
      (0,_language_js__WEBPACK_IMPORTED_MODULE_5__.translate)(box.id);
    });
  });
});
(0,_nav_js__WEBPACK_IMPORTED_MODULE_1__.renderHamburger)();
(0,_spline_js__WEBPACK_IMPORTED_MODULE_2__.renderHeroSpline)();
(0,_spline_js__WEBPACK_IMPORTED_MODULE_2__.renderContactSpline)();
(0,_nav_js__WEBPACK_IMPORTED_MODULE_1__.hideNav)();
(0,_projects_js__WEBPACK_IMPORTED_MODULE_3__.nextSlide)();
(0,_projects_js__WEBPACK_IMPORTED_MODULE_3__.prevSlide)();
(0,_form__WEBPACK_IMPORTED_MODULE_4__.formAction)();
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
  return top >= window.pageYOffset && left >= window.pageXOffset && top + height <= window.pageYOffset + window.innerHeight && left + width <= window.pageXOffset + window.innerWidth;
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLE9BQU8sV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFNBQVMsT0FBTyxZQUFZLE9BQU8sT0FBTyxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxhQUFhLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFB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UyxDQUFDTSxHQUFHLENBQUMsT0FBTyxDQUFDO0VBQ3RDLENBQUMsTUFBTTtJQUNMdkQsYUFBYSxDQUFDaUQsU0FBUyxDQUFDa0IsTUFBTSxDQUFDLE9BQU8sQ0FBQztFQUN6QztFQUVBLElBQUltQixpQkFBaUIsQ0FBQ0gsZUFBZSxDQUFDLEVBQUU7SUFDdENsRixXQUFXLENBQUNnRCxTQUFTLENBQUNNLEdBQUcsQ0FBQyxPQUFPLENBQUM7RUFDcEMsQ0FBQyxNQUFNO0lBQ0x0RCxXQUFXLENBQUNnRCxTQUFTLENBQUNrQixNQUFNLENBQUMsT0FBTyxDQUFDO0VBQ3ZDO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvbGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3NwbGluZS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtQWN0aW9uKCkge1xyXG4gIHJldHVybiAoZm9ybS5hY3Rpb24gPSBcImh0dHBzOi8vZm9ybXN1Ym1pdC5jby9kYXNpbHZhanVuaW9yODgxQGdtYWlsLmNvbVwiKTtcclxufVxyXG4iLCIvLyAqKioqKioqKioqKioqKioqKiBOQVYgKioqKioqKioqKioqKioqKioqXHJcbmNvbnN0IGhvbWVfbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xyXG5jb25zdCBhYm91dF9uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0XCIpO1xyXG5jb25zdCBwb3J0Zm9saW9fbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG93Y2FzZVwiKTtcclxuY29uc3QgY29udGFjdF9uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XHJcbmNvbnN0IGxldHNUYWxrX25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGV0cy10YWxrLWJ0blwiKTtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqIEhFUk8tU0VDVElPTiAqKioqKioqKioqKioqKioqKipcclxuY29uc3QgaGVyb19ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm8tdHh0LWNvbnRhaW5lclwiKTtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqIEFCT1VULVNFQ1RJT04gKioqKioqKioqKioqKioqKioqXHJcbmNvbnN0IGFib3V0X2gxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC1oMVwiKTtcclxuY29uc3QgYWJvdXRfcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtcFwiKTtcclxuY29uc3QgYWJvdXRfc2tpbGxzX2gyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJza2lsbC1oMlwiKTtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqIFNIT1dDQVNFLVNFQ1RJT04gKioqKioqKioqKioqKioqKioqXHJcbmNvbnN0IHNob3djYXNlX2gzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0Zm9saW8taDNcIik7XHJcbmNvbnN0IHNob3djYXNlX2g0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0Zm9saW8taDRcIik7XHJcbmNvbnN0IHNob3djYXNlX3ZpZXdfbGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmlldy1saXZlXCIpO1xyXG5jb25zdCBzaG93Y2FzZV9zZWVfY29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmlldy1jb2RlXCIpO1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKiogQ09OVEFDVC1TRUNUSU9OICoqKioqKioqKioqKioqKioqKlxyXG5jb25zdCBjb250YWN0X2gyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LWgyXCIpO1xyXG5jb25zdCBjb250YWN0X3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3QtcFwiKTtcclxuY29uc3QgY29udGFjdF9mb3JtX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbmFtZVwiKTtcclxuY29uc3QgY29udGFjdF9mb3JtX3Bob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBob25lXCIpO1xyXG5jb25zdCBjb250YWN0X2Zvcm1fZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tZW1haWxcIik7XHJcbmNvbnN0IGNvbnRhY3RfZm9ybV9zZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZW5kLWJ0blwiKTtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqIEZPT1RFUi1TRUNUSU9OICoqKioqKioqKioqKioqKioqKlxyXG5jb25zdCBmb290ZXJfaDUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3Rlci1oNVwiKTtcclxuY29uc3QgZm9vdGVyX2gxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXItaDFcIik7XHJcbmNvbnN0IGZvb3Rlcl9xdWlja0xpbmtzX2g2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWljay1oNlwiKTtcclxuY29uc3QgZm9vdGVyX2hvbWVfbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXItaG9tZVwiKTtcclxuY29uc3QgZm9vdGVyX2Fib3V0X25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyLWFib3V0XCIpO1xyXG5jb25zdCBmb290ZXJfcG9ydGZvbGlvX25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyLXByb2plY3RzXCIpO1xyXG5jb25zdCBmb290ZXJfc2F5SGVsbG9faDYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbGxvLWg2XCIpO1xyXG5cclxuY29uc3QgRU5HID0ge1xyXG4gIGhvbWVfbmF2OiBcIkhvbWVcIixcclxuICBhYm91dF9uYXY6IFwiQWJvdXRcIixcclxuICBwb3J0Zm9saW9fbmF2OiBcIlNob3djYXNlXCIsXHJcbiAgY29udGFjdF9uYXY6IFwiQ29udGFjdFwiLFxyXG4gIGxldHNUYWxrX25hdjogXCJMRVQnUyBUQUxLXCIsXHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIGhlcm9fYm94OiBgPGg0IGNsYXNzPVwiaGVyby1oNFwiPkZyb250LUVuZCBEZXZlbG9wZXI8L2g0PlxyXG4gIDxoMSBjbGFzcz1cImhlcm8taDFcIj5cclxuICAgIEhlbGxvLCBJJ20gPHN0cm9uZyBjbGFzcz1cIm5hbWVcIj5MdWNhczwvc3Ryb25nPjxiciAvPlxyXG4gICAgV2VsY29tZSBUbyBNeSBXb3JsZC5cclxuICA8L2gxPmAsXHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIGFib3V0X2gxOiBcIkZyb250LUVuZCBEZXZlbG9wZXJcIixcclxuICBhYm91dF9wOiBgIEhlbGxvLCBJJ20gTHVjYXMsIGEgcGFzc2lvbmF0ZSBmcm9udC1lbmQgZGV2ZWxvcGVyIHdpdGggYSBjbGVhciB2aXNpb24gb2YgYmVjb21pbmcgYSBmdWxsLXN0YWNrIG1hZXN0cm8uIEkgY3JhZnQgYmVhdXRpZnVsLCB1c2VyLWZyaWVuZGx5IHdlYnNpdGVzIHVzaW5nIEhUTUwsIENTUywgYW5kIEphdmFTY3JpcHQsIGVuc3VyaW5nIGEgc2VhbWxlc3MgZXhwZXJpZW5jZSBmb3IgZXZlcnkgdmlzaXRvci4gV2l0aCBhIHN0cm9uZyBncmFzcCBvZiBHaXQgZm9yIHZlcnNpb24gY29udHJvbCBhbmQgV2VicGFjayBmb3IgZWZmaWNpZW50IHByb2plY3QgbWFuYWdlbWVudCwgSSdtIHdlbGwtdmVyc2VkIGluIHRoZSBhcnQgb2YgbW9kZXJuIHdlYiBkZXZlbG9wbWVudC5cclxuICBCdXQgaXQgZG9lc24ndCBzdG9wIHRoZXJlLiBNeSBqb3VybmV5IHRvd2FyZHMgZnVsbC1zdGFjayBleHBlcnRpc2UgaXMgaW4gZnVsbCBzd2luZywgYW5kIEknbSBhbHJlYWR5IG1ha2luZyBBUEkgY2FsbHMgdG8gYnJpbmcgZHluYW1pYyBkYXRhIGludG8gbXkgcHJvamVjdHMuIE15IGRlc2lnbiBzZW5zaWJpbGl0aWVzIGFyZSBob25lZCB0aHJvdWdoIGV4cGVyaWVuY2Ugd2l0aCBGaWdtYSwgZ2l2aW5nIG1lIGEga2VlbiBleWUgZm9yIGFlc3RoZXRpY3MuXHJcbiAgSSdtIGN1cnJlbnRseSBzdHVkeWluZyBhIHR3by15ZWFyIHByb2dyYW0gZm9yIGZyb250LWVuZCBkZXZlbG9wbWVudCBhdCBGb2xrdW5pdmVyc2l0ZXQtR290aGVuYnVyZyBhbmQgd29ya2luZyBvbiBteSBwZXJzb25hbCBwb3J0Zm9saW8sIHdoZXJlIHlvdSBjYW4gd2l0bmVzcyB0aGUgY3VsbWluYXRpb24gb2YgbXkgc2tpbGxzLiBFYWNoIHByb2plY3Qgc2hvd2Nhc2VzIG15IGRlZGljYXRpb24gdG8gZGVsaXZlcmluZyB0b3Atbm90Y2ggdXNlciBleHBlcmllbmNlcy4gQXMgSSBicmlkZ2UgdGhlIGdhcCBmcm9tIGZyb250LWVuZCB0byBmdWxsLXN0YWNrLCBJJ20gZXhjaXRlZCB0byBicmluZyBkeW5hbWljLCBkYXRhLWRyaXZlbiB3ZWIgYXBwbGljYXRpb25zIHRvIGxpZmUuYCxcclxuICBhYm91dF9za2lsbHNfaDI6IFwiTWFpbiBza2lsbHNcIixcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgc2hvd2Nhc2VfaDM6IFwiUE9SVEZPTElPXCIsXHJcbiAgc2hvd2Nhc2VfaDQ6IFwiRGlzY292ZXIgbXkgbGF0ZXN0IHdvcmtzXCIsXHJcbiAgc2hvd2Nhc2Vfdmlld19saXZlOiBcIlZpZXcgbGl2ZVwiLFxyXG4gIHNob3djYXNlX3NlZV9jb2RlOiBcIlNlZSBjb2RlXCIsXHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIGNvbnRhY3RfaDI6IFwiSGlyZSBNZVwiLFxyXG4gIGNvbnRhY3RfcDogXCJJJ2FtIGF2YWlsYWJsZSBmb3IgZnJlZWxhbmNlIHdvcmsuIENvbm5lY3Qgd2l0aCBtZS5cIixcclxuICBjb250YWN0X2Zvcm1fbmFtZTogXCJZb3VyIE5hbWUqXCIsXHJcbiAgY29udGFjdF9mb3JtX2VtYWlsOiBcIllvdXIgRW1haWwqXCIsXHJcbiAgY29udGFjdF9mb3JtX3Bob25lOiBcIlRlbGVwaG9uZVwiLFxyXG4gIGNvbnRhY3RfZm9ybV9zZW5kOiBcIlN1Ym1pdFwiLFxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBmb290ZXJfaDU6IFwiUkVBRFkgVE8gRE8gVEhJU1wiLFxyXG4gIGZvb3Rlcl9oMTogXCJMZXQncyBnZXQgdG8gd29ya1wiLFxyXG4gIGZvb3Rlcl9xdWlja0xpbmtzX2g2OiBcIlF1aWNrIExpbmtcIixcclxuICBmb290ZXJfaG9tZV9uYXY6IFwiSG9tZVwiLFxyXG4gIGZvb3Rlcl9hYm91dF9uYXY6IFwiQWJvdXRcIixcclxuICBmb290ZXJfcG9ydGZvbGlvX25hdjogXCJTaG93Y2FzZVwiLFxyXG4gIGZvb3Rlcl9zYXlIZWxsb19oNjogXCJTYXkgSGVsbG8hXCIsXHJcbn07XHJcblxyXG5jb25zdCBTV0UgPSB7XHJcbiAgaG9tZV9uYXY6IFwiSGVtXCIsXHJcbiAgYWJvdXRfbmF2OiBcIk9tXCIsXHJcbiAgcG9ydGZvbGlvX25hdjogXCJQcm9qZWt0XCIsXHJcbiAgY29udGFjdF9uYXY6IFwiS29udGFrdFwiLFxyXG4gIGxldHNUYWxrX25hdjogXCJMw6V0IG9zcyBwcmF0YVwiLFxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBoZXJvX2JveDogYDxoNCBjbGFzcz1cImhlcm8taDRcIj5Gcm9udC1FbmQtVXR2ZWNrbGFyZTwvaDQ+XHJcbiAgIDxoMSBjbGFzcz1cImhlcm8taDFcIj5cclxuICAgSGVqLCBKYWcgaGV0ZXIgPHN0cm9uZyBjbGFzcz1cIm5hbWVcIj5MdWNhczwvc3Ryb25nPjxiciAvPlxyXG4gICBWw6Rsa29tbWVuIHRpbGwgbWluIHbDpHJsZC5cclxuICAgPC9oMT5gLFxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBhYm91dF9oMTogXCJGcm9udC1FbmQgVXR2ZWNrbGFyZVwiLFxyXG4gIGFib3V0X3A6IGAgSGVqLCBqYWcgaGV0ZXIgTHVjYXMsIGVuIHBhc3Npb25lcmFkIGZyb250ZW5kLXV0dmVja2xhcmUgbWVkIGVuIHR5ZGxpZyB2aXNpb24gb20gYXR0IGJsaSBlbiBmdWxsLXN0YWNrIG1hZXN0cm8uIEphZyBza2FwYXIgdmFja3JhLCBhbnbDpG5kYXJ2w6RubGlnYSB3ZWJicGxhdHNlciBtZWQgSFRNTCwgQ1NTIG9jaCBKYXZhU2NyaXB0LCB2aWxrZXQgc8Oka2Vyc3TDpGxsZXIgZW4gdXBwbGV2ZWxzZSBmw7ZyIHZhcmplIGJlc8O2a2FyZS4gTWVkIGV0dCBzdGFya3QgZ3JlcHAgb20gR2l0IGbDtnIgdmVyc2lvbnNrb250cm9sbCBvY2ggV2VicGFjayBmw7ZyIGVmZmVrdGl2IHByb2pla3RsZWRuaW5nLCDDpHIgamFnIHbDpGwgaW5zYXR0IGkgd2ViYnV0dmVja2xpbmcuXHJcbiAgTWVuIGRldCBzdGFubmFyIGludGUgZMOkci4gTWluIHJlc2EgbW90IGZ1bGwtc3RhY2sgZXhwZXJ0aXMgw6RyIGkgZnVsbCBnw6VuZywgb2NoIGphZyBnw7ZyIHJlZGFuIEFQSS1hbnJvcCBmw7ZyIGF0dCBmw6UgaW4gZHluYW1pc2sgZGF0YSBpIG1pbmEgcHJvamVrdC4gTWluIGRlc2lnbmvDpG5zbGlnaGV0IGZpbnNsaXBhcyBnZW5vbSBlcmZhcmVuaGV0IG1lZCBGaWdtYSwgdmlsa2V0IGdlciBtaWcgZXR0IHNrYXJwdCDDtmdhIGbDtnIgZXN0ZXRpay5cclxuICBKYWcgbMOkc2VyIGp1c3QgbnUgZXR0IHR2w6XDpXJpZ3QgcHJvZ3JhbSBmw7ZyIGZyb250ZW5kLXV0dmVja2xpbmcgcMOlIEZvbGt1bml2ZXJzaXRldC1Hw7Z0ZWJvcmcgb2NoIGFyYmV0YXIgbWVkIG1pbiBwZXJzb25saWdhIHBvcnRmb2xpbywgZMOkciBkdSBrYW4gYmV2aXR0bmEgbWluYSBrdW5za2FwZXIuIFZhcmplIHByb2pla3QgdmlzYXIgbWl0dCBlbmdhZ2VtYW5nIGbDtnIgYXR0IGxldmVyZXJhIGbDtnJzdGtsYXNzaWdhIGFudsOkbmRhcnVwcGxldmVsc2VyLiBOw6RyIGphZyDDtnZlcmJyeWdnYXIga2x5ZnRhbiBmcsOlbiBmcm9udC1lbmQgdGlsbCBmdWxsLXN0YWNrIMOkciBqYWcgZ2xhZCDDtnZlciBhdHQgZsOlIGxpdiBpIGR5bmFtaXNrYSwgZGF0YWRyaXZuYSB3ZWJiYXBwbGlrYXRpb25lci5gLFxyXG4gIGFib3V0X3NraWxsc19oMjogXCJGw6RyZGlnaGV0ZXJcIixcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgc2hvd2Nhc2VfaDM6IFwiUE9SVEZPTElPXCIsXHJcbiAgc2hvd2Nhc2VfaDQ6IFwiVXBwdMOkY2sgbWluYSBzZW5hc3RlIHZlcmtcIixcclxuICBzaG93Y2FzZV92aWV3X2xpdmU6IFwiU2UgbGl2ZVwiLFxyXG4gIHNob3djYXNlX3NlZV9jb2RlOiBcIlNlIEtvZFwiLFxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBjb250YWN0X2gyOiBcIkFuc3TDpGxsIE1pZ1wiLFxyXG4gIGNvbnRhY3RfcDogXCJKYWcgw6RyIHRpbGxnw6RuZ2xpZyBmw7ZyIGZyaWxhbnNhcmJldGUuIFRhIGtvbnRha3QgbWVkIG1pZy5cIixcclxuICBjb250YWN0X2Zvcm1fbmFtZTogXCJEaXR0IE5hbW4qXCIsXHJcbiAgY29udGFjdF9mb3JtX2VtYWlsOiBcIkRpbiBFbWFpbCpcIixcclxuICBjb250YWN0X2Zvcm1fcGhvbmU6IFwiVGVsZWZvbm51bW1lclwiLFxyXG4gIGNvbnRhY3RfZm9ybV9zZW5kOiBcIlNraWNrYSBpblwiLFxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBmb290ZXJfaDU6IFwiUmVkbyBhdHQgZ8O2cmEgZGV0dGFcIixcclxuICBmb290ZXJfaDE6IFwiTMOldCBvc3MgYsO2cmphIGpvYmJhXCIsXHJcbiAgZm9vdGVyX3F1aWNrTGlua3NfaDY6IFwiU25hYmJsw6Rua2FyXCIsXHJcbiAgZm9vdGVyX2hvbWVfbmF2OiBcIkhlbVwiLFxyXG4gIGZvb3Rlcl9hYm91dF9uYXY6IFwiT21cIixcclxuICBmb290ZXJfcG9ydGZvbGlvX25hdjogXCJQcm9qZWt0XCIsXHJcbiAgZm9vdGVyX3NheUhlbGxvX2g2OiBcIlPDpGcgSGVqIVwiLFxyXG59O1xyXG5cclxuY29uc3QgTk9SID0ge1xyXG4gIGhvbWVfbmF2OiBcIkhqZW1cIixcclxuICBhYm91dF9uYXY6IFwiT21cIixcclxuICBwb3J0Zm9saW9fbmF2OiBcIlByb3NqZWt0ZXJcIixcclxuICBjb250YWN0X25hdjogXCJLb250YWt0XCIsXHJcbiAgbGV0c1RhbGtfbmF2OiBcIkxBIE9TUyBTTkFLS0VcIixcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgaGVyb19ib3g6IGA8aDQgY2xhc3M9XCJoZXJvLWg0XCI+RnJvbnQtRW5kIFV0dmlrbGVyPC9oND5cclxuICAgIDxoMSBjbGFzcz1cImhlcm8taDFcIj5cclxuICAgIEhlaSwgSmFnIGhldGVyIDxzdHJvbmcgY2xhc3M9XCJuYW1lXCI+THVjYXM8L3N0cm9uZz48YnIgLz5cclxuICAgIFZlbGtvbW1lbiB0aWwgbWluIHZlcmRlbi5cclxuICAgIDwvaDE+YCxcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgYWJvdXRfaDE6IFwiRnJvbnQtRW5kIFV0dmlrbGVyXCIsXHJcbiAgYWJvdXRfcDogYCBIZWksIGplZyBoZXRlciBMdWNhcywgZW4gbGlkZW5za2FwZWxpZyBmcm9udC1lbmQtdXR2aWtsZXIgbWVkIGVuIGtsYXIgdmlzam9uIG9tIMOlIGJsaSBlbiBmdWxsLXN0YWNrIG1hZXN0cm8uIEplZyBsYWdlciB2YWtyZSwgYnJ1a2VydmVubmxpZ2UgbmV0dHNpZGVyIHZlZCBoamVscCBhdiBIVE1MLCBDU1Mgb2cgSmF2YVNjcmlwdCwgb2cgc2lrcmVyIGVuICBvcHBsZXZlbHNlIGZvciBhbGxlIGJlc8O4a2VuZGUuIE1lZCBldCBzdGVya3QgZ3JlcCBvbSBHaXQgZm9yIHZlcnNqb25za29udHJvbGwgb2cgV2VicGFjayBmb3IgZWZmZWt0aXYgcHJvc2pla3RsZWRlbHNlLCBlciBqZWcgZ29kdCBiZXZhbmRyZXQgaSBrdW5zdGVuIMOlIG1vZGVybmUgd2VidXR2aWtsaW5nLlxyXG4gIE1lbiBkZXQgc3RvcHBlciBpa2tlIGRlci4gUmVpc2VuIG1pbiBtb3QgZnVsbC1zdGFjay1la3NwZXJ0aXNlIGVyIGkgZnVsbCBnYW5nLCBvZyBqZWcgZm9yZXRhciBhbGxlcmVkZSBBUEkta2FsbCBmb3Igw6UgYnJpbmdlIGR5bmFtaXNrZSBkYXRhIGlubiBpIHByb3NqZWt0ZW5lIG1pbmUuIE1pbmUgZGVzaWduZsO4bHNvbWhldGVyIGVyIGZpbnB1c3NldCBnamVubm9tIGVyZmFyaW5nIG1lZCBGaWdtYSwgbm9lIHNvbSBnaXIgbWVnIGV0IGdvZHQgw7h5ZSBmb3IgZXN0ZXRpa2suXHJcbiAgSmVnIHN0dWRlcmVyIGZvciB0aWRlbiBldCB0b8OlcmlnIHByb2dyYW0gZm9yIGZyb250ZW5kLXV0dmlrbGluZyB2ZWQgRm9sa3VuaXZlcnNpdGV0LUfDuHRlYm9yZyBvZyBqb2JiZXIgbWVkIG1pbiBwZXJzb25saWdlIHBvcnRlZsO4bGplLCBodm9yIGR1IGthbiBzZSBrdWxtaW5hc2pvbmVuIGF2IGZlcmRpZ2hldGVuZSBtaW5lLiBIdmVydCBwcm9zamVrdCB2aXNlciBtaW4gZGVkaWthc2pvbiB0aWwgw6UgbGV2ZXJlIGbDuHJzdGVrbGFzc2VzIGJydWtlcm9wcGxldmVsc2VyLiBOw6VyIGplZyBieWdnZXIgYnJvIGZyYSBmcm9udC1lbmQgdGlsIGZ1bGwtc3RhY2ssIGVyIGplZyBnbGFkIGZvciDDpSBicmluZ2UgZHluYW1pc2tlLCBkYXRhZHJldm5lIG5ldHRhcHBsaWthc2pvbmVyIHRpbCBsaXZlLmAsXHJcbiAgYWJvdXRfc2tpbGxzX2gyOiBcIkhvdmVkZmVyZGlnaGV0ZXJcIixcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgc2hvd2Nhc2VfaDM6IFwiUE9SVEZPTElPXCIsXHJcbiAgc2hvd2Nhc2VfaDQ6IFwiT3BwZGFnIGRlIHNpc3RlIHZlcmtlbmUgbWluZVwiLFxyXG4gIHNob3djYXNlX3ZpZXdfbGl2ZTogXCJTZSBsaXZlXCIsXHJcbiAgc2hvd2Nhc2Vfc2VlX2NvZGU6IFwiU2UgS29kZVwiLFxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBjb250YWN0X2gyOiBcIkFuc2V0dGUgTWVnXCIsXHJcbiAgY29udGFjdF9wOiBcIkplZyBlciB0aWxnamVuZ2VsaWcgZm9yIGZyaWxhbnNhcmJlaWQuIFRhIGtvbnRha3QgbWVkIG1lZy5cIixcclxuICBjb250YWN0X2Zvcm1fbmFtZTogXCJOYXZuZXQgRGl0dCpcIixcclxuICBjb250YWN0X2Zvcm1fZW1haWw6IFwiRGluIEVwb3N0KlwiLFxyXG4gIGNvbnRhY3RfZm9ybV9waG9uZTogXCJUZWxlZm9ubnVtbWVyXCIsXHJcbiAgY29udGFjdF9mb3JtX3NlbmQ6IFwiU2VuZGUgaW5uXCIsXHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIGZvb3Rlcl9oNTogXCJLTEFSIFRJTCDDhSBHSsOYUkUgREVUVEVcIixcclxuICBmb290ZXJfaDE6IFwiTGEgb3NzIGfDpSBww6Ugam9iYlwiLFxyXG4gIGZvb3Rlcl9xdWlja0xpbmtzX2g2OiBcIlJhc2sgTGlua1wiLFxyXG4gIGZvb3Rlcl9ob21lX25hdjogXCJIamVtXCIsXHJcbiAgZm9vdGVyX2Fib3V0X25hdjogXCJPbVwiLFxyXG4gIGZvb3Rlcl9wb3J0Zm9saW9fbmF2OiBcIlByb2pla3RlclwiLFxyXG4gIGZvb3Rlcl9zYXlIZWxsb19oNjogXCJTaSBIZWkhXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKGxhbmcpIHtcclxuICBpZiAobGFuZyA9PT0gXCJlbmdcIikge1xyXG4gICAgaG9tZV9uYXYudGV4dENvbnRlbnQgPSBFTkcuaG9tZV9uYXY7XHJcbiAgICBhYm91dF9uYXYudGV4dENvbnRlbnQgPSBFTkcuYWJvdXRfbmF2O1xyXG4gICAgcG9ydGZvbGlvX25hdi50ZXh0Q29udGVudCA9IEVORy5wb3J0Zm9saW9fbmF2O1xyXG4gICAgY29udGFjdF9uYXYudGV4dENvbnRlbnQgPSBFTkcuY29udGFjdF9uYXY7XHJcbiAgICBsZXRzVGFsa19uYXYudGV4dENvbnRlbnQgPSBFTkcubGV0c1RhbGtfbmF2O1xyXG5cclxuICAgIGhlcm9fYm94LmlubmVySFRNTCA9IEVORy5oZXJvX2JveDtcclxuXHJcbiAgICBhYm91dF9oMS50ZXh0Q29udGVudCA9IEVORy5hYm91dF9oMTtcclxuICAgIGFib3V0X3AudGV4dENvbnRlbnQgPSBFTkcuYWJvdXRfcDtcclxuICAgIGFib3V0X3NraWxsc19oMi50ZXh0Q29udGVudCA9IEVORy5hYm91dF9za2lsbHNfaDI7XHJcblxyXG4gICAgc2hvd2Nhc2VfaDMudGV4dENvbnRlbnQgPSBFTkcuc2hvd2Nhc2VfaDM7XHJcbiAgICBzaG93Y2FzZV9oNC50ZXh0Q29udGVudCA9IEVORy5zaG93Y2FzZV9oNDtcclxuICAgIHNob3djYXNlX3ZpZXdfbGl2ZS5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLnRleHRDb250ZW50ID0gRU5HLnNob3djYXNlX3ZpZXdfbGl2ZTtcclxuICAgIH0pO1xyXG4gICAgc2hvd2Nhc2Vfc2VlX2NvZGUuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi50ZXh0Q29udGVudCA9IEVORy5zaG93Y2FzZV9zZWVfY29kZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRhY3RfaDIudGV4dENvbnRlbnQgPSBFTkcuY29udGFjdF9oMjtcclxuICAgIGNvbnRhY3RfaDIuc3R5bGUuZm9udFNpemUgPSBcIjQycHhcIjtcclxuICAgIGNvbnRhY3RfcC50ZXh0Q29udGVudCA9IEVORy5jb250YWN0X3A7XHJcbiAgICBjb250YWN0X2Zvcm1fbmFtZS5wbGFjZWhvbGRlciA9IEVORy5jb250YWN0X2Zvcm1fbmFtZTtcclxuICAgIGNvbnRhY3RfZm9ybV9waG9uZS5wbGFjZWhvbGRlciA9IEVORy5jb250YWN0X2Zvcm1fcGhvbmU7XHJcbiAgICBjb250YWN0X2Zvcm1fZW1haWwucGxhY2Vob2xkZXIgPSBFTkcuY29udGFjdF9mb3JtX2VtYWlsO1xyXG4gICAgY29udGFjdF9mb3JtX3NlbmQudGV4dENvbnRlbnQgPSBFTkcuY29udGFjdF9mb3JtX3NlbmQ7XHJcblxyXG4gICAgZm9vdGVyX2g1LnRleHRDb250ZW50ID0gRU5HLmZvb3Rlcl9oNTtcclxuICAgIGZvb3Rlcl9oMS50ZXh0Q29udGVudCA9IEVORy5mb290ZXJfaDE7XHJcbiAgICBmb290ZXJfcXVpY2tMaW5rc19oNi50ZXh0Q29udGVudCA9IEVORy5mb290ZXJfcXVpY2tMaW5rc19oNjtcclxuICAgIGZvb3Rlcl9ob21lX25hdi50ZXh0Q29udGVudCA9IEVORy5mb290ZXJfaG9tZV9uYXY7XHJcbiAgICBmb290ZXJfYWJvdXRfbmF2LnRleHRDb250ZW50ID0gRU5HLmZvb3Rlcl9ob21lX25hdjtcclxuICAgIGZvb3Rlcl9wb3J0Zm9saW9fbmF2LnRleHRDb250ZW50ID0gRU5HLmZvb3Rlcl9wb3J0Zm9saW9fbmF2O1xyXG4gICAgZm9vdGVyX3NheUhlbGxvX2g2LnRleHRDb250ZW50ID0gRU5HLmZvb3Rlcl9zYXlIZWxsb19oNjtcclxuICB9XHJcblxyXG4gIGlmIChsYW5nID09PSBcInN3ZVwiKSB7XHJcbiAgICBob21lX25hdi50ZXh0Q29udGVudCA9IFNXRS5ob21lX25hdjtcclxuICAgIGFib3V0X25hdi50ZXh0Q29udGVudCA9IFNXRS5hYm91dF9uYXY7XHJcbiAgICBwb3J0Zm9saW9fbmF2LnRleHRDb250ZW50ID0gU1dFLnBvcnRmb2xpb19uYXY7XHJcbiAgICBjb250YWN0X25hdi50ZXh0Q29udGVudCA9IFNXRS5jb250YWN0X25hdjtcclxuICAgIGxldHNUYWxrX25hdi50ZXh0Q29udGVudCA9IFNXRS5sZXRzVGFsa19uYXY7XHJcblxyXG4gICAgaGVyb19ib3guaW5uZXJIVE1MID0gU1dFLmhlcm9fYm94O1xyXG5cclxuICAgIGFib3V0X2gxLnRleHRDb250ZW50ID0gU1dFLmFib3V0X2gxO1xyXG4gICAgYWJvdXRfcC50ZXh0Q29udGVudCA9IFNXRS5hYm91dF9wO1xyXG4gICAgYWJvdXRfc2tpbGxzX2gyLnRleHRDb250ZW50ID0gU1dFLmFib3V0X3NraWxsc19oMjtcclxuXHJcbiAgICBzaG93Y2FzZV9oMy50ZXh0Q29udGVudCA9IFNXRS5zaG93Y2FzZV9oMztcclxuICAgIHNob3djYXNlX2g0LnRleHRDb250ZW50ID0gU1dFLnNob3djYXNlX2g0O1xyXG4gICAgc2hvd2Nhc2Vfdmlld19saXZlLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICBidG4udGV4dENvbnRlbnQgPSBTV0Uuc2hvd2Nhc2Vfdmlld19saXZlO1xyXG4gICAgfSk7XHJcbiAgICBzaG93Y2FzZV9zZWVfY29kZS5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLnRleHRDb250ZW50ID0gU1dFLnNob3djYXNlX3NlZV9jb2RlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGFjdF9oMi50ZXh0Q29udGVudCA9IFNXRS5jb250YWN0X2gyO1xyXG4gICAgY29udGFjdF9wLnRleHRDb250ZW50ID0gU1dFLmNvbnRhY3RfcDtcclxuICAgIGNvbnRhY3RfcC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjEwcHhcIjtcclxuICAgIGNvbnRhY3RfaDIuc3R5bGUuZm9udFNpemUgPSBcIjMycHhcIjtcclxuICAgIGNvbnRhY3RfZm9ybV9uYW1lLnBsYWNlaG9sZGVyID0gU1dFLmNvbnRhY3RfZm9ybV9uYW1lO1xyXG4gICAgY29udGFjdF9mb3JtX3Bob25lLnBsYWNlaG9sZGVyID0gU1dFLmNvbnRhY3RfZm9ybV9waG9uZTtcclxuICAgIGNvbnRhY3RfZm9ybV9lbWFpbC5wbGFjZWhvbGRlciA9IFNXRS5jb250YWN0X2Zvcm1fZW1haWw7XHJcbiAgICBjb250YWN0X2Zvcm1fc2VuZC50ZXh0Q29udGVudCA9IFNXRS5jb250YWN0X2Zvcm1fc2VuZDtcclxuXHJcbiAgICBmb290ZXJfaDUudGV4dENvbnRlbnQgPSBTV0UuZm9vdGVyX2g1O1xyXG4gICAgZm9vdGVyX2gxLnRleHRDb250ZW50ID0gU1dFLmZvb3Rlcl9oMTtcclxuICAgIGZvb3Rlcl9xdWlja0xpbmtzX2g2LnRleHRDb250ZW50ID0gU1dFLmZvb3Rlcl9xdWlja0xpbmtzX2g2O1xyXG4gICAgZm9vdGVyX2hvbWVfbmF2LnRleHRDb250ZW50ID0gU1dFLmZvb3Rlcl9ob21lX25hdjtcclxuICAgIGZvb3Rlcl9hYm91dF9uYXYudGV4dENvbnRlbnQgPSBTV0UuZm9vdGVyX2hvbWVfbmF2O1xyXG4gICAgZm9vdGVyX3BvcnRmb2xpb19uYXYudGV4dENvbnRlbnQgPSBTV0UuZm9vdGVyX3BvcnRmb2xpb19uYXY7XHJcbiAgICBmb290ZXJfc2F5SGVsbG9faDYudGV4dENvbnRlbnQgPSBTV0UuZm9vdGVyX3NheUhlbGxvX2g2O1xyXG4gIH1cclxuXHJcbiAgaWYgKGxhbmcgPT09IFwibm9yXCIpIHtcclxuICAgIGhvbWVfbmF2LnRleHRDb250ZW50ID0gTk9SLmhvbWVfbmF2O1xyXG4gICAgYWJvdXRfbmF2LnRleHRDb250ZW50ID0gTk9SLmFib3V0X25hdjtcclxuICAgIHBvcnRmb2xpb19uYXYudGV4dENvbnRlbnQgPSBOT1IucG9ydGZvbGlvX25hdjtcclxuICAgIGNvbnRhY3RfbmF2LnRleHRDb250ZW50ID0gTk9SLmNvbnRhY3RfbmF2O1xyXG4gICAgbGV0c1RhbGtfbmF2LnRleHRDb250ZW50ID0gTk9SLmxldHNUYWxrX25hdjtcclxuXHJcbiAgICBoZXJvX2JveC5pbm5lckhUTUwgPSBOT1IuaGVyb19ib3g7XHJcblxyXG4gICAgYWJvdXRfaDEudGV4dENvbnRlbnQgPSBOT1IuYWJvdXRfaDE7XHJcbiAgICBhYm91dF9wLnRleHRDb250ZW50ID0gTk9SLmFib3V0X3A7XHJcbiAgICBhYm91dF9za2lsbHNfaDIudGV4dENvbnRlbnQgPSBOT1IuYWJvdXRfc2tpbGxzX2gyO1xyXG5cclxuICAgIHNob3djYXNlX2gzLnRleHRDb250ZW50ID0gTk9SLnNob3djYXNlX2gzO1xyXG4gICAgc2hvd2Nhc2VfaDQudGV4dENvbnRlbnQgPSBOT1Iuc2hvd2Nhc2VfaDQ7XHJcbiAgICBzaG93Y2FzZV92aWV3X2xpdmUuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi50ZXh0Q29udGVudCA9IE5PUi5zaG93Y2FzZV92aWV3X2xpdmU7XHJcbiAgICB9KTtcclxuICAgIHNob3djYXNlX3NlZV9jb2RlLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICBidG4udGV4dENvbnRlbnQgPSBOT1Iuc2hvd2Nhc2Vfc2VlX2NvZGU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250YWN0X2gyLnRleHRDb250ZW50ID0gTk9SLmNvbnRhY3RfaDI7XHJcbiAgICBjb250YWN0X2gyLnN0eWxlLmZvbnRTaXplID0gXCIzMnB4XCI7XHJcbiAgICBjb250YWN0X3AudGV4dENvbnRlbnQgPSBOT1IuY29udGFjdF9wO1xyXG4gICAgY29udGFjdF9mb3JtX25hbWUucGxhY2Vob2xkZXIgPSBOT1IuY29udGFjdF9mb3JtX25hbWU7XHJcbiAgICBjb250YWN0X2Zvcm1fcGhvbmUucGxhY2Vob2xkZXIgPSBOT1IuY29udGFjdF9mb3JtX3Bob25lO1xyXG4gICAgY29udGFjdF9mb3JtX2VtYWlsLnBsYWNlaG9sZGVyID0gTk9SLmNvbnRhY3RfZm9ybV9lbWFpbDtcclxuICAgIGNvbnRhY3RfZm9ybV9zZW5kLnRleHRDb250ZW50ID0gTk9SLmNvbnRhY3RfZm9ybV9zZW5kO1xyXG5cclxuICAgIGZvb3Rlcl9oNS50ZXh0Q29udGVudCA9IE5PUi5mb290ZXJfaDU7XHJcbiAgICBmb290ZXJfaDEudGV4dENvbnRlbnQgPSBOT1IuZm9vdGVyX2gxO1xyXG4gICAgZm9vdGVyX3F1aWNrTGlua3NfaDYudGV4dENvbnRlbnQgPSBOT1IuZm9vdGVyX3F1aWNrTGlua3NfaDY7XHJcbiAgICBmb290ZXJfaG9tZV9uYXYudGV4dENvbnRlbnQgPSBOT1IuZm9vdGVyX2hvbWVfbmF2O1xyXG4gICAgZm9vdGVyX2Fib3V0X25hdi50ZXh0Q29udGVudCA9IE5PUi5mb290ZXJfaG9tZV9uYXY7XHJcbiAgICBmb290ZXJfcG9ydGZvbGlvX25hdi50ZXh0Q29udGVudCA9IE5PUi5mb290ZXJfcG9ydGZvbGlvX25hdjtcclxuICAgIGZvb3Rlcl9zYXlIZWxsb19oNi50ZXh0Q29udGVudCA9IE5PUi5mb290ZXJfc2F5SGVsbG9faDY7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmctbWVudVwiKTtcclxuY29uc3Qgc2VsZWN0ZWRMYW5nQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZC1sYW5nXCIpO1xyXG5jb25zdCBsYW5nTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFuZy1saXN0XCIpO1xyXG5jb25zdCBsYW5nT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFuZy1vcHRcIik7XHJcbmNvbnN0IHNlY3Rpb25zTmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9ucy1jb250YWluZXJcIik7XHJcbmNvbnN0IHNlY3Rpb25zID0gc2VjdGlvbnNOYXZDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImFcIik7XHJcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVOYXYoKSB7XHJcbiAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgc2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZWN0aW9uc05hdkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1tZW51XCIpO1xyXG4gICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGxldHNUYWxrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZXRzLXRhbGstYnRuXCIpO1xyXG4gIGxldHNUYWxrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBzZWN0aW9uc05hdkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1tZW51XCIpO1xyXG4gICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJMYW5nTGlzdCgpIHtcclxuICBsYW5nTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gIHJlbmRlckxhbmdTZWxlY3RlZCgpO1xyXG59XHJcblxyXG5zZWxlY3RlZExhbmdCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckxhbmdMaXN0KTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxhbmdTZWxlY3RlZCgpIHtcclxuICBsYW5nT3B0aW9ucy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2VsZWN0ZWRMYW5nQm94LmlubmVySFRNTCA9IGVsLmlubmVySFRNTDtcclxuICAgICAgbGFuZ0xpc3QuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySGFtYnVyZ2VyKCkge1xyXG4gIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbiAgICBzZWN0aW9uc05hdkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1tZW51XCIpO1xyXG4gIH0pO1xyXG59XHJcbiIsImNvbnN0IHByb2plY3RCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYm94XCIpO1xyXG5jb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0XCIpO1xyXG5jb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodFwiKTtcclxuY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIik7XHJcblxyXG5jb25zdCBpbWFnZV93aWR0aCA9IDQxMDtcclxubGV0IENPVU5URVIgPSA0MTA7XHJcbmNvbnN0IE1BWCA9IHNjcm9sbENvbnRhaW5lci5zY3JvbGxXaWR0aDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XHJcbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKENPVU5URVIgKyBpbWFnZV93aWR0aCA8IE1BWCAtIGltYWdlX3dpZHRoICogMykge1xyXG4gICAgICBDT1VOVEVSICs9IGltYWdlX3dpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV4dC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwcm9qZWN0Qm94LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke0NPVU5URVJ9cHgpYDtcclxuICAgIHByZXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByZXZTbGlkZSgpIHtcclxuICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoQ09VTlRFUiA+IGltYWdlX3dpZHRoIC0gaW1hZ2Vfd2lkdGgpIHtcclxuICAgICAgQ09VTlRFUiAtPSBpbWFnZV93aWR0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByZXYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHJvamVjdEJveC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtDT1VOVEVSfXB4KWA7XHJcbiAgICBuZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgfSk7XHJcbn1cclxuIiwiY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLWJveFwiKTtcclxuY29uc3QgaGVyb192aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVyby12aWRlb1wiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJIZXJvU3BsaW5lKCkge1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaGVyb192aWRlby5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgfSwgMzAwMCk7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhY3RfdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3QtdmlkZW9cIik7XHJcbmNvbnN0IGNvbnRhY3RMb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmdcIik7XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb250YWN0U3BsaW5lKCkge1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgY29udGFjdF92aWRlby5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgY29udGFjdExvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIH0sIDMwMDApO1xyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW5rbnV0K0FudGlxdWE6d2dodEAzMDA7NDAwJmZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NzAwJmZhbWlseT1Ob3RvK1NlcmlmOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDsxLDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAtLWJsYWNrOiAjMDAwMDAwO1xyXG4gIC0tZGFyay1ncmV5OiAjMWExYTFhO1xyXG4gIC0td2hpdGU6ICNlZWVlZWU7XHJcbiAgLS1ibHVlOiAjMDY4ZmZmO1xyXG4gIC0tcHVycGxlOiAjNGU0ZmViO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIG1pbi13aWR0aDogMTAwdnc7XHJcbn1cclxuc2VjdGlvbiB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWluLXdpZHRoOiA5OHZ3O1xyXG59XHJcbm5hdiB7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMWZyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDE2MCUpIGNvbnRyYXN0KDQ1JSkgYnJpZ2h0bmVzcygxNDAlKTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KSBzYXR1cmF0ZSgxNjAlKSBjb250cmFzdCg0NSUpXHJcbiAgICBicmlnaHRuZXNzKDE0MCUpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtaW4td2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4ubGFuZy1tZW51IHVsIGxpLFxyXG4uc2VsZWN0ZWQtbGFuZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNXB4O1xyXG4gIG1heC13aWR0aDogODBweDtcclxufVxyXG5cclxuLmxhbmctbWVudSB1bCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogLThweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1sYW5nIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtbGFuZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxudWwgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbn1cclxuXHJcbi5lbmcsXHJcbi5zd2UsXHJcbi5ub3Ige1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcblxyXG4uZmxhZy1ib3gge1xyXG4gIG1heC13aWR0aDogMjdweDtcclxuICBtYXgtaGVpZ2h0OiAyMXB4O1xyXG59XHJcblxyXG4ubGFuZy1tZW51IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXgtd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9ucy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDQwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4ubmF2OmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xyXG59XHJcblxyXG4uY29udGFjdC1uYXYtY29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ubmF2LWljb24ge1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG59XHJcblxyXG4ubmF2LWljb246aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XHJcbn1cclxuXHJcbi5sZXRzLXRhbGstYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG59XHJcblxyXG4ubGV0cy10YWxrLWJ0bjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xyXG59XHJcblxyXG4uY29sIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDElIDAgMSUgMS42JTtcclxufVxyXG5cclxuLmNvbDpmaXJzdC1vZi10eXBlIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLnRocmVlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ucm93IC50aHJlZSB7XHJcbiAgcGFkZGluZzogODBweCAzMHB4O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xyXG4gIGNvbG9yOiAjZWNmMGYxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhhbWJ1cmdlciAubGluZSB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDhweCBhdXRvO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNoYW1idXJnZXItNi5pcy1hY3RpdmUge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIC1vLXRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbiNoYW1idXJnZXItNi5pcy1hY3RpdmUgLmxpbmU6bnRoLWNoaWxkKDIpIHtcclxuICB3aWR0aDogMHB4O1xyXG59XHJcblxyXG4jaGFtYnVyZ2VyLTYuaXMtYWN0aXZlIC5saW5lOm50aC1jaGlsZCgxKSxcclxuI2hhbWJ1cmdlci02LmlzLWFjdGl2ZSAubGluZTpudGgtY2hpbGQoMykge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4zcztcclxuICAtby10cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuXHJcbiNoYW1idXJnZXItNi5pcy1hY3RpdmUgLmxpbmU6bnRoLWNoaWxkKDEpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxM3B4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEzcHgpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxM3B4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTNweCk7XHJcbn1cclxuXHJcbiNoYW1idXJnZXItNi5pcy1hY3RpdmUgLmxpbmU6bnRoLWNoaWxkKDMpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTNweCkgcm90YXRlKDkwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xM3B4KSByb3RhdGUoOTBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTNweCkgcm90YXRlKDkwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzcHgpIHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4jaGVyby12aWRlbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDF2aDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5oZXJvLXR4dC1jb250YWluZXIge1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMiU7XHJcbiAgbGVmdDogMyU7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuLmhlcm8taDQge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uaGVyby1oMSB7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBmb250LXNpemU6IDYycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcbi8qKioqKioqIExvYWRlciAqKioqKioqL1xyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgfVxyXG59XHJcbi5zcGlubmVyLWJveCB7XHJcbiAgLyogQ2VudGVyIHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseSAqL1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2lyY2xlLWJvcmRlciB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDYzLCAyNDksIDIyMCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMGRlZyxcclxuICAgIHJnYmEoNjMsIDI0OSwgMjIwLCAwLjEpIDMzJSxcclxuICAgIHJnYmEoNjMsIDI0OSwgMjIwLCAxKSAxMDAlXHJcbiAgKTtcclxuICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgMHMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5jaXJjbGUtY29yZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmxhbmctbWVudSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jYWJvdXQtc2VjIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjhmciAxZnI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzBweCAwIDAgMDtcclxufVxyXG5cclxuLmFib3V0LXRleHQtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNraWxscy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNraWxsLWljb25zLWJveCB7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMjVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uc2tpbGwtaWNvbnMtYm94IHN2ZyB7XHJcbiAgbWF4LXdpZHRoOiA1MnB4O1xyXG4gIG1heC1oZWlnaHQ6IDUycHg7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciBpbWcge1xyXG4gIG1heC13aWR0aDogNDE4cHg7XHJcbiAgbWF4LWhlaWdodDogNjI0cHg7XHJcbn1cclxuXHJcbiNhYm91dC1oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xyXG59XHJcblxyXG4jYWJvdXQtcCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuI3NraWxsLWgyIHtcclxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxuI3BvcnRmb2xpby1zZWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbiNwb3J0Zm9saW8taDMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIHRvcDogNzBweDtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuI3BvcnRmb2xpby1oNCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUwcHg7XHJcbiAgY29sb3I6ICM4YjhiOGI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4ucHJvamVjdHMtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG4ucHJvamVjdC1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwcHggMjBweCAwIDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjRmcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5ib3ggaW1nIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4ucHJvamVjdC1idG4tYm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLnByb2plY3QtYnRuLWJveCBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWJ0bi1ib3ggYTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLmljb24tYm94IHtcclxuICB6LWluZGV4OiAyMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MzQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbn1cclxuXHJcbi5pY29uLWJveCBzdmcge1xyXG4gIGZpbGw6IHZhcigtLWRhcmstZ3JleSk7XHJcbn1cclxuLmljb24tYm94OmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgdG9wOiAzNTBweDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICB0b3A6IDM1MHB4O1xyXG4gIHJpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4jY29udGFjdC1zZWMge1xyXG4gIC8qIG1hcmdpbi10b3A6IC0yMDBweDsgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNjb250YWN0LWgyIHtcclxuICB6LWluZGV4OiA0MDtcclxuICBmb250LXNpemU6IDQycHg7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMiU7XHJcbiAgbGVmdDogMTAlO1xyXG59XHJcblxyXG4jY29udGFjdC1wIHtcclxuICB6LWluZGV4OiAzOTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMiU7XHJcbiAgbGVmdDogMiU7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHotaW5kZXg6IDU1O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwJTtcclxuICBsZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgZ2FwOiAzMHB4O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjIpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNlbmQtYnRuIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5zZW5kLWJ0bjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqIExPQURFUiAqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIEFic29sdXRlIENlbnRlciBTcGlubmVyICovXHJcbi5sb2FkaW5nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgd2lkdGg6IDJlbTtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNDAlO1xyXG59XHJcblxyXG4vKiA6bm90KDpyZXF1aXJlZCkgaGlkZXMgdGhlc2UgcnVsZXMgZnJvbSBJRTkgYW5kIGJlbG93ICovXHJcbi5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpIHtcclxuICAvKiBoaWRlIFwibG9hZGluZy4uLlwiIHRleHQgKi9cclxuICBmb250OiAwLzAgYTtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ubG9hZGluZzpub3QoOnJlcXVpcmVkKTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgd2lkdGg6IDhlbTtcclxuICBoZWlnaHQ6IDhlbTtcclxuICBtYXJnaW4tdG9wOiAtMC41ZW07XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtbW96LWFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1tcy1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtby1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICBhbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43NSkgMS41ZW0gMCAwIDAsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIDEuNWVtIDAgMCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC43NSkgLTEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjUpIC0xLjVlbSAwIDAgMCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC41KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIC0xLjVlbSAwIDAsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAxLjVlbSAwIDAgMCxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAwIDEuNWVtIDAgMCxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgLTEuMWVtIDEuMWVtIDAgMCxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgLTEuNWVtIDAgMCAwLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAtMS4xZW0gLTEuMWVtIDAgMCxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgMCAtMS41ZW0gMCAwLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAxLjFlbSAtMS4xZW0gMCAwO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb24gKi9cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4ucmVhZHktY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIGhlaWdodDogMTIwJTtcclxufVxyXG5cclxuLmxpbmtzLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGhlaWdodDogMTIwJTtcclxufVxyXG5cclxuI2Zvb3Rlci1oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgZm9udC1zaXplOiA2MnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbiNmb290ZXItaDUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4jcXVpY2staDYsXHJcbiNoZWxsby1oNiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjYWNhY2FjO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWNhY2FjO1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5oZWxsby1ib3ggcCB7XHJcbiAgY29sb3I6ICNhY2FjYWM7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnF1aWNrLWxpbmtzLWJveCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTVweDtcclxufVxyXG5cclxuLnF1aWNrLWxpbmtzLWJveCBhIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjYWNhY2FjO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxufVxyXG5cclxuLnF1aWNrLWxpbmtzLWJveCBhOmhvdmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxuZm9vdGVyIHNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0xNSU7XHJcbiAgcmlnaHQ6IDEwJTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4udXAtaWNvbi1ib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUlO1xyXG4gIHJpZ2h0OiAzJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG59XHJcblxyXG4udXAtaWNvbi1ib3g6YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi8qIFJldXNhYmxlIGNsYXNzZXMgKi9cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmlzLW9uIHtcclxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcmllcyAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNjBweCkge1xyXG4gIC5oZXJvLXR4dC1jb250YWluZXIge1xyXG4gICAgdG9wOiA4JTtcclxuICB9XHJcbiAgLmxlZnQsXHJcbiAgLnJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5pbWctY29udGFpbmVyIGltZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIG1heC13aWR0aDogMzE4cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MjRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gIGhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5zZWN0aW9ucy1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogNTQwO1xyXG4gICAgdG9wOiAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwMHB4KTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9ucy1jb250YWluZXIgYSB7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIH1cclxuXHJcbiAgLmxldHMtdGFsay1idG4ge1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtbmF2LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDAuNWZyIDFmcjtcclxuICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICB9XHJcbiAgLnRocmVlIHtcclxuICAgIHotaW5kZXg6IDU1MDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXItYm94IHtcclxuICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICB9XHJcbn1cclxuXHJcbi5zaG93LW1lbnUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NzVweCkge1xyXG4gIGZvb3RlciBzcGFuIHtcclxuICAgIHJpZ2h0OiA1JTtcclxuICB9XHJcbiAgLmhlcm8taDEge1xyXG4gICAgZm9udC1zaXplOiA1MnB4O1xyXG4gIH1cclxuICAjYWJvdXQtaDEge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxuXHJcbiAgI2Fib3V0LXAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAjc2tpbGwtaDIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuXHJcbiAgLmltZy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gIC5yZWFkeS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgZm9vdGVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgLnNwaW5uZXItYm94IHtcclxuICAgIG1hcmdpbi10b3A6IDM1JTtcclxuICB9XHJcblxyXG4gIC5hYm91dC10ZXh0LWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNraWxsLWljb25zLWJveCBzdmcge1xyXG4gICAgbWF4LXdpZHRoOiA0NnB4O1xyXG4gICAgbWF4LWhlaWdodDogNDZweDtcclxuICB9XHJcbiAgI2Fib3V0LXNlYyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICNjb250YWN0LXAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAuc2tpbGwtaWNvbnMtYm94IHN2ZyB7XHJcbiAgICBtYXgtd2lkdGg6IDM2cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmhlcm8taDEge1xyXG4gICAgZm9udC1zaXplOiA1MnB4O1xyXG4gIH1cclxuICAuc3Bpbm5lci1ib3gge1xyXG4gICAgbWFyZ2luLXRvcDogNDUlO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LXRleHQtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAjY29udGFjdC1oMiB7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgfVxyXG4gICNjb250YWN0LXAge1xyXG4gICAgbGVmdDogMTAlO1xyXG4gIH1cclxuICBmb3JtIHtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG4gIC5za2lsbC1pY29ucy1ib3ggc3ZnIHtcclxuICAgIG1heC13aWR0aDogMjZweDtcclxuICAgIG1heC1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIC5zcGlubmVyLWJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuaGVyby1oMSB7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wi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eUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbmtudXQrQW50aXF1YTp3Z2h0QDMwMDs0MDAmZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs3MDAmZmFtaWx5PU5vdG8rU2VyaWY6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzEsMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1ibGFjazogIzAwMDAwMDtcXHJcXG4gIC0tZGFyay1ncmV5OiAjMWExYTFhO1xcclxcbiAgLS13aGl0ZTogI2VlZWVlZTtcXHJcXG4gIC0tYmx1ZTogIzA2OGZmZjtcXHJcXG4gIC0tcHVycGxlOiAjNGU0ZmViO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuc2VjdGlvbiB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1pbi13aWR0aDogOTh2dztcXHJcXG59XFxyXFxubmF2IHtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxZnI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDE2MCUpIGNvbnRyYXN0KDQ1JSkgYnJpZ2h0bmVzcygxNDAlKTtcXHJcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDE2MCUpIGNvbnRyYXN0KDQ1JSlcXHJcXG4gICAgYnJpZ2h0bmVzcygxNDAlKTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5sYW5nLW1lbnUgdWwgbGksXFxyXFxuLnNlbGVjdGVkLWxhbmcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIG1heC13aWR0aDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmctbWVudSB1bCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBtYXgtd2lkdGg6IDgwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDEzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQtbGFuZyBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZC1sYW5nIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxufVxcclxcblxcclxcbnVsIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBsaW5lLWhlaWdodDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmVuZyxcXHJcXG4uc3dlLFxcclxcbi5ub3Ige1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsYWctYm94IHtcXHJcXG4gIG1heC13aWR0aDogMjdweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDIxcHg7XFxyXFxufVxcclxcblxcclxcbi5sYW5nLW1lbnUge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBtYXgtd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9ucy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi5uYXY6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1uYXYtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaWNvbiB7XFxyXFxuICB3aWR0aDogMjhweDtcXHJcXG4gIGhlaWdodDogMjhweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWljb246aG92ZXIge1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHMtdGFsay1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0cy10YWxrLWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgbWFyZ2luOiAxJSAwIDElIDEuNiU7XFxyXFxufVxcclxcblxcclxcbi5jb2w6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRocmVlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyAudGhyZWUge1xcclxcbiAgcGFkZGluZzogODBweCAzMHB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XFxyXFxuICBjb2xvcjogI2VjZjBmMTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlciAubGluZSB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiA4cHggYXV0bztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jaGFtYnVyZ2VyLTYuaXMtYWN0aXZlIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xcclxcbiAgLW8tdHJhbnNpdGlvbi1kZWxheTogMC42cztcXHJcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbiNoYW1idXJnZXItNi5pcy1hY3RpdmUgLmxpbmU6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIHdpZHRoOiAwcHg7XFxyXFxufVxcclxcblxcclxcbiNoYW1idXJnZXItNi5pcy1hY3RpdmUgLmxpbmU6bnRoLWNoaWxkKDEpLFxcclxcbiNoYW1idXJnZXItNi5pcy1hY3RpdmUgLmxpbmU6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4zcztcXHJcXG4gIC1vLXRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XFxyXFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4jaGFtYnVyZ2VyLTYuaXMtYWN0aXZlIC5saW5lOm50aC1jaGlsZCgxKSB7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxM3B4KTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTNweCk7XFxyXFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTNweCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTNweCk7XFxyXFxufVxcclxcblxcclxcbiNoYW1idXJnZXItNi5pcy1hY3RpdmUgLmxpbmU6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xM3B4KSByb3RhdGUoOTBkZWcpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTNweCkgcm90YXRlKDkwZGVnKTtcXHJcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTNweCkgcm90YXRlKDkwZGVnKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTNweCkgcm90YXRlKDkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuaWZyYW1lIHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbiNoZXJvLXZpZGVvIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDF2aDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tdHh0LWNvbnRhaW5lciB7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEyJTtcXHJcXG4gIGxlZnQ6IDMlO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8taDQge1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1oMSB7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgZm9udC1zaXplOiA2MnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqIExvYWRlciAqKioqKioqL1xcclxcbkBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcbi5zcGlubmVyLWJveCB7XFxyXFxuICAvKiBDZW50ZXIgdmVydGljYWxseSBhbmQgaG9yaXpvbnRhbGx5ICovXFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBtYXJnaW4tdG9wOiAxNSU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwJTtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUtYm9yZGVyIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDYzLCAyNDksIDIyMCk7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDBkZWcsXFxyXFxuICAgIHJnYmEoNjMsIDI0OSwgMjIwLCAwLjEpIDMzJSxcXHJcXG4gICAgcmdiYSg2MywgMjQ5LCAyMjAsIDEpIDEwMCVcXHJcXG4gICk7XFxyXFxuICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgMHMgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUtY29yZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuLmxhbmctbWVudSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNhYm91dC1zZWMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC44ZnIgMWZyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDAgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dC1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiA3NTBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxscy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGwtaWNvbnMtYm94IHtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDI1cHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGwtaWNvbnMtYm94IHN2ZyB7XFxyXFxuICBtYXgtd2lkdGg6IDUycHg7XFxyXFxuICBtYXgtaGVpZ2h0OiA1MnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIGltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDQxOHB4O1xcclxcbiAgbWF4LWhlaWdodDogNjI0cHg7XFxyXFxufVxcclxcblxcclxcbiNhYm91dC1oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbiNhYm91dC1wIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2tpbGwtaDIge1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9ydGZvbGlvLXNlYyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMTMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNwb3J0Zm9saW8taDMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIHRvcDogNzBweDtcXHJcXG4gIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbiNwb3J0Zm9saW8taDQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxNTBweDtcXHJcXG4gIGNvbG9yOiAjOGI4YjhiO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xcclxcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcclxcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDBweCAyMHB4IDAgMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjRmcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJveCBpbWcge1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG4ucHJvamVjdC1idG4tYm94IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ0bi1ib3ggYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ0bi1ib3ggYTphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi5pY29uLWJveCB7XFxyXFxuICB6LWluZGV4OiAyMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MzQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tYm94IHN2ZyB7XFxyXFxuICBmaWxsOiB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbn1cXHJcXG4uaWNvbi1ib3g6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdCB7XFxyXFxuICB0b3A6IDM1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQge1xcclxcbiAgdG9wOiAzNTBweDtcXHJcXG4gIHJpZ2h0OiA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1zZWMge1xcclxcbiAgLyogbWFyZ2luLXRvcDogLTIwMHB4OyAqL1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1oMiB7XFxyXFxuICB6LWluZGV4OiA0MDtcXHJcXG4gIGZvbnQtc2l6ZTogNDJweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMiU7XFxyXFxuICBsZWZ0OiAxMCU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LXAge1xcclxcbiAgei1pbmRleDogMzk7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMiU7XFxyXFxuICBsZWZ0OiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB6LWluZGV4OiA1NTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjAlO1xcclxcbiAgbGVmdDogMiU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuMik7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VuZC1idG4ge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VuZC1idG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAqKioqKioqKioqKioqKioqKioqKiBMT0FERVIgKioqKioqKioqKioqKioqKioqKiAqL1xcclxcbi8qIEFic29sdXRlIENlbnRlciBTcGlubmVyICovXFxyXFxuLmxvYWRpbmcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiAyZW07XFxyXFxuICB3aWR0aDogMmVtO1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogOm5vdCg6cmVxdWlyZWQpIGhpZGVzIHRoZXNlIHJ1bGVzIGZyb20gSUU5IGFuZCBiZWxvdyAqL1xcclxcbi5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpIHtcXHJcXG4gIC8qIGhpZGUgXFxcImxvYWRpbmcuLi5cXFwiIHRleHQgKi9cXHJcXG4gIGZvbnQ6IDAvMCBhO1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRpbmc6bm90KDpyZXF1aXJlZCk6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIHdpZHRoOiA4ZW07XFxyXFxuICBoZWlnaHQ6IDhlbTtcXHJcXG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuICAtbW96LWFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcclxcbiAgLW1zLWFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcclxcbiAgLW8tYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuICBhbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuNWVtIDAgMCAwLFxcclxcbiAgICByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIDEuNWVtIDAgMCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNSkgLTEuNWVtIDAgMCAwLFxcclxcbiAgICByZ2JhKDAsIDAsIDAsIDAuNSkgLTEuMWVtIC0xLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMCAtMS41ZW0gMCAwLFxcclxcbiAgICByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpIDEuNWVtIDAgMCAwLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAwIDEuNWVtIDAgMCxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpIC0xLjVlbSAwIDAgMCxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAtMS4xZW0gLTEuMWVtIDAgMCxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAwIC0xLjVlbSAwIDAsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQW5pbWF0aW9uICovXFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXIge1xcclxcbiAgMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcbkAtbW96LWtleWZyYW1lcyBzcGlubmVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5ALW8ta2V5ZnJhbWVzIHNwaW5uZXIge1xcclxcbiAgMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc3Bpbm5lciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVhZHktY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgcGFkZGluZzogNTBweDtcXHJcXG4gIGhlaWdodDogMTIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDEyMCU7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXItaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGZvbnQtc2l6ZTogNjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXItaDUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbiNxdWljay1oNixcXHJcXG4jaGVsbG8taDYge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgY29sb3I6ICNhY2FjYWM7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FjYWNhYztcXHJcXG4gIG1heC13aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWxsby1ib3ggcCB7XFxyXFxuICBjb2xvcjogI2FjYWNhYztcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5xdWljay1saW5rcy1ib3gge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnF1aWNrLWxpbmtzLWJveCBhIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjYWNhY2FjO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4ucXVpY2stbGlua3MtYm94IGE6aG92ZXIge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgc3BhbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IC0xNSU7XFxyXFxuICByaWdodDogMTAlO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwLWljb24tYm94IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogNSU7XFxyXFxuICByaWdodDogMyU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi51cC1pY29uLWJveDphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAqKioqKioqKioqKioqKioqKioqKiogKi9cXHJcXG5cXHJcXG4vKiBSZXVzYWJsZSBjbGFzc2VzICovXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaXMtb24ge1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaWEgUXVlcmllcyAqL1xcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDYwcHgpIHtcXHJcXG4gIC5oZXJvLXR4dC1jb250YWluZXIge1xcclxcbiAgICB0b3A6IDglO1xcclxcbiAgfVxcclxcbiAgLmxlZnQsXFxyXFxuICAucmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLmltZy1jb250YWluZXIgaW1nIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMzE4cHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDQyNHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG4gIC5zZWN0aW9ucy1jb250YWluZXIge1xcclxcbiAgICB6LWluZGV4OiA1NDA7XFxyXFxuICAgIHRvcDogMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAwcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlY3Rpb25zLWNvbnRhaW5lciBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sZXRzLXRhbGstYnRuIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMC41ZnIgMWZyO1xcclxcbiAgICBwYWRkaW5nOiAwIDUwcHg7XFxyXFxuICB9XFxyXFxuICAudGhyZWUge1xcclxcbiAgICB6LWluZGV4OiA1NTA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNwaW5uZXItYm94IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1tZW51IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NzVweCkge1xcclxcbiAgZm9vdGVyIHNwYW4ge1xcclxcbiAgICByaWdodDogNSU7XFxyXFxuICB9XFxyXFxuICAuaGVyby1oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTJweDtcXHJcXG4gIH1cXHJcXG4gICNhYm91dC1oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNhYm91dC1wIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgfVxcclxcbiAgI3NraWxsLWgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmltZy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gIC5yZWFkeS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcclxcbiAgLnNwaW5uZXItYm94IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LXRleHQtY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5za2lsbC1pY29ucy1ib3ggc3ZnIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NnB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA0NnB4O1xcclxcbiAgfVxcclxcbiAgI2Fib3V0LXNlYyB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcclxcbiAgI2NvbnRhY3QtcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIH1cXHJcXG4gIC5za2lsbC1pY29ucy1ib3ggc3ZnIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNnB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAzNnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gIC5oZXJvLWgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA1MnB4O1xcclxcbiAgfVxcclxcbiAgLnNwaW5uZXItYm94IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LXRleHQtY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxyXFxuICAjY29udGFjdC1oMiB7XFxyXFxuICAgIGxlZnQ6IDMwJTtcXHJcXG4gIH1cXHJcXG4gICNjb250YWN0LXAge1xcclxcbiAgICBsZWZ0OiAxMCU7XFxyXFxuICB9XFxyXFxuICBmb3JtIHtcXHJcXG4gICAgbGVmdDogMTAlO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICB9XFxyXFxuICAuc2tpbGwtaWNvbnMtYm94IHN2ZyB7XFxyXFxuICAgIG1heC13aWR0aDogMjZweDtcXHJcXG4gICAgbWF4LWhlaWdodDogMjZweDtcXHJcXG4gIH1cXHJcXG4gIC5zcGlubmVyLWJveCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZXJvLWgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKlxyXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XHJcbiAgdmFyIGxpc3QgPSBbXTtcclxuXHJcbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfSkuam9pbihcIlwiKTtcclxuICB9O1xyXG5cclxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XHJcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XHJcbiAgICB9XHJcbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG4gICAgaWYgKGRlZHVwZSkge1xyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xyXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcclxuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xyXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZWRpYSkge1xyXG4gICAgICAgIGlmICghaXRlbVsyXSkge1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1cHBvcnRzKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XHJcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gbGlzdDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XHJcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xyXG4gIGlmICghY3NzTWFwcGluZykge1xyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XHJcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XHJcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcclxuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcclxuICB9XHJcbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xyXG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIHN0eWxlc0luRE9NID0gW107XHJcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICB2YXIgcmVzdWx0ID0gLTE7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcclxuICAgICAgcmVzdWx0ID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcclxuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xyXG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XHJcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xyXG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XHJcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcclxuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgdmFyIG9iaiA9IHtcclxuICAgICAgY3NzOiBpdGVtWzFdLFxyXG4gICAgICBtZWRpYTogaXRlbVsyXSxcclxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxyXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcclxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cclxuICAgIH07XHJcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xyXG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xyXG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xyXG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXHJcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcclxuICAgICAgICByZWZlcmVuY2VzOiAxXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcclxuICB9XHJcbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XHJcbiAgYXBpLnVwZGF0ZShvYmopO1xyXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcclxuICAgIGlmIChuZXdPYmopIHtcclxuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcGkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gdXBkYXRlcjtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgbGlzdCA9IGxpc3QgfHwgW107XHJcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XHJcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xyXG4gICAgfVxyXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XHJcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XHJcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcclxuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcclxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xyXG4gIH07XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgbWVtbyA9IHt9O1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcclxuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG5cclxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXHJcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcclxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XHJcbiAgfVxyXG4gIHJldHVybiBtZW1vW3RhcmdldF07XHJcbn1cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XHJcbiAgaWYgKCF0YXJnZXQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XHJcbiAgfVxyXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XHJcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XHJcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xyXG4gIGlmIChub25jZSkge1xyXG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcclxuICB2YXIgY3NzID0gXCJcIjtcclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xyXG4gIH1cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcclxuICB9XHJcbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xyXG4gIH1cclxuICBjc3MgKz0gb2JqLmNzcztcclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcclxuICB9XHJcblxyXG4gIC8vIEZvciBvbGQgSUVcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXHJcbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxufVxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXHJcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcbn1cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xyXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXHJcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cclxuICAgIH07XHJcbiAgfVxyXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XHJcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xyXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuICB9IGVsc2Uge1xyXG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgcmVuZGVyTGFuZ0xpc3QsIHJlbmRlckhhbWJ1cmdlciwgaGlkZU5hdiB9IGZyb20gXCIuL25hdi5qc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJIZXJvU3BsaW5lLCByZW5kZXJDb250YWN0U3BsaW5lIH0gZnJvbSBcIi4vc3BsaW5lLmpzXCI7XHJcbmltcG9ydCB7IG5leHRTbGlkZSwgcHJldlNsaWRlIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcclxuaW1wb3J0IHsgZm9ybUFjdGlvbiB9IGZyb20gXCIuL2Zvcm1cIjtcclxuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSBcIi4vbGFuZ3VhZ2UuanNcIjtcclxuLy8gTGFuZ3VhZ2Utc2VsZWN0aW9uXHJcbmNvbnN0IHNlbGVjdGVkTGFuZ0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWQtbGFuZ1wiKTtcclxuc2VsZWN0ZWRMYW5nQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJMYW5nTGlzdCk7XHJcbmNvbnN0IGxhbmdfb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFuZy1vcHRcIik7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGxhbmdfb3B0aW9ucy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0cmFuc2xhdGUoYm94LmlkKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbnJlbmRlckhhbWJ1cmdlcigpO1xyXG5yZW5kZXJIZXJvU3BsaW5lKCk7XHJcbnJlbmRlckNvbnRhY3RTcGxpbmUoKTtcclxuaGlkZU5hdigpO1xyXG5uZXh0U2xpZGUoKTtcclxucHJldlNsaWRlKCk7XHJcbmZvcm1BY3Rpb24oKTtcclxuXHJcbmNvbnN0IGhlcm9fc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVyby1zZWNcIik7XHJcbmNvbnN0IGFib3V0X3NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LXBcIik7XHJcbmNvbnN0IHBvcnRmb2xpb19zZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0Zm9saW8taDRcIik7XHJcbmNvbnN0IGNvbnRhY3Rfc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC1wXCIpO1xyXG5cclxuY29uc3QgaG9tZV9uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XHJcbmNvbnN0IGFib3V0X25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIik7XHJcbmNvbnN0IHBvcnRmb2xpb19uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3djYXNlXCIpO1xyXG5jb25zdCBjb250YWN0X25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdFwiKTtcclxuXHJcbmNvbnN0IGxldHNUYWxrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZXRzLXRhbGstYnRuXCIpO1xyXG5jb25zdCBzY3JvbGxVcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXAtaWNvbi1ib3hcIik7XHJcblxyXG5sZXRzVGFsa0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnRhY3Rfc2VjdGlvbi5zY3JvbGxJbnRvVmlldygpO1xyXG59KTtcclxuXHJcbnNjcm9sbFVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaGVyb19zZWN0aW9uLnNjcm9sbEludG9WaWV3KCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZWxlbWVudEluVmlld3BvcnQoZWwpIHtcclxuICBsZXQgdG9wID0gZWwub2Zmc2V0VG9wO1xyXG4gIGxldCBsZWZ0ID0gZWwub2Zmc2V0TGVmdDtcclxuICBsZXQgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcclxuICBsZXQgaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICB3aGlsZSAoZWwub2Zmc2V0UGFyZW50KSB7XHJcbiAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcclxuICAgIHRvcCArPSBlbC5vZmZzZXRUb3A7XHJcbiAgICBsZWZ0ICs9IGVsLm9mZnNldExlZnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgdG9wID49IHdpbmRvdy5wYWdlWU9mZnNldCAmJlxyXG4gICAgbGVmdCA+PSB3aW5kb3cucGFnZVhPZmZzZXQgJiZcclxuICAgIHRvcCArIGhlaWdodCA8PSB3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQgJiZcclxuICAgIGxlZnQgKyB3aWR0aCA8PSB3aW5kb3cucGFnZVhPZmZzZXQgKyB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICBpZiAoZWxlbWVudEluVmlld3BvcnQoaGVyb19zZWN0aW9uKSkge1xyXG4gICAgaG9tZV9uYXYuY2xhc3NMaXN0LmFkZChcImlzLW9uXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBob21lX25hdi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb25cIik7XHJcbiAgfVxyXG5cclxuICBpZiAoZWxlbWVudEluVmlld3BvcnQoYWJvdXRfc2VjdGlvbikpIHtcclxuICAgIGFib3V0X25hdi5jbGFzc0xpc3QuYWRkKFwiaXMtb25cIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFib3V0X25hdi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb25cIik7XHJcbiAgfVxyXG5cclxuICBpZiAoZWxlbWVudEluVmlld3BvcnQocG9ydGZvbGlvX3NlY3Rpb24pKSB7XHJcbiAgICBwb3J0Zm9saW9fbmF2LmNsYXNzTGlzdC5hZGQoXCJpcy1vblwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcG9ydGZvbGlvX25hdi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb25cIik7XHJcbiAgfVxyXG5cclxuICBpZiAoZWxlbWVudEluVmlld3BvcnQoY29udGFjdF9zZWN0aW9uKSkge1xyXG4gICAgY29udGFjdF9uYXYuY2xhc3NMaXN0LmFkZChcImlzLW9uXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb250YWN0X25hdi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb25cIik7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtQWN0aW9uIiwiYWN0aW9uIiwiaG9tZV9uYXYiLCJhYm91dF9uYXYiLCJwb3J0Zm9saW9fbmF2IiwiY29udGFjdF9uYXYiLCJsZXRzVGFsa19uYXYiLCJoZXJvX2JveCIsImFib3V0X2gxIiwiZ2V0RWxlbWVudEJ5SWQiLCJhYm91dF9wIiwiYWJvdXRfc2tpbGxzX2gyIiwic2hvd2Nhc2VfaDMiLCJzaG93Y2FzZV9oNCIsInNob3djYXNlX3ZpZXdfbGl2ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzaG93Y2FzZV9zZWVfY29kZSIsImNvbnRhY3RfaDIiLCJjb250YWN0X3AiLCJjb250YWN0X2Zvcm1fbmFtZSIsImNvbnRhY3RfZm9ybV9waG9uZSIsImNvbnRhY3RfZm9ybV9lbWFpbCIsImNvbnRhY3RfZm9ybV9zZW5kIiwiZm9vdGVyX2g1IiwiZm9vdGVyX2gxIiwiZm9vdGVyX3F1aWNrTGlua3NfaDYiLCJmb290ZXJfaG9tZV9uYXYiLCJmb290ZXJfYWJvdXRfbmF2IiwiZm9vdGVyX3BvcnRmb2xpb19uYXYiLCJmb290ZXJfc2F5SGVsbG9faDYiLCJFTkciLCJTV0UiLCJOT1IiLCJ0cmFuc2xhdGUiLCJsYW5nIiwidGV4dENvbnRlbnQiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiYnRuIiwic3R5bGUiLCJmb250U2l6ZSIsInBsYWNlaG9sZGVyIiwicGFkZGluZ1JpZ2h0IiwibWVudUNvbnRhaW5lciIsInNlbGVjdGVkTGFuZ0JveCIsImxhbmdMaXN0IiwibGFuZ09wdGlvbnMiLCJzZWN0aW9uc05hdkNvbnRhaW5lciIsInNlY3Rpb25zIiwiaGFtYnVyZ2VyIiwiaGlkZU5hdiIsInNlY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibGV0c1RhbGtCdG4iLCJyZW5kZXJMYW5nTGlzdCIsInJlbmRlckxhbmdTZWxlY3RlZCIsImVsIiwiYWRkIiwicmVuZGVySGFtYnVyZ2VyIiwicHJvamVjdEJveCIsInByZXYiLCJuZXh0Iiwic2Nyb2xsQ29udGFpbmVyIiwiaW1hZ2Vfd2lkdGgiLCJDT1VOVEVSIiwiTUFYIiwic2Nyb2xsV2lkdGgiLCJuZXh0U2xpZGUiLCJ0cmFuc2Zvcm0iLCJyZW1vdmUiLCJwcmV2U2xpZGUiLCJsb2FkZXIiLCJoZXJvX3ZpZGVvIiwicmVuZGVySGVyb1NwbGluZSIsInNldFRpbWVvdXQiLCJjb250YWN0X3ZpZGVvIiwiY29udGFjdExvYWRlciIsInJlbmRlckNvbnRhY3RTcGxpbmUiLCJsYW5nX29wdGlvbnMiLCJ3aW5kb3ciLCJib3giLCJpZCIsImhlcm9fc2VjdGlvbiIsImFib3V0X3NlY3Rpb24iLCJwb3J0Zm9saW9fc2VjdGlvbiIsImNvbnRhY3Rfc2VjdGlvbiIsInNjcm9sbFVwQnRuIiwic2Nyb2xsSW50b1ZpZXciLCJlbGVtZW50SW5WaWV3cG9ydCIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFBhcmVudCIsInBhZ2VZT2Zmc2V0IiwicGFnZVhPZmZzZXQiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9
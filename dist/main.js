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
const hero_bg = document.querySelector(".background-hero");
function renderHeroSpline() {
  setTimeout(() => {
    hero_bg.classList.remove("hidden");
    loader.classList.add("hidden");
  }, 3000);
}
const contact_bg = document.querySelector(".background-contact");
const contactLoader = document.querySelector(".loading");
function renderContactSpline() {
  setTimeout(() => {
    contact_bg.classList.remove("hidden");
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/The-Orb-Hand.jpg */ "./src/img/The-Orb-Hand.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/Cybernetic-Human.jpg */ "./src/img/Cybernetic-Human.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400&family=Inter:wght@300;400;700&family=Noto+Serif:ital,wght@0,400;0,500;0,600;1,300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
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

#hero-sec {
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
}

.background-hero {
  position: absolute;
  top: 10%;
  left: 0;
  height: 100%;
  width: 100%;

  /* The image used */
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-txt-container {
  z-index: 100;
  position: absolute;
  top: 40%;
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

.background-contact {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  /* The image used */
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
    top: 40%;
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

@media (max-width: 1050px) {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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AC7B,8BAA8B;IAC9B,4BAA4B;EAC9B;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;IACnB,0BAA0B;EAC5B;;EAEA;IACE,WAAW;IACX,aAAa;IACb,sCAAsC;IACtC,eAAe;EACjB;EACA;IACE,YAAY;IACZ,cAAc;EAChB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;IACE,SAAS;EACX;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,0BAA0B;EAC5B;AACF;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,0BAA0B;IAC1B,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;EACA;IACE,eAAe;IACf,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;;EAEA;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,SAAS;EACX;EACA;IACE,SAAS;EACX;EACA;IACE,SAAS;IACT,YAAY;IACZ,aAAa;EACf;EACA;IACE,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400&family=Inter:wght@300;400;700&family=Noto+Serif:ital,wght@0,400;0,500;0,600;1,300&display=swap\");\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-family: \"Inter\", sans-serif;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  background-color: var(--black);\r\n  min-height: 100vh;\r\n  position: relative;\r\n}\r\n\r\n:root {\r\n  --black: #000000;\r\n  --dark-grey: #1a1a1a;\r\n  --white: #eeeeee;\r\n  --blue: #068fff;\r\n  --purple: #4e4feb;\r\n}\r\n\r\nheader {\r\n  min-width: 100vw;\r\n}\r\nsection {\r\n  min-height: 100vh;\r\n  min-width: 98vw;\r\n}\r\nnav {\r\n  z-index: 1000;\r\n  display: grid;\r\n  grid-template-columns: 0.5fr 1fr;\r\n  align-items: center;\r\n  padding: 20px 30px;\r\n  font-size: 18px;\r\n  background-color: #00000000;\r\n  backdrop-filter: blur(20px) saturate(160%) contrast(45%) brightness(140%);\r\n  -webkit-backdrop-filter: blur(20px) saturate(160%) contrast(45%)\r\n    brightness(140%);\r\n  position: fixed;\r\n  min-width: 100vw;\r\n}\r\n\r\n.lang-menu ul li,\r\n.selected-lang {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n  max-width: 80px;\r\n}\r\n\r\n.lang-menu ul {\r\n  background-color: var(--white);\r\n  position: absolute;\r\n  max-width: 80px;\r\n  margin-top: 10px;\r\n  margin-left: -8px;\r\n  padding: 8px;\r\n  height: 130px;\r\n  border-radius: 0px 0px 5px 5px;\r\n}\r\n\r\n.selected-lang a {\r\n  text-decoration: none;\r\n  color: var(--white);\r\n}\r\n\r\n.selected-lang {\r\n  position: relative;\r\n  cursor: pointer;\r\n  color: var(--white);\r\n  padding: 2px;\r\n}\r\n\r\nul li {\r\n  list-style: none;\r\n  line-height: 2;\r\n}\r\n\r\n.eng,\r\n.swe,\r\n.nor {\r\n  text-decoration: none;\r\n  color: var(--black);\r\n}\r\n\r\n.flag-box {\r\n  max-width: 27px;\r\n  max-height: 21px;\r\n}\r\n\r\n.lang-menu {\r\n  border: 1px solid var(--white);\r\n  background-color: transparent;\r\n  border-radius: 5px;\r\n  padding: 8px;\r\n  max-width: 80px;\r\n}\r\n\r\n.sections-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40px;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.nav {\r\n  text-decoration: none;\r\n  font-weight: 500;\r\n  color: var(--black);\r\n  transition: all 0.3s linear;\r\n  border-bottom: 1px solid transparent;\r\n  font-size: 22px;\r\n}\r\n\r\n.nav:hover {\r\n  color: var(--blue);\r\n  border-bottom: 1px solid var(--blue);\r\n}\r\n\r\n.contact-nav-container {\r\n  margin-left: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.nav-icon {\r\n  width: 28px;\r\n  height: 28px;\r\n  border: 2px solid transparent;\r\n  border-radius: 5px;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.nav-icon:hover {\r\n  border-color: var(--blue);\r\n}\r\n\r\n.lets-talk-btn {\r\n  background-color: transparent;\r\n  font-size: 16px;\r\n  padding: 8px;\r\n  color: var(--black);\r\n  border-radius: 5px;\r\n  border: 1px solid var(--black);\r\n  cursor: pointer;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.lets-talk-btn:hover {\r\n  color: var(--blue);\r\n  border: 1px solid var(--blue);\r\n}\r\n\r\n.col {\r\n  display: block;\r\n  float: left;\r\n  margin: 1% 0 1% 1.6%;\r\n}\r\n\r\n.col:first-of-type {\r\n  margin-left: 0;\r\n}\r\n\r\n.three {\r\n  display: none;\r\n  margin-left: auto;\r\n}\r\n\r\n.row .three {\r\n  padding: 80px 30px;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  background-color: #2c3e50;\r\n  color: #ecf0f1;\r\n  text-align: center;\r\n}\r\n\r\n.hamburger .line {\r\n  width: 50px;\r\n  height: 5px;\r\n  background-color: #ecf0f1;\r\n  display: block;\r\n  margin: 8px auto;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  -o-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n#hamburger-6.is-active {\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  -o-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n  -webkit-transition-delay: 0.6s;\r\n  -o-transition-delay: 0.6s;\r\n  transition-delay: 0.6s;\r\n  -webkit-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  -o-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n#hamburger-6.is-active .line:nth-child(2) {\r\n  width: 0px;\r\n}\r\n\r\n#hamburger-6.is-active .line:nth-child(1),\r\n#hamburger-6.is-active .line:nth-child(3) {\r\n  -webkit-transition-delay: 0.3s;\r\n  -o-transition-delay: 0.3s;\r\n  transition-delay: 0.3s;\r\n}\r\n\r\n#hamburger-6.is-active .line:nth-child(1) {\r\n  -webkit-transform: translateY(13px);\r\n  -ms-transform: translateY(13px);\r\n  -o-transform: translateY(13px);\r\n  transform: translateY(13px);\r\n}\r\n\r\n#hamburger-6.is-active .line:nth-child(3) {\r\n  -webkit-transform: translateY(-13px) rotate(90deg);\r\n  -ms-transform: translateY(-13px) rotate(90deg);\r\n  -o-transform: translateY(-13px) rotate(90deg);\r\n  transform: translateY(-13px) rotate(90deg);\r\n}\r\n\r\n#hero-sec {\r\n  position: relative;\r\n  max-width: 100vw;\r\n  max-height: 100vh;\r\n}\r\n\r\n.background-hero {\r\n  position: absolute;\r\n  top: 10%;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n  /* The image used */\r\n  background-image: url(\"/src/img/The-Orb-Hand.jpg\");\r\n\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.hero-txt-container {\r\n  z-index: 100;\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 3%;\r\n  color: var(--white);\r\n}\r\n\r\n.hero-h4 {\r\n  font-weight: 300;\r\n  color: var(--purple);\r\n  font-size: 22px;\r\n}\r\n\r\n.hero-h1 {\r\n  color: var(--white);\r\n  font-size: 62px;\r\n  font-weight: 600;\r\n}\r\n\r\n.name {\r\n  font-weight: bolder;\r\n  color: var(--blue);\r\n  -webkit-text-stroke: 2px var(--black);\r\n}\r\n\r\n/******* Loader *******/\r\n@keyframes spin {\r\n  from {\r\n    transform: rotate(0);\r\n  }\r\n  to {\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n.spinner-box {\r\n  /* Center vertically and horizontally */\r\n  float: right;\r\n  margin-top: 15%;\r\n  margin-right: 30%;\r\n  width: 300px;\r\n  height: 300px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: transparent;\r\n}\r\n\r\n.circle-border {\r\n  width: 150px;\r\n  height: 150px;\r\n  padding: 3px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  background: rgb(63, 249, 220);\r\n  background: linear-gradient(\r\n    0deg,\r\n    rgba(63, 249, 220, 0.1) 33%,\r\n    rgba(63, 249, 220, 1) 100%\r\n  );\r\n  animation: spin 0.8s linear 0s infinite;\r\n}\r\n\r\n.circle-core {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--black);\r\n  border-radius: 50%;\r\n}\r\n.lang-menu {\r\n  margin-right: auto;\r\n}\r\n\r\n#about-sec {\r\n  background-color: var(--dark-grey);\r\n  margin-top: 100px;\r\n  display: grid;\r\n  grid-template-columns: 0.8fr 1fr;\r\n  justify-content: center;\r\n  padding: 30px 0 0 0;\r\n}\r\n\r\n.about-text-container {\r\n  max-width: 750px;\r\n  padding: 0 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.skills-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.skill-icons-box {\r\n  justify-self: center;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 25px;\r\n  padding: 20px;\r\n}\r\n\r\n.skill-icons-box svg {\r\n  max-width: 52px;\r\n  max-height: 52px;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.img-container img {\r\n  max-width: 418px;\r\n  max-height: 624px;\r\n}\r\n\r\n#about-h1 {\r\n  text-align: center;\r\n  font-size: 36px;\r\n  color: var(--blue);\r\n  border-bottom: 1px solid var(--blue);\r\n}\r\n\r\n#about-p {\r\n  margin-top: 20px;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  color: var(--white);\r\n  line-height: 1.7;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n#skill-h2 {\r\n  color: var(--blue);\r\n  text-align: center;\r\n  border-bottom: 1px solid var(--blue);\r\n}\r\n\r\n#portfolio-sec {\r\n  background-color: var(--dark-grey);\r\n  position: relative;\r\n  margin-top: 100px;\r\n  padding-top: 130px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n#portfolio-h3 {\r\n  position: absolute;\r\n  color: var(--white);\r\n  top: 70px;\r\n  font-size: 48px;\r\n  border-bottom: 1px solid var(--white);\r\n}\r\n\r\n#portfolio-h4 {\r\n  position: absolute;\r\n  top: 150px;\r\n  color: #8b8b8b;\r\n  font-size: 22px;\r\n}\r\n\r\n.projects-container {\r\n  margin-top: 150px;\r\n  max-width: 90vw;\r\n  overflow-x: scroll;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.project-box {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0px 20px 0 10px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.projects-container::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.box {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-rows: 1fr 0.4fr;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.box img {\r\n  max-width: 400px;\r\n  height: auto;\r\n  margin-left: 10px;\r\n}\r\n.project-btn-box {\r\n  width: 100%;\r\n  margin-top: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.project-btn-box a {\r\n  text-decoration: none;\r\n  color: var(--white);\r\n  padding: 10px;\r\n  border: 1px solid var(--blue);\r\n  border-radius: 5px;\r\n  background-color: transparent;\r\n  transition: all 0.2s linear;\r\n}\r\n\r\n.project-btn-box a:active {\r\n  background-color: var(--blue);\r\n  transform: scale(1.1);\r\n}\r\n\r\n.icon-box {\r\n  z-index: 20;\r\n  position: absolute;\r\n  padding: 8px;\r\n  background-color: rgba(255, 255, 255, 0.534);\r\n  border-radius: 10px;\r\n  backdrop-filter: blur(10px);\r\n  cursor: pointer;\r\n  transition: all 0.2s linear;\r\n}\r\n\r\n.icon-box svg {\r\n  fill: var(--dark-grey);\r\n}\r\n.icon-box:active {\r\n  background-color: var(--blue);\r\n  transform: scale(1.1);\r\n}\r\n\r\n.left {\r\n  top: 350px;\r\n}\r\n\r\n.right {\r\n  top: 350px;\r\n  right: 45px;\r\n}\r\n\r\n#contact-sec {\r\n  /* margin-top: -200px; */\r\n  position: relative;\r\n}\r\n\r\n#contact-h2 {\r\n  z-index: 40;\r\n  font-size: 42px;\r\n  color: var(--white);\r\n  border-bottom: 1px solid var(--white);\r\n  font-weight: 800;\r\n  position: absolute;\r\n  top: 2%;\r\n  left: 10%;\r\n}\r\n\r\n#contact-p {\r\n  z-index: 39;\r\n  font-size: 22px;\r\n  color: var(--white);\r\n  position: absolute;\r\n  top: 12%;\r\n  left: 2%;\r\n}\r\n\r\nform {\r\n  z-index: 55;\r\n  position: absolute;\r\n  top: 20%;\r\n  left: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 400px;\r\n  height: 400px;\r\n  gap: 30px;\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\ninput {\r\n  color: var(--white);\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  background-color: transparent;\r\n  border: 1px solid var(--blue);\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  border: 2px solid var(--blue);\r\n  background-color: rgba(245, 245, 245, 0.2);\r\n  color: var(--white);\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n}\r\n\r\n.send-btn {\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  background-color: var(--blue);\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n  color: var(--white);\r\n  width: 80%;\r\n  align-self: center;\r\n  cursor: pointer;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.send-btn:active {\r\n  background-color: var(--white);\r\n  color: var(--black);\r\n  transform: scale(1.05);\r\n}\r\n\r\n.background-contact {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n  /* The image used */\r\n  background-image: url(\"/src/img/Cybernetic-Human.jpg\");\r\n\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n/* ******************** LOADER ******************* */\r\n/* Absolute Center Spinner */\r\n.loading {\r\n  position: absolute;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: visible;\r\n  margin: auto;\r\n  top: 50%;\r\n  left: 40%;\r\n}\r\n\r\n/* :not(:required) hides these rules from IE9 and below */\r\n.loading:not(:required) {\r\n  /* hide \"loading...\" text */\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.loading:not(:required):after {\r\n  content: \"\";\r\n  display: block;\r\n  font-size: 10px;\r\n  width: 8em;\r\n  height: 8em;\r\n  margin-top: -0.5em;\r\n  -webkit-animation: spinner 1500ms infinite linear;\r\n  -moz-animation: spinner 1500ms infinite linear;\r\n  -ms-animation: spinner 1500ms infinite linear;\r\n  -o-animation: spinner 1500ms infinite linear;\r\n  animation: spinner 1500ms infinite linear;\r\n  border-radius: 0.5em;\r\n  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,\r\n    rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,\r\n    rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0,\r\n    rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,\r\n    rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\r\n  box-shadow: rgba(255, 255, 255, 0.75) 1.5em 0 0 0,\r\n    rgba(255, 255, 255, 0.75) 1.1em 1.1em 0 0,\r\n    rgba(255, 255, 255, 0.75) 0 1.5em 0 0,\r\n    rgba(255, 255, 255, 0.75) -1.1em 1.1em 0 0,\r\n    rgba(255, 255, 255, 0.75) -1.5em 0 0 0,\r\n    rgba(255, 255, 255, 0.75) -1.1em -1.1em 0 0,\r\n    rgba(255, 255, 255, 0.75) 0 -1.5em 0 0,\r\n    rgba(255, 255, 255, 0.75) 1.1em -1.1em 0 0;\r\n}\r\n\r\n/* Animation */\r\n\r\n@-webkit-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -ms-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@-moz-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -ms-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@-o-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -ms-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -ms-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/* ************************************************ */\r\n\r\nfooter {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  margin-top: auto;\r\n}\r\n\r\n.ready-container {\r\n  background-color: var(--blue);\r\n  padding: 50px;\r\n  height: 120%;\r\n}\r\n\r\n.links-container {\r\n  background-color: var(--dark-grey);\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  padding: 30px;\r\n  height: 120%;\r\n}\r\n\r\n#footer-h1 {\r\n  text-align: center;\r\n  color: var(--white);\r\n  font-size: 62px;\r\n  font-weight: 800;\r\n}\r\n\r\n#footer-h5 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  color: var(--white);\r\n}\r\n\r\n#quick-h6,\r\n#hello-h6 {\r\n  font-size: 18px;\r\n  color: #acacac;\r\n  border-bottom: 1px solid #acacac;\r\n  max-width: 100px;\r\n}\r\n\r\n.hello-box p {\r\n  color: #acacac;\r\n  margin-top: 15px;\r\n}\r\n\r\n.quick-links-box {\r\n  margin-left: 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.quick-links-box a {\r\n  padding-left: 20px;\r\n  text-decoration: none;\r\n  color: #acacac;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.quick-links-box a:hover {\r\n  padding-left: 20px;\r\n  text-decoration: none;\r\n  color: var(--blue);\r\n}\r\n\r\nfooter span {\r\n  position: absolute;\r\n  bottom: -15%;\r\n  right: 10%;\r\n  color: var(--white);\r\n}\r\n\r\n.up-icon-box {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  right: 3%;\r\n  background-color: var(--blue);\r\n  padding: 8px;\r\n  border-radius: 20px;\r\n  cursor: pointer;\r\n  transition: all 0.3s linear;\r\n}\r\n\r\n.up-icon-box:active {\r\n  transform: scale(1.1);\r\n  background-color: var(--white);\r\n}\r\n\r\n/* ********************* */\r\n\r\n/* Reusable classes */\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.is-on {\r\n  color: var(--blue);\r\n  border-color: var(--blue);\r\n}\r\n\r\n/* Media Queries */\r\n\r\n@media (max-width: 1060px) {\r\n  .hero-txt-container {\r\n    top: 40%;\r\n  }\r\n  .left,\r\n  .right {\r\n    display: none;\r\n  }\r\n  .img-container img {\r\n    padding-top: 50px;\r\n    max-width: 318px;\r\n    max-height: 424px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1050px) {\r\n  header {\r\n    position: relative;\r\n  }\r\n  .sections-container {\r\n    z-index: 540;\r\n    top: 0%;\r\n    position: absolute;\r\n    display: flex;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    background-color: var(--black);\r\n    transform: translate(1200px);\r\n  }\r\n\r\n  .sections-container a {\r\n    color: var(--white);\r\n  }\r\n\r\n  .lets-talk-btn {\r\n    color: var(--white);\r\n    border-color: var(--white);\r\n  }\r\n\r\n  .contact-nav-container {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 0.5fr 1fr;\r\n    padding: 0 50px;\r\n  }\r\n  .three {\r\n    z-index: 550;\r\n    display: block;\r\n  }\r\n\r\n  .spinner-box {\r\n    margin-top: 25%;\r\n  }\r\n}\r\n\r\n.show-menu {\r\n  transform: translate(0px);\r\n}\r\n\r\n@media (max-width: 875px) {\r\n  footer span {\r\n    right: 5%;\r\n  }\r\n  .hero-h1 {\r\n    font-size: 52px;\r\n  }\r\n  #about-h1 {\r\n    font-size: 26px;\r\n  }\r\n\r\n  #about-p {\r\n    font-size: 16px;\r\n  }\r\n  #skill-h2 {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .img-container {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 750px) {\r\n  .ready-container {\r\n    display: none;\r\n  }\r\n  footer {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n@media (max-width: 650px) {\r\n  .spinner-box {\r\n    margin-top: 35%;\r\n  }\r\n\r\n  .about-text-container {\r\n    max-width: 550px;\r\n  }\r\n\r\n  .skill-icons-box svg {\r\n    max-width: 46px;\r\n    max-height: 46px;\r\n  }\r\n  #about-sec {\r\n    grid-template-columns: 1fr;\r\n    justify-items: center;\r\n  }\r\n}\r\n\r\n@media (max-width: 550px) {\r\n  #contact-p {\r\n    font-size: 16px;\r\n  }\r\n  .skill-icons-box svg {\r\n    max-width: 36px;\r\n    max-height: 36px;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .hero-h1 {\r\n    font-size: 52px;\r\n  }\r\n  .spinner-box {\r\n    margin-top: 45%;\r\n  }\r\n\r\n  .about-text-container {\r\n    max-width: 350px;\r\n  }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  #contact-h2 {\r\n    left: 30%;\r\n  }\r\n  #contact-p {\r\n    left: 10%;\r\n  }\r\n  form {\r\n    left: 10%;\r\n    width: 300px;\r\n    height: 400px;\r\n  }\r\n  .skill-icons-box svg {\r\n    max-width: 26px;\r\n    max-height: 26px;\r\n  }\r\n  .spinner-box {\r\n    margin-top: 50%;\r\n  }\r\n\r\n  .hero-h1 {\r\n    font-size: 42px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ }),

/***/ "./src/img/Cybernetic-Human.jpg":
/*!**************************************!*\
  !*** ./src/img/Cybernetic-Human.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95b5eb0710b6fd9b0106.jpg";

/***/ }),

/***/ "./src/img/The-Orb-Hand.jpg":
/*!**********************************!*\
  !*** ./src/img/The-Orb-Hand.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5121ffc7b9474f974375.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
// renderHeroSpline();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sT0FBTyxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxPQUFPLFlBQVksT0FBTyxPQUFPLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtB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QUNMdkQsYUFBYSxDQUFDaUQsU0FBUyxDQUFDa0IsTUFBTSxDQUFDLE9BQU8sQ0FBQztFQUN6QztFQUVBLElBQUltQixpQkFBaUIsQ0FBQ0gsZUFBZSxDQUFDLEVBQUU7SUFDdENsRixXQUFXLENBQUNnRCxTQUFTLENBQUNNLEdBQUcsQ0FBQyxPQUFPLENBQUM7RUFDcEMsQ0FBQyxNQUFNO0lBQ0x0RCxXQUFXLENBQUNnRCxTQUFTLENBQUNrQixNQUFNLENBQUMsT0FBTyxDQUFDO0VBQ3ZDO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvbGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3NwbGluZS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybUFjdGlvbigpIHtcclxuICByZXR1cm4gKGZvcm0uYWN0aW9uID0gXCJodHRwczovL2Zvcm1zdWJtaXQuY28vZGFzaWx2YWp1bmlvcjg4MUBnbWFpbC5jb21cIik7XHJcbn1cclxuIiwiLy8gKioqKioqKioqKioqKioqKiogTkFWICoqKioqKioqKioqKioqKioqKlxyXG5jb25zdCBob21lX25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcclxuY29uc3QgYWJvdXRfbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dFwiKTtcclxuY29uc3QgcG9ydGZvbGlvX25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvd2Nhc2VcIik7XHJcbmNvbnN0IGNvbnRhY3RfbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xyXG5jb25zdCBsZXRzVGFsa19uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxldHMtdGFsay1idG5cIik7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKiBIRVJPLVNFQ1RJT04gKioqKioqKioqKioqKioqKioqXHJcbmNvbnN0IGhlcm9fYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvLXR4dC1jb250YWluZXJcIik7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKiBBQk9VVC1TRUNUSU9OICoqKioqKioqKioqKioqKioqKlxyXG5jb25zdCBhYm91dF9oMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtaDFcIik7XHJcbmNvbnN0IGFib3V0X3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LXBcIik7XHJcbmNvbnN0IGFib3V0X3NraWxsc19oMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2tpbGwtaDJcIik7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKiBTSE9XQ0FTRS1TRUNUSU9OICoqKioqKioqKioqKioqKioqKlxyXG5jb25zdCBzaG93Y2FzZV9oMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9ydGZvbGlvLWgzXCIpO1xyXG5jb25zdCBzaG93Y2FzZV9oNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9ydGZvbGlvLWg0XCIpO1xyXG5jb25zdCBzaG93Y2FzZV92aWV3X2xpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpZXctbGl2ZVwiKTtcclxuY29uc3Qgc2hvd2Nhc2Vfc2VlX2NvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpZXctY29kZVwiKTtcclxuXHJcbi8vICoqKioqKioqKioqKioqKioqIENPTlRBQ1QtU0VDVElPTiAqKioqKioqKioqKioqKioqKipcclxuY29uc3QgY29udGFjdF9oMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC1oMlwiKTtcclxuY29uc3QgY29udGFjdF9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LXBcIik7XHJcbmNvbnN0IGNvbnRhY3RfZm9ybV9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLW5hbWVcIik7XHJcbmNvbnN0IGNvbnRhY3RfZm9ybV9waG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1waG9uZVwiKTtcclxuY29uc3QgY29udGFjdF9mb3JtX2VtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWVtYWlsXCIpO1xyXG5jb25zdCBjb250YWN0X2Zvcm1fc2VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VuZC1idG5cIik7XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKiBGT09URVItU0VDVElPTiAqKioqKioqKioqKioqKioqKipcclxuY29uc3QgZm9vdGVyX2g1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXItaDVcIik7XHJcbmNvbnN0IGZvb3Rlcl9oMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyLWgxXCIpO1xyXG5jb25zdCBmb290ZXJfcXVpY2tMaW5rc19oNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVpY2staDZcIik7XHJcbmNvbnN0IGZvb3Rlcl9ob21lX25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyLWhvbWVcIik7XHJcbmNvbnN0IGZvb3Rlcl9hYm91dF9uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3Rlci1hYm91dFwiKTtcclxuY29uc3QgZm9vdGVyX3BvcnRmb2xpb19uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3Rlci1wcm9qZWN0c1wiKTtcclxuY29uc3QgZm9vdGVyX3NheUhlbGxvX2g2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWxsby1oNlwiKTtcclxuXHJcbmNvbnN0IEVORyA9IHtcclxuICBob21lX25hdjogXCJIb21lXCIsXHJcbiAgYWJvdXRfbmF2OiBcIkFib3V0XCIsXHJcbiAgcG9ydGZvbGlvX25hdjogXCJTaG93Y2FzZVwiLFxyXG4gIGNvbnRhY3RfbmF2OiBcIkNvbnRhY3RcIixcclxuICBsZXRzVGFsa19uYXY6IFwiTEVUJ1MgVEFMS1wiLFxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBoZXJvX2JveDogYDxoNCBjbGFzcz1cImhlcm8taDRcIj5Gcm9udC1FbmQgRGV2ZWxvcGVyPC9oND5cclxuICA8aDEgY2xhc3M9XCJoZXJvLWgxXCI+XHJcbiAgICBIZWxsbywgSSdtIDxzdHJvbmcgY2xhc3M9XCJuYW1lXCI+THVjYXM8L3N0cm9uZz48YnIgLz5cclxuICAgIFdlbGNvbWUgVG8gTXkgV29ybGQuXHJcbiAgPC9oMT5gLFxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBhYm91dF9oMTogXCJGcm9udC1FbmQgRGV2ZWxvcGVyXCIsXHJcbiAgYWJvdXRfcDogYCBIZWxsbywgSSdtIEx1Y2FzLCBhIHBhc3Npb25hdGUgZnJvbnQtZW5kIGRldmVsb3BlciB3aXRoIGEgY2xlYXIgdmlzaW9uIG9mIGJlY29taW5nIGEgZnVsbC1zdGFjayBtYWVzdHJvLiBJIGNyYWZ0IGJlYXV0aWZ1bCwgdXNlci1mcmllbmRseSB3ZWJzaXRlcyB1c2luZyBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0LCBlbnN1cmluZyBhIHNlYW1sZXNzIGV4cGVyaWVuY2UgZm9yIGV2ZXJ5IHZpc2l0b3IuIFdpdGggYSBzdHJvbmcgZ3Jhc3Agb2YgR2l0IGZvciB2ZXJzaW9uIGNvbnRyb2wgYW5kIFdlYnBhY2sgZm9yIGVmZmljaWVudCBwcm9qZWN0IG1hbmFnZW1lbnQsIEknbSB3ZWxsLXZlcnNlZCBpbiB0aGUgYXJ0IG9mIG1vZGVybiB3ZWIgZGV2ZWxvcG1lbnQuXHJcbiAgQnV0IGl0IGRvZXNuJ3Qgc3RvcCB0aGVyZS4gTXkgam91cm5leSB0b3dhcmRzIGZ1bGwtc3RhY2sgZXhwZXJ0aXNlIGlzIGluIGZ1bGwgc3dpbmcsIGFuZCBJJ20gYWxyZWFkeSBtYWtpbmcgQVBJIGNhbGxzIHRvIGJyaW5nIGR5bmFtaWMgZGF0YSBpbnRvIG15IHByb2plY3RzLiBNeSBkZXNpZ24gc2Vuc2liaWxpdGllcyBhcmUgaG9uZWQgdGhyb3VnaCBleHBlcmllbmNlIHdpdGggRmlnbWEsIGdpdmluZyBtZSBhIGtlZW4gZXllIGZvciBhZXN0aGV0aWNzLlxyXG4gIEknbSBjdXJyZW50bHkgc3R1ZHlpbmcgYSB0d28teWVhciBwcm9ncmFtIGZvciBmcm9udC1lbmQgZGV2ZWxvcG1lbnQgYXQgRm9sa3VuaXZlcnNpdGV0LUdvdGhlbmJ1cmcgYW5kIHdvcmtpbmcgb24gbXkgcGVyc29uYWwgcG9ydGZvbGlvLCB3aGVyZSB5b3UgY2FuIHdpdG5lc3MgdGhlIGN1bG1pbmF0aW9uIG9mIG15IHNraWxscy4gRWFjaCBwcm9qZWN0IHNob3djYXNlcyBteSBkZWRpY2F0aW9uIHRvIGRlbGl2ZXJpbmcgdG9wLW5vdGNoIHVzZXIgZXhwZXJpZW5jZXMuIEFzIEkgYnJpZGdlIHRoZSBnYXAgZnJvbSBmcm9udC1lbmQgdG8gZnVsbC1zdGFjaywgSSdtIGV4Y2l0ZWQgdG8gYnJpbmcgZHluYW1pYywgZGF0YS1kcml2ZW4gd2ViIGFwcGxpY2F0aW9ucyB0byBsaWZlLmAsXHJcbiAgYWJvdXRfc2tpbGxzX2gyOiBcIk1haW4gc2tpbGxzXCIsXHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIHNob3djYXNlX2gzOiBcIlBPUlRGT0xJT1wiLFxyXG4gIHNob3djYXNlX2g0OiBcIkRpc2NvdmVyIG15IGxhdGVzdCB3b3Jrc1wiLFxyXG4gIHNob3djYXNlX3ZpZXdfbGl2ZTogXCJWaWV3IGxpdmVcIixcclxuICBzaG93Y2FzZV9zZWVfY29kZTogXCJTZWUgY29kZVwiLFxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBjb250YWN0X2gyOiBcIkhpcmUgTWVcIixcclxuICBjb250YWN0X3A6IFwiSSdhbSBhdmFpbGFibGUgZm9yIGZyZWVsYW5jZSB3b3JrLiBDb25uZWN0IHdpdGggbWUuXCIsXHJcbiAgY29udGFjdF9mb3JtX25hbWU6IFwiWW91ciBOYW1lKlwiLFxyXG4gIGNvbnRhY3RfZm9ybV9lbWFpbDogXCJZb3VyIEVtYWlsKlwiLFxyXG4gIGNvbnRhY3RfZm9ybV9waG9uZTogXCJUZWxlcGhvbmVcIixcclxuICBjb250YWN0X2Zvcm1fc2VuZDogXCJTdWJtaXRcIixcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgZm9vdGVyX2g1OiBcIlJFQURZIFRPIERPIFRISVNcIixcclxuICBmb290ZXJfaDE6IFwiTGV0J3MgZ2V0IHRvIHdvcmtcIixcclxuICBmb290ZXJfcXVpY2tMaW5rc19oNjogXCJRdWljayBMaW5rXCIsXHJcbiAgZm9vdGVyX2hvbWVfbmF2OiBcIkhvbWVcIixcclxuICBmb290ZXJfYWJvdXRfbmF2OiBcIkFib3V0XCIsXHJcbiAgZm9vdGVyX3BvcnRmb2xpb19uYXY6IFwiU2hvd2Nhc2VcIixcclxuICBmb290ZXJfc2F5SGVsbG9faDY6IFwiU2F5IEhlbGxvIVwiLFxyXG59O1xyXG5cclxuY29uc3QgU1dFID0ge1xyXG4gIGhvbWVfbmF2OiBcIkhlbVwiLFxyXG4gIGFib3V0X25hdjogXCJPbVwiLFxyXG4gIHBvcnRmb2xpb19uYXY6IFwiUHJvamVrdFwiLFxyXG4gIGNvbnRhY3RfbmF2OiBcIktvbnRha3RcIixcclxuICBsZXRzVGFsa19uYXY6IFwiTMOldCBvc3MgcHJhdGFcIixcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgaGVyb19ib3g6IGA8aDQgY2xhc3M9XCJoZXJvLWg0XCI+RnJvbnQtRW5kLVV0dmVja2xhcmU8L2g0PlxyXG4gICA8aDEgY2xhc3M9XCJoZXJvLWgxXCI+XHJcbiAgIEhlaiwgSmFnIGhldGVyIDxzdHJvbmcgY2xhc3M9XCJuYW1lXCI+THVjYXM8L3N0cm9uZz48YnIgLz5cclxuICAgVsOkbGtvbW1lbiB0aWxsIG1pbiB2w6RybGQuXHJcbiAgIDwvaDE+YCxcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgYWJvdXRfaDE6IFwiRnJvbnQtRW5kIFV0dmVja2xhcmVcIixcclxuICBhYm91dF9wOiBgIEhlaiwgamFnIGhldGVyIEx1Y2FzLCBlbiBwYXNzaW9uZXJhZCBmcm9udGVuZC11dHZlY2tsYXJlIG1lZCBlbiB0eWRsaWcgdmlzaW9uIG9tIGF0dCBibGkgZW4gZnVsbC1zdGFjayBtYWVzdHJvLiBKYWcgc2thcGFyIHZhY2tyYSwgYW52w6RuZGFydsOkbmxpZ2Egd2ViYnBsYXRzZXIgbWVkIEhUTUwsIENTUyBvY2ggSmF2YVNjcmlwdCwgdmlsa2V0IHPDpGtlcnN0w6RsbGVyIGVuIHVwcGxldmVsc2UgZsO2ciB2YXJqZSBiZXPDtmthcmUuIE1lZCBldHQgc3Rhcmt0IGdyZXBwIG9tIEdpdCBmw7ZyIHZlcnNpb25za29udHJvbGwgb2NoIFdlYnBhY2sgZsO2ciBlZmZla3RpdiBwcm9qZWt0bGVkbmluZywgw6RyIGphZyB2w6RsIGluc2F0dCBpIHdlYmJ1dHZlY2tsaW5nLlxyXG4gIE1lbiBkZXQgc3Rhbm5hciBpbnRlIGTDpHIuIE1pbiByZXNhIG1vdCBmdWxsLXN0YWNrIGV4cGVydGlzIMOkciBpIGZ1bGwgZ8OlbmcsIG9jaCBqYWcgZ8O2ciByZWRhbiBBUEktYW5yb3AgZsO2ciBhdHQgZsOlIGluIGR5bmFtaXNrIGRhdGEgaSBtaW5hIHByb2pla3QuIE1pbiBkZXNpZ25rw6Ruc2xpZ2hldCBmaW5zbGlwYXMgZ2Vub20gZXJmYXJlbmhldCBtZWQgRmlnbWEsIHZpbGtldCBnZXIgbWlnIGV0dCBza2FycHQgw7ZnYSBmw7ZyIGVzdGV0aWsuXHJcbiAgSmFnIGzDpHNlciBqdXN0IG51IGV0dCB0dsOlw6VyaWd0IHByb2dyYW0gZsO2ciBmcm9udGVuZC11dHZlY2tsaW5nIHDDpSBGb2xrdW5pdmVyc2l0ZXQtR8O2dGVib3JnIG9jaCBhcmJldGFyIG1lZCBtaW4gcGVyc29ubGlnYSBwb3J0Zm9saW8sIGTDpHIgZHUga2FuIGJldml0dG5hIG1pbmEga3Vuc2thcGVyLiBWYXJqZSBwcm9qZWt0IHZpc2FyIG1pdHQgZW5nYWdlbWFuZyBmw7ZyIGF0dCBsZXZlcmVyYSBmw7Zyc3RrbGFzc2lnYSBhbnbDpG5kYXJ1cHBsZXZlbHNlci4gTsOkciBqYWcgw7Z2ZXJicnlnZ2FyIGtseWZ0YW4gZnLDpW4gZnJvbnQtZW5kIHRpbGwgZnVsbC1zdGFjayDDpHIgamFnIGdsYWQgw7Z2ZXIgYXR0IGbDpSBsaXYgaSBkeW5hbWlza2EsIGRhdGFkcml2bmEgd2ViYmFwcGxpa2F0aW9uZXIuYCxcclxuICBhYm91dF9za2lsbHNfaDI6IFwiRsOkcmRpZ2hldGVyXCIsXHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIHNob3djYXNlX2gzOiBcIlBPUlRGT0xJT1wiLFxyXG4gIHNob3djYXNlX2g0OiBcIlVwcHTDpGNrIG1pbmEgc2VuYXN0ZSB2ZXJrXCIsXHJcbiAgc2hvd2Nhc2Vfdmlld19saXZlOiBcIlNlIGxpdmVcIixcclxuICBzaG93Y2FzZV9zZWVfY29kZTogXCJTZSBLb2RcIixcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgY29udGFjdF9oMjogXCJBbnN0w6RsbCBNaWdcIixcclxuICBjb250YWN0X3A6IFwiSmFnIMOkciB0aWxsZ8OkbmdsaWcgZsO2ciBmcmlsYW5zYXJiZXRlLiBUYSBrb250YWt0IG1lZCBtaWcuXCIsXHJcbiAgY29udGFjdF9mb3JtX25hbWU6IFwiRGl0dCBOYW1uKlwiLFxyXG4gIGNvbnRhY3RfZm9ybV9lbWFpbDogXCJEaW4gRW1haWwqXCIsXHJcbiAgY29udGFjdF9mb3JtX3Bob25lOiBcIlRlbGVmb25udW1tZXJcIixcclxuICBjb250YWN0X2Zvcm1fc2VuZDogXCJTa2lja2EgaW5cIixcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgZm9vdGVyX2g1OiBcIlJlZG8gYXR0IGfDtnJhIGRldHRhXCIsXHJcbiAgZm9vdGVyX2gxOiBcIkzDpXQgb3NzIGLDtnJqYSBqb2JiYVwiLFxyXG4gIGZvb3Rlcl9xdWlja0xpbmtzX2g2OiBcIlNuYWJibMOkbmthclwiLFxyXG4gIGZvb3Rlcl9ob21lX25hdjogXCJIZW1cIixcclxuICBmb290ZXJfYWJvdXRfbmF2OiBcIk9tXCIsXHJcbiAgZm9vdGVyX3BvcnRmb2xpb19uYXY6IFwiUHJvamVrdFwiLFxyXG4gIGZvb3Rlcl9zYXlIZWxsb19oNjogXCJTw6RnIEhlaiFcIixcclxufTtcclxuXHJcbmNvbnN0IE5PUiA9IHtcclxuICBob21lX25hdjogXCJIamVtXCIsXHJcbiAgYWJvdXRfbmF2OiBcIk9tXCIsXHJcbiAgcG9ydGZvbGlvX25hdjogXCJQcm9zamVrdGVyXCIsXHJcbiAgY29udGFjdF9uYXY6IFwiS29udGFrdFwiLFxyXG4gIGxldHNUYWxrX25hdjogXCJMQSBPU1MgU05BS0tFXCIsXHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIGhlcm9fYm94OiBgPGg0IGNsYXNzPVwiaGVyby1oNFwiPkZyb250LUVuZCBVdHZpa2xlcjwvaDQ+XHJcbiAgICA8aDEgY2xhc3M9XCJoZXJvLWgxXCI+XHJcbiAgICBIZWksIEphZyBoZXRlciA8c3Ryb25nIGNsYXNzPVwibmFtZVwiPkx1Y2FzPC9zdHJvbmc+PGJyIC8+XHJcbiAgICBWZWxrb21tZW4gdGlsIG1pbiB2ZXJkZW4uXHJcbiAgICA8L2gxPmAsXHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIGFib3V0X2gxOiBcIkZyb250LUVuZCBVdHZpa2xlclwiLFxyXG4gIGFib3V0X3A6IGAgSGVpLCBqZWcgaGV0ZXIgTHVjYXMsIGVuIGxpZGVuc2thcGVsaWcgZnJvbnQtZW5kLXV0dmlrbGVyIG1lZCBlbiBrbGFyIHZpc2pvbiBvbSDDpSBibGkgZW4gZnVsbC1zdGFjayBtYWVzdHJvLiBKZWcgbGFnZXIgdmFrcmUsIGJydWtlcnZlbm5saWdlIG5ldHRzaWRlciB2ZWQgaGplbHAgYXYgSFRNTCwgQ1NTIG9nIEphdmFTY3JpcHQsIG9nIHNpa3JlciBlbiAgb3BwbGV2ZWxzZSBmb3IgYWxsZSBiZXPDuGtlbmRlLiBNZWQgZXQgc3Rlcmt0IGdyZXAgb20gR2l0IGZvciB2ZXJzam9uc2tvbnRyb2xsIG9nIFdlYnBhY2sgZm9yIGVmZmVrdGl2IHByb3NqZWt0bGVkZWxzZSwgZXIgamVnIGdvZHQgYmV2YW5kcmV0IGkga3Vuc3RlbiDDpSBtb2Rlcm5lIHdlYnV0dmlrbGluZy5cclxuICBNZW4gZGV0IHN0b3BwZXIgaWtrZSBkZXIuIFJlaXNlbiBtaW4gbW90IGZ1bGwtc3RhY2stZWtzcGVydGlzZSBlciBpIGZ1bGwgZ2FuZywgb2cgamVnIGZvcmV0YXIgYWxsZXJlZGUgQVBJLWthbGwgZm9yIMOlIGJyaW5nZSBkeW5hbWlza2UgZGF0YSBpbm4gaSBwcm9zamVrdGVuZSBtaW5lLiBNaW5lIGRlc2lnbmbDuGxzb21oZXRlciBlciBmaW5wdXNzZXQgZ2plbm5vbSBlcmZhcmluZyBtZWQgRmlnbWEsIG5vZSBzb20gZ2lyIG1lZyBldCBnb2R0IMO4eWUgZm9yIGVzdGV0aWtrLlxyXG4gIEplZyBzdHVkZXJlciBmb3IgdGlkZW4gZXQgdG/DpXJpZyBwcm9ncmFtIGZvciBmcm9udGVuZC11dHZpa2xpbmcgdmVkIEZvbGt1bml2ZXJzaXRldC1Hw7h0ZWJvcmcgb2cgam9iYmVyIG1lZCBtaW4gcGVyc29ubGlnZSBwb3J0ZWbDuGxqZSwgaHZvciBkdSBrYW4gc2Uga3VsbWluYXNqb25lbiBhdiBmZXJkaWdoZXRlbmUgbWluZS4gSHZlcnQgcHJvc2pla3QgdmlzZXIgbWluIGRlZGlrYXNqb24gdGlsIMOlIGxldmVyZSBmw7hyc3Rla2xhc3NlcyBicnVrZXJvcHBsZXZlbHNlci4gTsOlciBqZWcgYnlnZ2VyIGJybyBmcmEgZnJvbnQtZW5kIHRpbCBmdWxsLXN0YWNrLCBlciBqZWcgZ2xhZCBmb3Igw6UgYnJpbmdlIGR5bmFtaXNrZSwgZGF0YWRyZXZuZSBuZXR0YXBwbGlrYXNqb25lciB0aWwgbGl2ZS5gLFxyXG4gIGFib3V0X3NraWxsc19oMjogXCJIb3ZlZGZlcmRpZ2hldGVyXCIsXHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIHNob3djYXNlX2gzOiBcIlBPUlRGT0xJT1wiLFxyXG4gIHNob3djYXNlX2g0OiBcIk9wcGRhZyBkZSBzaXN0ZSB2ZXJrZW5lIG1pbmVcIixcclxuICBzaG93Y2FzZV92aWV3X2xpdmU6IFwiU2UgbGl2ZVwiLFxyXG4gIHNob3djYXNlX3NlZV9jb2RlOiBcIlNlIEtvZGVcIixcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgY29udGFjdF9oMjogXCJBbnNldHRlIE1lZ1wiLFxyXG4gIGNvbnRhY3RfcDogXCJKZWcgZXIgdGlsZ2plbmdlbGlnIGZvciBmcmlsYW5zYXJiZWlkLiBUYSBrb250YWt0IG1lZCBtZWcuXCIsXHJcbiAgY29udGFjdF9mb3JtX25hbWU6IFwiTmF2bmV0IERpdHQqXCIsXHJcbiAgY29udGFjdF9mb3JtX2VtYWlsOiBcIkRpbiBFcG9zdCpcIixcclxuICBjb250YWN0X2Zvcm1fcGhvbmU6IFwiVGVsZWZvbm51bW1lclwiLFxyXG4gIGNvbnRhY3RfZm9ybV9zZW5kOiBcIlNlbmRlIGlublwiLFxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBmb290ZXJfaDU6IFwiS0xBUiBUSUwgw4UgR0rDmFJFIERFVFRFXCIsXHJcbiAgZm9vdGVyX2gxOiBcIkxhIG9zcyBnw6UgcMOlIGpvYmJcIixcclxuICBmb290ZXJfcXVpY2tMaW5rc19oNjogXCJSYXNrIExpbmtcIixcclxuICBmb290ZXJfaG9tZV9uYXY6IFwiSGplbVwiLFxyXG4gIGZvb3Rlcl9hYm91dF9uYXY6IFwiT21cIixcclxuICBmb290ZXJfcG9ydGZvbGlvX25hdjogXCJQcm9qZWt0ZXJcIixcclxuICBmb290ZXJfc2F5SGVsbG9faDY6IFwiU2kgSGVpIVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShsYW5nKSB7XHJcbiAgaWYgKGxhbmcgPT09IFwiZW5nXCIpIHtcclxuICAgIGhvbWVfbmF2LnRleHRDb250ZW50ID0gRU5HLmhvbWVfbmF2O1xyXG4gICAgYWJvdXRfbmF2LnRleHRDb250ZW50ID0gRU5HLmFib3V0X25hdjtcclxuICAgIHBvcnRmb2xpb19uYXYudGV4dENvbnRlbnQgPSBFTkcucG9ydGZvbGlvX25hdjtcclxuICAgIGNvbnRhY3RfbmF2LnRleHRDb250ZW50ID0gRU5HLmNvbnRhY3RfbmF2O1xyXG4gICAgbGV0c1RhbGtfbmF2LnRleHRDb250ZW50ID0gRU5HLmxldHNUYWxrX25hdjtcclxuXHJcbiAgICBoZXJvX2JveC5pbm5lckhUTUwgPSBFTkcuaGVyb19ib3g7XHJcblxyXG4gICAgYWJvdXRfaDEudGV4dENvbnRlbnQgPSBFTkcuYWJvdXRfaDE7XHJcbiAgICBhYm91dF9wLnRleHRDb250ZW50ID0gRU5HLmFib3V0X3A7XHJcbiAgICBhYm91dF9za2lsbHNfaDIudGV4dENvbnRlbnQgPSBFTkcuYWJvdXRfc2tpbGxzX2gyO1xyXG5cclxuICAgIHNob3djYXNlX2gzLnRleHRDb250ZW50ID0gRU5HLnNob3djYXNlX2gzO1xyXG4gICAgc2hvd2Nhc2VfaDQudGV4dENvbnRlbnQgPSBFTkcuc2hvd2Nhc2VfaDQ7XHJcbiAgICBzaG93Y2FzZV92aWV3X2xpdmUuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi50ZXh0Q29udGVudCA9IEVORy5zaG93Y2FzZV92aWV3X2xpdmU7XHJcbiAgICB9KTtcclxuICAgIHNob3djYXNlX3NlZV9jb2RlLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICBidG4udGV4dENvbnRlbnQgPSBFTkcuc2hvd2Nhc2Vfc2VlX2NvZGU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250YWN0X2gyLnRleHRDb250ZW50ID0gRU5HLmNvbnRhY3RfaDI7XHJcbiAgICBjb250YWN0X2gyLnN0eWxlLmZvbnRTaXplID0gXCI0MnB4XCI7XHJcbiAgICBjb250YWN0X3AudGV4dENvbnRlbnQgPSBFTkcuY29udGFjdF9wO1xyXG4gICAgY29udGFjdF9mb3JtX25hbWUucGxhY2Vob2xkZXIgPSBFTkcuY29udGFjdF9mb3JtX25hbWU7XHJcbiAgICBjb250YWN0X2Zvcm1fcGhvbmUucGxhY2Vob2xkZXIgPSBFTkcuY29udGFjdF9mb3JtX3Bob25lO1xyXG4gICAgY29udGFjdF9mb3JtX2VtYWlsLnBsYWNlaG9sZGVyID0gRU5HLmNvbnRhY3RfZm9ybV9lbWFpbDtcclxuICAgIGNvbnRhY3RfZm9ybV9zZW5kLnRleHRDb250ZW50ID0gRU5HLmNvbnRhY3RfZm9ybV9zZW5kO1xyXG5cclxuICAgIGZvb3Rlcl9oNS50ZXh0Q29udGVudCA9IEVORy5mb290ZXJfaDU7XHJcbiAgICBmb290ZXJfaDEudGV4dENvbnRlbnQgPSBFTkcuZm9vdGVyX2gxO1xyXG4gICAgZm9vdGVyX3F1aWNrTGlua3NfaDYudGV4dENvbnRlbnQgPSBFTkcuZm9vdGVyX3F1aWNrTGlua3NfaDY7XHJcbiAgICBmb290ZXJfaG9tZV9uYXYudGV4dENvbnRlbnQgPSBFTkcuZm9vdGVyX2hvbWVfbmF2O1xyXG4gICAgZm9vdGVyX2Fib3V0X25hdi50ZXh0Q29udGVudCA9IEVORy5mb290ZXJfaG9tZV9uYXY7XHJcbiAgICBmb290ZXJfcG9ydGZvbGlvX25hdi50ZXh0Q29udGVudCA9IEVORy5mb290ZXJfcG9ydGZvbGlvX25hdjtcclxuICAgIGZvb3Rlcl9zYXlIZWxsb19oNi50ZXh0Q29udGVudCA9IEVORy5mb290ZXJfc2F5SGVsbG9faDY7XHJcbiAgfVxyXG5cclxuICBpZiAobGFuZyA9PT0gXCJzd2VcIikge1xyXG4gICAgaG9tZV9uYXYudGV4dENvbnRlbnQgPSBTV0UuaG9tZV9uYXY7XHJcbiAgICBhYm91dF9uYXYudGV4dENvbnRlbnQgPSBTV0UuYWJvdXRfbmF2O1xyXG4gICAgcG9ydGZvbGlvX25hdi50ZXh0Q29udGVudCA9IFNXRS5wb3J0Zm9saW9fbmF2O1xyXG4gICAgY29udGFjdF9uYXYudGV4dENvbnRlbnQgPSBTV0UuY29udGFjdF9uYXY7XHJcbiAgICBsZXRzVGFsa19uYXYudGV4dENvbnRlbnQgPSBTV0UubGV0c1RhbGtfbmF2O1xyXG5cclxuICAgIGhlcm9fYm94LmlubmVySFRNTCA9IFNXRS5oZXJvX2JveDtcclxuXHJcbiAgICBhYm91dF9oMS50ZXh0Q29udGVudCA9IFNXRS5hYm91dF9oMTtcclxuICAgIGFib3V0X3AudGV4dENvbnRlbnQgPSBTV0UuYWJvdXRfcDtcclxuICAgIGFib3V0X3NraWxsc19oMi50ZXh0Q29udGVudCA9IFNXRS5hYm91dF9za2lsbHNfaDI7XHJcblxyXG4gICAgc2hvd2Nhc2VfaDMudGV4dENvbnRlbnQgPSBTV0Uuc2hvd2Nhc2VfaDM7XHJcbiAgICBzaG93Y2FzZV9oNC50ZXh0Q29udGVudCA9IFNXRS5zaG93Y2FzZV9oNDtcclxuICAgIHNob3djYXNlX3ZpZXdfbGl2ZS5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLnRleHRDb250ZW50ID0gU1dFLnNob3djYXNlX3ZpZXdfbGl2ZTtcclxuICAgIH0pO1xyXG4gICAgc2hvd2Nhc2Vfc2VlX2NvZGUuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFNXRS5zaG93Y2FzZV9zZWVfY29kZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRhY3RfaDIudGV4dENvbnRlbnQgPSBTV0UuY29udGFjdF9oMjtcclxuICAgIGNvbnRhY3RfcC50ZXh0Q29udGVudCA9IFNXRS5jb250YWN0X3A7XHJcbiAgICBjb250YWN0X3Auc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIxMHB4XCI7XHJcbiAgICBjb250YWN0X2gyLnN0eWxlLmZvbnRTaXplID0gXCIzMnB4XCI7XHJcbiAgICBjb250YWN0X2Zvcm1fbmFtZS5wbGFjZWhvbGRlciA9IFNXRS5jb250YWN0X2Zvcm1fbmFtZTtcclxuICAgIGNvbnRhY3RfZm9ybV9waG9uZS5wbGFjZWhvbGRlciA9IFNXRS5jb250YWN0X2Zvcm1fcGhvbmU7XHJcbiAgICBjb250YWN0X2Zvcm1fZW1haWwucGxhY2Vob2xkZXIgPSBTV0UuY29udGFjdF9mb3JtX2VtYWlsO1xyXG4gICAgY29udGFjdF9mb3JtX3NlbmQudGV4dENvbnRlbnQgPSBTV0UuY29udGFjdF9mb3JtX3NlbmQ7XHJcblxyXG4gICAgZm9vdGVyX2g1LnRleHRDb250ZW50ID0gU1dFLmZvb3Rlcl9oNTtcclxuICAgIGZvb3Rlcl9oMS50ZXh0Q29udGVudCA9IFNXRS5mb290ZXJfaDE7XHJcbiAgICBmb290ZXJfcXVpY2tMaW5rc19oNi50ZXh0Q29udGVudCA9IFNXRS5mb290ZXJfcXVpY2tMaW5rc19oNjtcclxuICAgIGZvb3Rlcl9ob21lX25hdi50ZXh0Q29udGVudCA9IFNXRS5mb290ZXJfaG9tZV9uYXY7XHJcbiAgICBmb290ZXJfYWJvdXRfbmF2LnRleHRDb250ZW50ID0gU1dFLmZvb3Rlcl9ob21lX25hdjtcclxuICAgIGZvb3Rlcl9wb3J0Zm9saW9fbmF2LnRleHRDb250ZW50ID0gU1dFLmZvb3Rlcl9wb3J0Zm9saW9fbmF2O1xyXG4gICAgZm9vdGVyX3NheUhlbGxvX2g2LnRleHRDb250ZW50ID0gU1dFLmZvb3Rlcl9zYXlIZWxsb19oNjtcclxuICB9XHJcblxyXG4gIGlmIChsYW5nID09PSBcIm5vclwiKSB7XHJcbiAgICBob21lX25hdi50ZXh0Q29udGVudCA9IE5PUi5ob21lX25hdjtcclxuICAgIGFib3V0X25hdi50ZXh0Q29udGVudCA9IE5PUi5hYm91dF9uYXY7XHJcbiAgICBwb3J0Zm9saW9fbmF2LnRleHRDb250ZW50ID0gTk9SLnBvcnRmb2xpb19uYXY7XHJcbiAgICBjb250YWN0X25hdi50ZXh0Q29udGVudCA9IE5PUi5jb250YWN0X25hdjtcclxuICAgIGxldHNUYWxrX25hdi50ZXh0Q29udGVudCA9IE5PUi5sZXRzVGFsa19uYXY7XHJcblxyXG4gICAgaGVyb19ib3guaW5uZXJIVE1MID0gTk9SLmhlcm9fYm94O1xyXG5cclxuICAgIGFib3V0X2gxLnRleHRDb250ZW50ID0gTk9SLmFib3V0X2gxO1xyXG4gICAgYWJvdXRfcC50ZXh0Q29udGVudCA9IE5PUi5hYm91dF9wO1xyXG4gICAgYWJvdXRfc2tpbGxzX2gyLnRleHRDb250ZW50ID0gTk9SLmFib3V0X3NraWxsc19oMjtcclxuXHJcbiAgICBzaG93Y2FzZV9oMy50ZXh0Q29udGVudCA9IE5PUi5zaG93Y2FzZV9oMztcclxuICAgIHNob3djYXNlX2g0LnRleHRDb250ZW50ID0gTk9SLnNob3djYXNlX2g0O1xyXG4gICAgc2hvd2Nhc2Vfdmlld19saXZlLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICBidG4udGV4dENvbnRlbnQgPSBOT1Iuc2hvd2Nhc2Vfdmlld19saXZlO1xyXG4gICAgfSk7XHJcbiAgICBzaG93Y2FzZV9zZWVfY29kZS5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLnRleHRDb250ZW50ID0gTk9SLnNob3djYXNlX3NlZV9jb2RlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGFjdF9oMi50ZXh0Q29udGVudCA9IE5PUi5jb250YWN0X2gyO1xyXG4gICAgY29udGFjdF9oMi5zdHlsZS5mb250U2l6ZSA9IFwiMzJweFwiO1xyXG4gICAgY29udGFjdF9wLnRleHRDb250ZW50ID0gTk9SLmNvbnRhY3RfcDtcclxuICAgIGNvbnRhY3RfZm9ybV9uYW1lLnBsYWNlaG9sZGVyID0gTk9SLmNvbnRhY3RfZm9ybV9uYW1lO1xyXG4gICAgY29udGFjdF9mb3JtX3Bob25lLnBsYWNlaG9sZGVyID0gTk9SLmNvbnRhY3RfZm9ybV9waG9uZTtcclxuICAgIGNvbnRhY3RfZm9ybV9lbWFpbC5wbGFjZWhvbGRlciA9IE5PUi5jb250YWN0X2Zvcm1fZW1haWw7XHJcbiAgICBjb250YWN0X2Zvcm1fc2VuZC50ZXh0Q29udGVudCA9IE5PUi5jb250YWN0X2Zvcm1fc2VuZDtcclxuXHJcbiAgICBmb290ZXJfaDUudGV4dENvbnRlbnQgPSBOT1IuZm9vdGVyX2g1O1xyXG4gICAgZm9vdGVyX2gxLnRleHRDb250ZW50ID0gTk9SLmZvb3Rlcl9oMTtcclxuICAgIGZvb3Rlcl9xdWlja0xpbmtzX2g2LnRleHRDb250ZW50ID0gTk9SLmZvb3Rlcl9xdWlja0xpbmtzX2g2O1xyXG4gICAgZm9vdGVyX2hvbWVfbmF2LnRleHRDb250ZW50ID0gTk9SLmZvb3Rlcl9ob21lX25hdjtcclxuICAgIGZvb3Rlcl9hYm91dF9uYXYudGV4dENvbnRlbnQgPSBOT1IuZm9vdGVyX2hvbWVfbmF2O1xyXG4gICAgZm9vdGVyX3BvcnRmb2xpb19uYXYudGV4dENvbnRlbnQgPSBOT1IuZm9vdGVyX3BvcnRmb2xpb19uYXY7XHJcbiAgICBmb290ZXJfc2F5SGVsbG9faDYudGV4dENvbnRlbnQgPSBOT1IuZm9vdGVyX3NheUhlbGxvX2g2O1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYW5nLW1lbnVcIik7XHJcbmNvbnN0IHNlbGVjdGVkTGFuZ0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWQtbGFuZ1wiKTtcclxuY29uc3QgbGFuZ0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhbmctbGlzdFwiKTtcclxuY29uc3QgbGFuZ09wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhbmctb3B0XCIpO1xyXG5jb25zdCBzZWN0aW9uc05hdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbnMtY29udGFpbmVyXCIpO1xyXG5jb25zdCBzZWN0aW9ucyA9IHNlY3Rpb25zTmF2Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xyXG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlTmF2KCkge1xyXG4gIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2VjdGlvbnNOYXZDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbWVudVwiKTtcclxuICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBjb25zdCBsZXRzVGFsa0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGV0cy10YWxrLWJ0blwiKTtcclxuICBsZXRzVGFsa0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgc2VjdGlvbnNOYXZDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbWVudVwiKTtcclxuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTGFuZ0xpc3QoKSB7XHJcbiAgbGFuZ0xpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICByZW5kZXJMYW5nU2VsZWN0ZWQoKTtcclxufVxyXG5cclxuc2VsZWN0ZWRMYW5nQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJMYW5nTGlzdCk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJMYW5nU2VsZWN0ZWQoKSB7XHJcbiAgbGFuZ09wdGlvbnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNlbGVjdGVkTGFuZ0JveC5pbm5lckhUTUwgPSBlbC5pbm5lckhUTUw7XHJcbiAgICAgIGxhbmdMaXN0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhhbWJ1cmdlcigpIHtcclxuICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgc2VjdGlvbnNOYXZDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbWVudVwiKTtcclxuICB9KTtcclxufVxyXG4iLCJjb25zdCBwcm9qZWN0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWJveFwiKTtcclxuY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdFwiKTtcclxuY29uc3QgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHRcIik7XHJcbmNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udGFpbmVyXCIpO1xyXG5cclxuY29uc3QgaW1hZ2Vfd2lkdGggPSA0MTA7XHJcbmxldCBDT1VOVEVSID0gNDEwO1xyXG5jb25zdCBNQVggPSBzY3JvbGxDb250YWluZXIuc2Nyb2xsV2lkdGg7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmV4dFNsaWRlKCkge1xyXG4gIG5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmIChDT1VOVEVSICsgaW1hZ2Vfd2lkdGggPCBNQVggLSBpbWFnZV93aWR0aCAqIDMpIHtcclxuICAgICAgQ09VTlRFUiArPSBpbWFnZV93aWR0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5leHQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHJvamVjdEJveC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtDT1VOVEVSfXB4KWA7XHJcbiAgICBwcmV2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmV2U2xpZGUoKSB7XHJcbiAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKENPVU5URVIgPiBpbWFnZV93aWR0aCAtIGltYWdlX3dpZHRoKSB7XHJcbiAgICAgIENPVU5URVIgLT0gaW1hZ2Vfd2lkdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcmV2LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHByb2plY3RCb3guc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7Q09VTlRFUn1weClgO1xyXG4gICAgbmV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gIH0pO1xyXG59XHJcbiIsImNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1ib3hcIik7XHJcbmNvbnN0IGhlcm9fYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2tncm91bmQtaGVyb1wiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJIZXJvU3BsaW5lKCkge1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaGVyb19iZy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgfSwgMzAwMCk7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhY3RfYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2tncm91bmQtY29udGFjdFwiKTtcclxuY29uc3QgY29udGFjdExvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZ1wiKTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNvbnRhY3RTcGxpbmUoKSB7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBjb250YWN0X2JnLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICBjb250YWN0TG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgfSwgMzAwMCk7XHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvaW1nL1RoZS1PcmItSGFuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2ltZy9DeWJlcm5ldGljLUh1bWFuLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW5rbnV0K0FudGlxdWE6d2dodEAzMDA7NDAwJmZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NzAwJmZhbWlseT1Ob3RvK1NlcmlmOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDsxLDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC0tYmxhY2s6ICMwMDAwMDA7XHJcbiAgLS1kYXJrLWdyZXk6ICMxYTFhMWE7XHJcbiAgLS13aGl0ZTogI2VlZWVlZTtcclxuICAtLWJsdWU6ICMwNjhmZmY7XHJcbiAgLS1wdXJwbGU6ICM0ZTRmZWI7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxufVxyXG5zZWN0aW9uIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtaW4td2lkdGg6IDk4dnc7XHJcbn1cclxubmF2IHtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxZnI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCkgc2F0dXJhdGUoMTYwJSkgY29udHJhc3QoNDUlKSBicmlnaHRuZXNzKDE0MCUpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDE2MCUpIGNvbnRyYXN0KDQ1JSlcclxuICAgIGJyaWdodG5lc3MoMTQwJSk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1pbi13aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbi5sYW5nLW1lbnUgdWwgbGksXHJcbi5zZWxlY3RlZC1sYW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA1cHg7XHJcbiAgbWF4LXdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4ubGFuZy1tZW51IHVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1heC13aWR0aDogODBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLWxhbmcgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1sYW5nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBsaW5lLWhlaWdodDogMjtcclxufVxyXG5cclxuLmVuZyxcclxuLnN3ZSxcclxuLm5vciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcbi5mbGFnLWJveCB7XHJcbiAgbWF4LXdpZHRoOiAyN3B4O1xyXG4gIG1heC1oZWlnaHQ6IDIxcHg7XHJcbn1cclxuXHJcbi5sYW5nLW1lbnUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1heC13aWR0aDogODBweDtcclxufVxyXG5cclxuLnNlY3Rpb25zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNDBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5uYXY6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XHJcbn1cclxuXHJcbi5jb250YWN0LW5hdi1jb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXYtaWNvbiB7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5uYXYtaWNvbjpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxuLmxldHMtdGFsay1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5sZXRzLXRhbGstYnRuOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMSUgMCAxJSAxLjYlO1xyXG59XHJcblxyXG4uY29sOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4udGhyZWUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5yb3cgLnRocmVlIHtcclxuICBwYWRkaW5nOiA4MHB4IDMwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XHJcbiAgY29sb3I6ICNlY2YwZjE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyIC5saW5lIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogOHB4IGF1dG87XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2hhbWJ1cmdlci02LmlzLWFjdGl2ZSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgLW8tdHJhbnNpdGlvbi1kZWxheTogMC42cztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuI2hhbWJ1cmdlci02LmlzLWFjdGl2ZSAubGluZTpudGgtY2hpbGQoMikge1xyXG4gIHdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbiNoYW1idXJnZXItNi5pcy1hY3RpdmUgLmxpbmU6bnRoLWNoaWxkKDEpLFxyXG4jaGFtYnVyZ2VyLTYuaXMtYWN0aXZlIC5saW5lOm50aC1jaGlsZCgzKSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcclxufVxyXG5cclxuI2hhbWJ1cmdlci02LmlzLWFjdGl2ZSAubGluZTpudGgtY2hpbGQoMSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEzcHgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTNweCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEzcHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxM3B4KTtcclxufVxyXG5cclxuI2hhbWJ1cmdlci02LmlzLWFjdGl2ZSAubGluZTpudGgtY2hpbGQoMykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xM3B4KSByb3RhdGUoOTBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzcHgpIHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xM3B4KSByb3RhdGUoOTBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTNweCkgcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuI2hlcm8tc2VjIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmJhY2tncm91bmQtaGVybyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuXHJcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmhlcm8tdHh0LWNvbnRhaW5lciB7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQwJTtcclxuICBsZWZ0OiAzJTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4uaGVyby1oNCB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5oZXJvLWgxIHtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGZvbnQtc2l6ZTogNjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4IHZhcigtLWJsYWNrKTtcclxufVxyXG5cclxuLyoqKioqKiogTG9hZGVyICoqKioqKiovXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcclxuICB9XHJcbn1cclxuLnNwaW5uZXItYm94IHtcclxuICAvKiBDZW50ZXIgdmVydGljYWxseSBhbmQgaG9yaXpvbnRhbGx5ICovXHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5jaXJjbGUtYm9yZGVyIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNjMsIDI0OSwgMjIwKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAwZGVnLFxyXG4gICAgcmdiYSg2MywgMjQ5LCAyMjAsIDAuMSkgMzMlLFxyXG4gICAgcmdiYSg2MywgMjQ5LCAyMjAsIDEpIDEwMCVcclxuICApO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcclxufVxyXG5cclxuLmNpcmNsZS1jb3JlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4ubGFuZy1tZW51IHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiNhYm91dC1zZWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuOGZyIDFmcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4IDAgMCAwO1xyXG59XHJcblxyXG4uYWJvdXQtdGV4dC1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNzUwcHg7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2tpbGxzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2tpbGwtaWNvbnMtYm94IHtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5za2lsbC1pY29ucy1ib3ggc3ZnIHtcclxuICBtYXgtd2lkdGg6IDUycHg7XHJcbiAgbWF4LWhlaWdodDogNTJweDtcclxufVxyXG5cclxuLmltZy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIGltZyB7XHJcbiAgbWF4LXdpZHRoOiA0MThweDtcclxuICBtYXgtaGVpZ2h0OiA2MjRweDtcclxufVxyXG5cclxuI2Fib3V0LWgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XHJcbn1cclxuXHJcbiNhYm91dC1wIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNztcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG4jc2tpbGwtaDIge1xyXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xyXG59XHJcblxyXG4jcG9ydGZvbGlvLXNlYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuI3BvcnRmb2xpby1oMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgdG9wOiA3MHB4O1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4jcG9ydGZvbGlvLWg0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNTBweDtcclxuICBjb2xvcjogIzhiOGI4YjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogOTB2dztcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDBweCAyMHB4IDAgMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnByb2plY3RzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNGZyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxufVxyXG5cclxuLmJveCBpbWcge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5wcm9qZWN0LWJ0bi1ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4ucHJvamVjdC1idG4tYm94IGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxufVxyXG5cclxuLnByb2plY3QtYnRuLWJveCBhOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4uaWNvbi1ib3gge1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUzNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxufVxyXG5cclxuLmljb24tYm94IHN2ZyB7XHJcbiAgZmlsbDogdmFyKC0tZGFyay1ncmV5KTtcclxufVxyXG4uaWNvbi1ib3g6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICB0b3A6IDM1MHB4O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIHRvcDogMzUwcHg7XHJcbiAgcmlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbiNjb250YWN0LXNlYyB7XHJcbiAgLyogbWFyZ2luLXRvcDogLTIwMHB4OyAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2NvbnRhY3QtaDIge1xyXG4gIHotaW5kZXg6IDQwO1xyXG4gIGZvbnQtc2l6ZTogNDJweDtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyJTtcclxuICBsZWZ0OiAxMCU7XHJcbn1cclxuXHJcbiNjb250YWN0LXAge1xyXG4gIHotaW5kZXg6IDM5O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyJTtcclxuICBsZWZ0OiAyJTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgei1pbmRleDogNTU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjAlO1xyXG4gIGxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBnYXA6IDMwcHg7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuMik7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uc2VuZC1idG4ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxufVxyXG5cclxuLnNlbmQtYnRuOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtY29udGFjdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcblxyXG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqIExPQURFUiAqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIEFic29sdXRlIENlbnRlciBTcGlubmVyICovXHJcbi5sb2FkaW5nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgd2lkdGg6IDJlbTtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNDAlO1xyXG59XHJcblxyXG4vKiA6bm90KDpyZXF1aXJlZCkgaGlkZXMgdGhlc2UgcnVsZXMgZnJvbSBJRTkgYW5kIGJlbG93ICovXHJcbi5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpIHtcclxuICAvKiBoaWRlIFwibG9hZGluZy4uLlwiIHRleHQgKi9cclxuICBmb250OiAwLzAgYTtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ubG9hZGluZzpub3QoOnJlcXVpcmVkKTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgd2lkdGg6IDhlbTtcclxuICBoZWlnaHQ6IDhlbTtcclxuICBtYXJnaW4tdG9wOiAtMC41ZW07XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtbW96LWFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1tcy1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtby1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICBhbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43NSkgMS41ZW0gMCAwIDAsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIDEuNWVtIDAgMCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC43NSkgLTEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjUpIC0xLjVlbSAwIDAgMCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC41KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIC0xLjVlbSAwIDAsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAxLjVlbSAwIDAgMCxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAwIDEuNWVtIDAgMCxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgLTEuMWVtIDEuMWVtIDAgMCxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgLTEuNWVtIDAgMCAwLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAtMS4xZW0gLTEuMWVtIDAgMCxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgMCAtMS41ZW0gMCAwLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAxLjFlbSAtMS4xZW0gMCAwO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb24gKi9cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4ucmVhZHktY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIGhlaWdodDogMTIwJTtcclxufVxyXG5cclxuLmxpbmtzLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGhlaWdodDogMTIwJTtcclxufVxyXG5cclxuI2Zvb3Rlci1oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgZm9udC1zaXplOiA2MnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbiNmb290ZXItaDUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4jcXVpY2staDYsXHJcbiNoZWxsby1oNiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjYWNhY2FjO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWNhY2FjO1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5oZWxsby1ib3ggcCB7XHJcbiAgY29sb3I6ICNhY2FjYWM7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnF1aWNrLWxpbmtzLWJveCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTVweDtcclxufVxyXG5cclxuLnF1aWNrLWxpbmtzLWJveCBhIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjYWNhY2FjO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxufVxyXG5cclxuLnF1aWNrLWxpbmtzLWJveCBhOmhvdmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxuZm9vdGVyIHNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0xNSU7XHJcbiAgcmlnaHQ6IDEwJTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4udXAtaWNvbi1ib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUlO1xyXG4gIHJpZ2h0OiAzJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG59XHJcblxyXG4udXAtaWNvbi1ib3g6YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi8qIFJldXNhYmxlIGNsYXNzZXMgKi9cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmlzLW9uIHtcclxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcmllcyAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNjBweCkge1xyXG4gIC5oZXJvLXR4dC1jb250YWluZXIge1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgfVxyXG4gIC5sZWZ0LFxyXG4gIC5yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuaW1nLWNvbnRhaW5lciBpbWcge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMxOHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnNlY3Rpb25zLWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiA1NDA7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAwcHgpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb25zLWNvbnRhaW5lciBhIHtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgfVxyXG5cclxuICAubGV0cy10YWxrLWJ0biB7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1uYXYtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMC41ZnIgMWZyO1xyXG4gICAgcGFkZGluZzogMCA1MHB4O1xyXG4gIH1cclxuICAudGhyZWUge1xyXG4gICAgei1pbmRleDogNTUwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuc3Bpbm5lci1ib3gge1xyXG4gICAgbWFyZ2luLXRvcDogMjUlO1xyXG4gIH1cclxufVxyXG5cclxuLnNob3ctbWVudSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg3NXB4KSB7XHJcbiAgZm9vdGVyIHNwYW4ge1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gIH1cclxuICAuaGVyby1oMSB7XHJcbiAgICBmb250LXNpemU6IDUycHg7XHJcbiAgfVxyXG4gICNhYm91dC1oMSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG5cclxuICAjYWJvdXQtcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gICNza2lsbC1oMiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgLnJlYWR5LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBmb290ZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAuc3Bpbm5lci1ib3gge1xyXG4gICAgbWFyZ2luLXRvcDogMzUlO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LXRleHQtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgfVxyXG5cclxuICAuc2tpbGwtaWNvbnMtYm94IHN2ZyB7XHJcbiAgICBtYXgtd2lkdGg6IDQ2cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0NnB4O1xyXG4gIH1cclxuICAjYWJvdXQtc2VjIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgI2NvbnRhY3QtcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5za2lsbC1pY29ucy1ib3ggc3ZnIHtcclxuICAgIG1heC13aWR0aDogMzZweDtcclxuICAgIG1heC1oZWlnaHQ6IDM2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuaGVyby1oMSB7XHJcbiAgICBmb250LXNpemU6IDUycHg7XHJcbiAgfVxyXG4gIC5zcGlubmVyLWJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0NSU7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtdGV4dC1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICNjb250YWN0LWgyIHtcclxuICAgIGxlZnQ6IDMwJTtcclxuICB9XHJcbiAgI2NvbnRhY3QtcCB7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgfVxyXG4gIGZvcm0ge1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbiAgLnNraWxsLWljb25zLWJveCBzdmcge1xyXG4gICAgbWF4LXdpZHRoOiAyNnB4O1xyXG4gICAgbWF4LWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgLnNwaW5uZXItYm94IHtcclxuICAgIG1hcmdpbi10b3A6IDUwJTtcclxuICB9XHJcblxyXG4gIC5oZXJvLWgxIHtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHlFQUF5RTtFQUN6RTtvQkFDa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtB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SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbmtudXQrQW50aXF1YTp3Z2h0QDMwMDs0MDAmZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs3MDAmZmFtaWx5PU5vdG8rU2VyaWY6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzEsMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1ibGFjazogIzAwMDAwMDtcXHJcXG4gIC0tZGFyay1ncmV5OiAjMWExYTFhO1xcclxcbiAgLS13aGl0ZTogI2VlZWVlZTtcXHJcXG4gIC0tYmx1ZTogIzA2OGZmZjtcXHJcXG4gIC0tcHVycGxlOiAjNGU0ZmViO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuc2VjdGlvbiB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1pbi13aWR0aDogOTh2dztcXHJcXG59XFxyXFxubmF2IHtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxZnI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDE2MCUpIGNvbnRyYXN0KDQ1JSkgYnJpZ2h0bmVzcygxNDAlKTtcXHJcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDE2MCUpIGNvbnRyYXN0KDQ1JSlcXHJcXG4gICAgYnJpZ2h0bmVzcygxNDAlKTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5sYW5nLW1lbnUgdWwgbGksXFxyXFxuLnNlbGVjdGVkLWxhbmcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIG1heC13aWR0aDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmctbWVudSB1bCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBtYXgtd2lkdGg6IDgwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDEzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQtbGFuZyBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZC1sYW5nIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxufVxcclxcblxcclxcbnVsIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBsaW5lLWhlaWdodDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmVuZyxcXHJcXG4uc3dlLFxcclxcbi5ub3Ige1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsYWctYm94IHtcXHJcXG4gIG1heC13aWR0aDogMjdweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDIxcHg7XFxyXFxufVxcclxcblxcclxcbi5sYW5nLW1lbnUge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBtYXgtd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9ucy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi5uYXY6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1uYXYtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaWNvbiB7XFxyXFxuICB3aWR0aDogMjhweDtcXHJcXG4gIGhlaWdodDogMjhweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWljb246aG92ZXIge1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHMtdGFsay1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0cy10YWxrLWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgbWFyZ2luOiAxJSAwIDElIDEuNiU7XFxyXFxufVxcclxcblxcclxcbi5jb2w6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRocmVlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyAudGhyZWUge1xcclxcbiAgcGFkZGluZzogODBweCAzMHB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XFxyXFxuICBjb2xvcjogI2VjZjBmMTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlciAubGluZSB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiA4cHggYXV0bztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jaGFtYnVyZ2VyLTYuaXMtYWN0aXZlIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xcclxcbiAgLW8tdHJhbnNpdGlvbi1kZWxheTogMC42cztcXHJcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbiNoYW1idXJnZXItNi5pcy1hY3RpdmUgLmxpbmU6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIHdpZHRoOiAwcHg7XFxyXFxufVxcclxcblxcclxcbiNoYW1idXJnZXItNi5pcy1hY3RpdmUgLmxpbmU6bnRoLWNoaWxkKDEpLFxcclxcbiNoYW1idXJnZXItNi5pcy1hY3RpdmUgLmxpbmU6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4zcztcXHJcXG4gIC1vLXRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XFxyXFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4jaGFtYnVyZ2VyLTYuaXMtYWN0aXZlIC5saW5lOm50aC1jaGlsZCgxKSB7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxM3B4KTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTNweCk7XFxyXFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTNweCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTNweCk7XFxyXFxufVxcclxcblxcclxcbiNoYW1idXJnZXItNi5pcy1hY3RpdmUgLmxpbmU6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xM3B4KSByb3RhdGUoOTBkZWcpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTNweCkgcm90YXRlKDkwZGVnKTtcXHJcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTNweCkgcm90YXRlKDkwZGVnKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTNweCkgcm90YXRlKDkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8tc2VjIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQtaGVybyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaW1nL1RoZS1PcmItSGFuZC5qcGdcXFwiKTtcXHJcXG5cXHJcXG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLXR4dC1jb250YWluZXIge1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA0MCU7XFxyXFxuICBsZWZ0OiAzJTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWg0IHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8taDEge1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGZvbnQtc2l6ZTogNjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5uYW1lIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKiBMb2FkZXIgKioqKioqKi9cXHJcXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uc3Bpbm5lci1ib3gge1xcclxcbiAgLyogQ2VudGVyIHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseSAqL1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgbWFyZ2luLXRvcDogMTUlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlLWJvcmRlciB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYig2MywgMjQ5LCAyMjApO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAwZGVnLFxcclxcbiAgICByZ2JhKDYzLCAyNDksIDIyMCwgMC4xKSAzMyUsXFxyXFxuICAgIHJnYmEoNjMsIDI0OSwgMjIwLCAxKSAxMDAlXFxyXFxuICApO1xcclxcbiAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIDBzIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlLWNvcmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcbi5sYW5nLW1lbnUge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtc2VjIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxyXFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuOGZyIDFmcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMzBweCAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQtY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogNzUwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5za2lsbHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxsLWljb25zLWJveCB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyNXB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxsLWljb25zLWJveCBzdmcge1xcclxcbiAgbWF4LXdpZHRoOiA1MnB4O1xcclxcbiAgbWF4LWhlaWdodDogNTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciBpbWcge1xcclxcbiAgbWF4LXdpZHRoOiA0MThweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDYyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtcCB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBsaW5lLWhlaWdodDogMS43O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NraWxsLWgyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcnRmb2xpby1zZWMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcG9ydGZvbGlvLWgzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICB0b3A6IDcwcHg7XFxyXFxuICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9ydGZvbGlvLWg0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTUwcHg7XFxyXFxuICBjb2xvcjogIzhiOGI4YjtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNTBweDtcXHJcXG4gIG1heC13aWR0aDogOTB2dztcXHJcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1ib3gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwcHggMjBweCAwIDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJveCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMC40ZnI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5ib3ggaW1nIHtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuLnByb2plY3QtYnRuLWJveCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idG4tYm94IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idG4tYm94IGE6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1ib3gge1xcclxcbiAgei1pbmRleDogMjA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTM0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5pY29uLWJveCBzdmcge1xcclxcbiAgZmlsbDogdmFyKC0tZGFyay1ncmV5KTtcXHJcXG59XFxyXFxuLmljb24tYm94OmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQge1xcclxcbiAgdG9wOiAzNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0IHtcXHJcXG4gIHRvcDogMzUwcHg7XFxyXFxuICByaWdodDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3Qtc2VjIHtcXHJcXG4gIC8qIG1hcmdpbi10b3A6IC0yMDBweDsgKi9cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtaDIge1xcclxcbiAgei1pbmRleDogNDA7XFxyXFxuICBmb250LXNpemU6IDQycHg7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIlO1xcclxcbiAgbGVmdDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1wIHtcXHJcXG4gIHotaW5kZXg6IDM5O1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTIlO1xcclxcbiAgbGVmdDogMiU7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgei1pbmRleDogNTU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIwJTtcXHJcXG4gIGxlZnQ6IDIlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsdWUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjIpO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbmQtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbmQtYnRuOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQtY29udGFjdCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvc3JjL2ltZy9DeWJlcm5ldGljLUh1bWFuLmpwZ1xcXCIpO1xcclxcblxcclxcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogKioqKioqKioqKioqKioqKioqKiogTE9BREVSICoqKioqKioqKioqKioqKioqKiogKi9cXHJcXG4vKiBBYnNvbHV0ZSBDZW50ZXIgU3Bpbm5lciAqL1xcclxcbi5sb2FkaW5nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogMmVtO1xcclxcbiAgd2lkdGg6IDJlbTtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA0MCU7XFxyXFxufVxcclxcblxcclxcbi8qIDpub3QoOnJlcXVpcmVkKSBoaWRlcyB0aGVzZSBydWxlcyBmcm9tIElFOSBhbmQgYmVsb3cgKi9cXHJcXG4ubG9hZGluZzpub3QoOnJlcXVpcmVkKSB7XFxyXFxuICAvKiBoaWRlIFxcXCJsb2FkaW5nLi4uXFxcIiB0ZXh0ICovXFxyXFxuICBmb250OiAwLzAgYTtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHRleHQtc2hhZG93OiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB3aWR0aDogOGVtO1xcclxcbiAgaGVpZ2h0OiA4ZW07XFxyXFxuICBtYXJnaW4tdG9wOiAtMC41ZW07XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcclxcbiAgLW1vei1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcXHJcXG4gIC1tcy1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcXHJcXG4gIC1vLWFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcclxcbiAgYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjc1KSAxLjVlbSAwIDAgMCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjc1KSAxLjFlbSAxLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMCAxLjVlbSAwIDAsXFxyXFxuICAgIHJnYmEoMCwgMCwgMCwgMC43NSkgLTEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjUpIC0xLjVlbSAwIDAgMCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjUpIC0xLjFlbSAtMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAgLTEuNWVtIDAgMCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjc1KSAxLjFlbSAtMS4xZW0gMCAwO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAxLjVlbSAwIDAgMCxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAxLjFlbSAxLjFlbSAwIDAsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgMCAxLjVlbSAwIDAsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgLTEuMWVtIDEuMWVtIDAgMCxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAtMS41ZW0gMCAwIDAsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgLTEuMWVtIC0xLjFlbSAwIDAsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgMCAtMS41ZW0gMCAwLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpIDEuMWVtIC0xLjFlbSAwIDA7XFxyXFxufVxcclxcblxcclxcbi8qIEFuaW1hdGlvbiAqL1xcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5ALW1vei1rZXlmcmFtZXMgc3Bpbm5lciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQC1vLWtleWZyYW1lcyBzcGlubmVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xcclxcbiAgMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnJlYWR5LWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIHBhZGRpbmc6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDEyMCU7XFxyXFxufVxcclxcblxcclxcbi5saW5rcy1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAxMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyLWgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBmb250LXNpemU6IDYycHg7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyLWg1IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4jcXVpY2staDYsXFxyXFxuI2hlbGxvLWg2IHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGNvbG9yOiAjYWNhY2FjO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhY2FjYWM7XFxyXFxuICBtYXgtd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVsbG8tYm94IHAge1xcclxcbiAgY29sb3I6ICNhY2FjYWM7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucXVpY2stbGlua3MtYm94IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5xdWljay1saW5rcy1ib3ggYSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogI2FjYWNhYztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLnF1aWNrLWxpbmtzLWJveCBhOmhvdmVyIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHNwYW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAtMTUlO1xcclxcbiAgcmlnaHQ6IDEwJTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi51cC1pY29uLWJveCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDUlO1xcclxcbiAgcmlnaHQ6IDMlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4udXAtaWNvbi1ib3g6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogKioqKioqKioqKioqKioqKioqKioqICovXFxyXFxuXFxyXFxuLyogUmV1c2FibGUgY2xhc3NlcyAqL1xcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlzLW9uIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi8qIE1lZGlhIFF1ZXJpZXMgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTA2MHB4KSB7XFxyXFxuICAuaGVyby10eHQtY29udGFpbmVyIHtcXHJcXG4gICAgdG9wOiA0MCU7XFxyXFxuICB9XFxyXFxuICAubGVmdCxcXHJcXG4gIC5yaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuaW1nLWNvbnRhaW5lciBpbWcge1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMThweDtcXHJcXG4gICAgbWF4LWhlaWdodDogNDI0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDUwcHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG4gIC5zZWN0aW9ucy1jb250YWluZXIge1xcclxcbiAgICB6LWluZGV4OiA1NDA7XFxyXFxuICAgIHRvcDogMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMjAwcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlY3Rpb25zLWNvbnRhaW5lciBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sZXRzLXRhbGstYnRuIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMC41ZnIgMWZyO1xcclxcbiAgICBwYWRkaW5nOiAwIDUwcHg7XFxyXFxuICB9XFxyXFxuICAudGhyZWUge1xcclxcbiAgICB6LWluZGV4OiA1NTA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNwaW5uZXItYm94IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1tZW51IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NzVweCkge1xcclxcbiAgZm9vdGVyIHNwYW4ge1xcclxcbiAgICByaWdodDogNSU7XFxyXFxuICB9XFxyXFxuICAuaGVyby1oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTJweDtcXHJcXG4gIH1cXHJcXG4gICNhYm91dC1oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNhYm91dC1wIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgfVxcclxcbiAgI3NraWxsLWgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmltZy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gIC5yZWFkeS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcclxcbiAgLnNwaW5uZXItYm94IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LXRleHQtY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5za2lsbC1pY29ucy1ib3ggc3ZnIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NnB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA0NnB4O1xcclxcbiAgfVxcclxcbiAgI2Fib3V0LXNlYyB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcclxcbiAgI2NvbnRhY3QtcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIH1cXHJcXG4gIC5za2lsbC1pY29ucy1ib3ggc3ZnIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNnB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAzNnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gIC5oZXJvLWgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA1MnB4O1xcclxcbiAgfVxcclxcbiAgLnNwaW5uZXItYm94IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LXRleHQtY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxyXFxuICAjY29udGFjdC1oMiB7XFxyXFxuICAgIGxlZnQ6IDMwJTtcXHJcXG4gIH1cXHJcXG4gICNjb250YWN0LXAge1xcclxcbiAgICBsZWZ0OiAxMCU7XFxyXFxuICB9XFxyXFxuICBmb3JtIHtcXHJcXG4gICAgbGVmdDogMTAlO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICB9XFxyXFxuICAuc2tpbGwtaWNvbnMtYm94IHN2ZyB7XFxyXFxuICAgIG1heC13aWR0aDogMjZweDtcXHJcXG4gICAgbWF4LWhlaWdodDogMjZweDtcXHJcXG4gIH1cXHJcXG4gIC5zcGlubmVyLWJveCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZXJvLWgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKlxyXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XHJcbiAgdmFyIGxpc3QgPSBbXTtcclxuXHJcbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfSkuam9pbihcIlwiKTtcclxuICB9O1xyXG5cclxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XHJcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XHJcbiAgICB9XHJcbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG4gICAgaWYgKGRlZHVwZSkge1xyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xyXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcclxuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xyXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZWRpYSkge1xyXG4gICAgICAgIGlmICghaXRlbVsyXSkge1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1cHBvcnRzKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XHJcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gbGlzdDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xyXG4gIGlmICghb3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IHt9O1xyXG4gIH1cclxuICBpZiAoIXVybCkge1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xyXG5cclxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cclxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcclxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XHJcbiAgfVxyXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcclxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XHJcbiAgfVxyXG5cclxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XHJcbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcclxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XHJcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcclxuICB9XHJcbiAgcmV0dXJuIHVybDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XHJcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xyXG4gIGlmICghY3NzTWFwcGluZykge1xyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XHJcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XHJcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcclxuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcclxuICB9XHJcbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xyXG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIHN0eWxlc0luRE9NID0gW107XHJcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICB2YXIgcmVzdWx0ID0gLTE7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcclxuICAgICAgcmVzdWx0ID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcclxuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xyXG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XHJcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xyXG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XHJcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcclxuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgdmFyIG9iaiA9IHtcclxuICAgICAgY3NzOiBpdGVtWzFdLFxyXG4gICAgICBtZWRpYTogaXRlbVsyXSxcclxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxyXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcclxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cclxuICAgIH07XHJcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xyXG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xyXG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xyXG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXHJcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcclxuICAgICAgICByZWZlcmVuY2VzOiAxXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcclxuICB9XHJcbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XHJcbiAgYXBpLnVwZGF0ZShvYmopO1xyXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcclxuICAgIGlmIChuZXdPYmopIHtcclxuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcGkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gdXBkYXRlcjtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgbGlzdCA9IGxpc3QgfHwgW107XHJcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XHJcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xyXG4gICAgfVxyXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XHJcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XHJcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcclxuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcclxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xyXG4gIH07XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgbWVtbyA9IHt9O1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcclxuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG5cclxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXHJcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcclxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XHJcbiAgfVxyXG4gIHJldHVybiBtZW1vW3RhcmdldF07XHJcbn1cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XHJcbiAgaWYgKCF0YXJnZXQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XHJcbiAgfVxyXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XHJcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XHJcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xyXG4gIGlmIChub25jZSkge1xyXG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcclxuICB2YXIgY3NzID0gXCJcIjtcclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xyXG4gIH1cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcclxuICB9XHJcbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xyXG4gIH1cclxuICBjc3MgKz0gb2JqLmNzcztcclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcclxuICB9XHJcblxyXG4gIC8vIEZvciBvbGQgSUVcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXHJcbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxufVxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXHJcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcbn1cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xyXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXHJcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cclxuICAgIH07XHJcbiAgfVxyXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XHJcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xyXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuICB9IGVsc2Uge1xyXG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJMYW5nTGlzdCwgcmVuZGVySGFtYnVyZ2VyLCBoaWRlTmF2IH0gZnJvbSBcIi4vbmF2LmpzXCI7XHJcbmltcG9ydCB7IHJlbmRlckhlcm9TcGxpbmUsIHJlbmRlckNvbnRhY3RTcGxpbmUgfSBmcm9tIFwiLi9zcGxpbmUuanNcIjtcclxuaW1wb3J0IHsgbmV4dFNsaWRlLCBwcmV2U2xpZGUgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xyXG5pbXBvcnQgeyBmb3JtQWN0aW9uIH0gZnJvbSBcIi4vZm9ybVwiO1xyXG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tIFwiLi9sYW5ndWFnZS5qc1wiO1xyXG4vLyBMYW5ndWFnZS1zZWxlY3Rpb25cclxuY29uc3Qgc2VsZWN0ZWRMYW5nQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZC1sYW5nXCIpO1xyXG5zZWxlY3RlZExhbmdCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckxhbmdMaXN0KTtcclxuY29uc3QgbGFuZ19vcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYW5nLW9wdFwiKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbGFuZ19vcHRpb25zLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRyYW5zbGF0ZShib3guaWQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxucmVuZGVySGFtYnVyZ2VyKCk7XHJcbi8vIHJlbmRlckhlcm9TcGxpbmUoKTtcclxucmVuZGVyQ29udGFjdFNwbGluZSgpO1xyXG5oaWRlTmF2KCk7XHJcbm5leHRTbGlkZSgpO1xyXG5wcmV2U2xpZGUoKTtcclxuZm9ybUFjdGlvbigpO1xyXG5cclxuY29uc3QgaGVyb19zZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZXJvLXNlY1wiKTtcclxuY29uc3QgYWJvdXRfc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtcFwiKTtcclxuY29uc3QgcG9ydGZvbGlvX3NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcnRmb2xpby1oNFwiKTtcclxuY29uc3QgY29udGFjdF9zZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LXBcIik7XHJcblxyXG5jb25zdCBob21lX25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcclxuY29uc3QgYWJvdXRfbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dFwiKTtcclxuY29uc3QgcG9ydGZvbGlvX25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvd2Nhc2VcIik7XHJcbmNvbnN0IGNvbnRhY3RfbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xyXG5cclxuY29uc3QgbGV0c1RhbGtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxldHMtdGFsay1idG5cIik7XHJcbmNvbnN0IHNjcm9sbFVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cC1pY29uLWJveFwiKTtcclxuXHJcbmxldHNUYWxrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29udGFjdF9zZWN0aW9uLnNjcm9sbEludG9WaWV3KCk7XHJcbn0pO1xyXG5cclxuc2Nyb2xsVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBoZXJvX3NlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBlbGVtZW50SW5WaWV3cG9ydChlbCkge1xyXG4gIGxldCB0b3AgPSBlbC5vZmZzZXRUb3A7XHJcbiAgbGV0IGxlZnQgPSBlbC5vZmZzZXRMZWZ0O1xyXG4gIGxldCB3aWR0aCA9IGVsLm9mZnNldFdpZHRoO1xyXG4gIGxldCBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gIHdoaWxlIChlbC5vZmZzZXRQYXJlbnQpIHtcclxuICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgdG9wICs9IGVsLm9mZnNldFRvcDtcclxuICAgIGxlZnQgKz0gZWwub2Zmc2V0TGVmdDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICB0b3AgPj0gd2luZG93LnBhZ2VZT2Zmc2V0ICYmXHJcbiAgICBsZWZ0ID49IHdpbmRvdy5wYWdlWE9mZnNldCAmJlxyXG4gICAgdG9wICsgaGVpZ2h0IDw9IHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodCAmJlxyXG4gICAgbGVmdCArIHdpZHRoIDw9IHdpbmRvdy5wYWdlWE9mZnNldCArIHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gIGlmIChlbGVtZW50SW5WaWV3cG9ydChoZXJvX3NlY3Rpb24pKSB7XHJcbiAgICBob21lX25hdi5jbGFzc0xpc3QuYWRkKFwiaXMtb25cIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhvbWVfbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vblwiKTtcclxuICB9XHJcblxyXG4gIGlmIChlbGVtZW50SW5WaWV3cG9ydChhYm91dF9zZWN0aW9uKSkge1xyXG4gICAgYWJvdXRfbmF2LmNsYXNzTGlzdC5hZGQoXCJpcy1vblwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYWJvdXRfbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vblwiKTtcclxuICB9XHJcblxyXG4gIGlmIChlbGVtZW50SW5WaWV3cG9ydChwb3J0Zm9saW9fc2VjdGlvbikpIHtcclxuICAgIHBvcnRmb2xpb19uYXYuY2xhc3NMaXN0LmFkZChcImlzLW9uXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwb3J0Zm9saW9fbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vblwiKTtcclxuICB9XHJcblxyXG4gIGlmIChlbGVtZW50SW5WaWV3cG9ydChjb250YWN0X3NlY3Rpb24pKSB7XHJcbiAgICBjb250YWN0X25hdi5jbGFzc0xpc3QuYWRkKFwiaXMtb25cIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRhY3RfbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vblwiKTtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvcm1BY3Rpb24iLCJhY3Rpb24iLCJob21lX25hdiIsImFib3V0X25hdiIsInBvcnRmb2xpb19uYXYiLCJjb250YWN0X25hdiIsImxldHNUYWxrX25hdiIsImhlcm9fYm94IiwiYWJvdXRfaDEiLCJnZXRFbGVtZW50QnlJZCIsImFib3V0X3AiLCJhYm91dF9za2lsbHNfaDIiLCJzaG93Y2FzZV9oMyIsInNob3djYXNlX2g0Iiwic2hvd2Nhc2Vfdmlld19saXZlIiwicXVlcnlTZWxlY3RvckFsbCIsInNob3djYXNlX3NlZV9jb2RlIiwiY29udGFjdF9oMiIsImNvbnRhY3RfcCIsImNvbnRhY3RfZm9ybV9uYW1lIiwiY29udGFjdF9mb3JtX3Bob25lIiwiY29udGFjdF9mb3JtX2VtYWlsIiwiY29udGFjdF9mb3JtX3NlbmQiLCJmb290ZXJfaDUiLCJmb290ZXJfaDEiLCJmb290ZXJfcXVpY2tMaW5rc19oNiIsImZvb3Rlcl9ob21lX25hdiIsImZvb3Rlcl9hYm91dF9uYXYiLCJmb290ZXJfcG9ydGZvbGlvX25hdiIsImZvb3Rlcl9zYXlIZWxsb19oNiIsIkVORyIsIlNXRSIsIk5PUiIsInRyYW5zbGF0ZSIsImxhbmciLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsImZvckVhY2giLCJidG4iLCJzdHlsZSIsImZvbnRTaXplIiwicGxhY2Vob2xkZXIiLCJwYWRkaW5nUmlnaHQiLCJtZW51Q29udGFpbmVyIiwic2VsZWN0ZWRMYW5nQm94IiwibGFuZ0xpc3QiLCJsYW5nT3B0aW9ucyIsInNlY3Rpb25zTmF2Q29udGFpbmVyIiwic2VjdGlvbnMiLCJoYW1idXJnZXIiLCJoaWRlTmF2Iiwic2VjdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJsZXRzVGFsa0J0biIsInJlbmRlckxhbmdMaXN0IiwicmVuZGVyTGFuZ1NlbGVjdGVkIiwiZWwiLCJhZGQiLCJyZW5kZXJIYW1idXJnZXIiLCJwcm9qZWN0Qm94IiwicHJldiIsIm5leHQiLCJzY3JvbGxDb250YWluZXIiLCJpbWFnZV93aWR0aCIsIkNPVU5URVIiLCJNQVgiLCJzY3JvbGxXaWR0aCIsIm5leHRTbGlkZSIsInRyYW5zZm9ybSIsInJlbW92ZSIsInByZXZTbGlkZSIsImxvYWRlciIsImhlcm9fYmciLCJyZW5kZXJIZXJvU3BsaW5lIiwic2V0VGltZW91dCIsImNvbnRhY3RfYmciLCJjb250YWN0TG9hZGVyIiwicmVuZGVyQ29udGFjdFNwbGluZSIsImxhbmdfb3B0aW9ucyIsIndpbmRvdyIsImJveCIsImlkIiwiaGVyb19zZWN0aW9uIiwiYWJvdXRfc2VjdGlvbiIsInBvcnRmb2xpb19zZWN0aW9uIiwiY29udGFjdF9zZWN0aW9uIiwic2Nyb2xsVXBCdG4iLCJzY3JvbGxJbnRvVmlldyIsImVsZW1lbnRJblZpZXdwb3J0IiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0UGFyZW50IiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=
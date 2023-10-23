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
  footer_sayHello_h6: "Say Hello!",
};

const SWE = {
  home_nav: "Hem",
  about_nav: "Om",
  portfolio_nav: "Projekt",
  contact_nav: "Kontakt",
  letsTalk_nav: "LÅT OSS PRATA",
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
  footer_sayHello_h6: "Säg Hej!",
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
  footer_sayHello_h6: "Si Hei!",
};

export function translate(lang) {
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
    showcase_view_live.forEach((btn) => {
      btn.textContent = ENG.showcase_view_live;
    });
    showcase_see_code.forEach((btn) => {
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
    footer_about_nav.textContent = ENG.footer_about_nav;
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
    showcase_view_live.forEach((btn) => {
      btn.textContent = SWE.showcase_view_live;
    });
    showcase_see_code.forEach((btn) => {
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
    footer_about_nav.textContent = SWE.footer_about_nav;
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
    showcase_view_live.forEach((btn) => {
      btn.textContent = NOR.showcase_view_live;
    });
    showcase_see_code.forEach((btn) => {
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
    footer_about_nav.textContent = NOR.footer_about_nav;
    footer_portfolio_nav.textContent = NOR.footer_portfolio_nav;
    footer_sayHello_h6.textContent = NOR.footer_sayHello_h6;
  }
}

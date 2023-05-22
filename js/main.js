"use strict";

// obtener la referencia a los elementos de video
const videoMobile = document.getElementById("videoMobile");
const videoDesktop = document.getElementById("videoDesktop");

// definir la media query
const mediaQuery = window.matchMedia("(min-width: 700px)");

// función de cambio de video
const changeVideo = () => {
  if (mediaQuery.matches) {
    // si la pantalla es de escritorio, ocultar el video móvil y mostrar el video de escritorio
    videoMobile.style.display = "none";
    videoDesktop.style.display = "block";
  } else {
    // si la pantalla es móvil, ocultar el video de escritorio y mostrar el video móvil
    videoDesktop.style.display = "none";
    videoMobile.style.display = "block";
  }
};

// llamar a la función de cambio de video en la carga inicial de la página y en cada cambio en la media query
changeVideo();
mediaQuery.addListener(changeVideo);

// scroll suave en la pagina

window.addEventListener("scroll", function () {
  var header = document.querySelector(".topheader");
  var open = document.querySelector(".open-menu");
  header.classList.toggle("abajo", window.scrollY > 0);
  open.classList.toggle("abajo", window.scrollY > 0);
});

// Ver CV en PDF

document.getElementById("btn").addEventListener("click", function () {
  var pdfUrl =
    "https://raw.githubusercontent.com/crisbric/portfolio/main/documento/CV-Cristopher-Briceno-2023.pdf";
  window.open(pdfUrl, "_blank");
});

// Slider proyectos

const swiper = new Swiper(".swiperMaster", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // effect: 'cards',
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // slidesPerView: 3,
  // spaceBetween: 15,
  // slidesPerGroup: 3,

  // Bullets
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

// Slider Experiencia

const swiperExp = new Swiper(".swiperMasterExp", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // effect: "cards",

  breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    720: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40,
    },
  },

  // slidesPerView: 3,
  // spaceBetween: 15,
  // slidesPerGroup: 3,

  // Bullets
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

// Slider Educacion

const swiperEdu = new Swiper(".swiperMasterEdu", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // effect: "cards",

  // effect: "flip",
  // flipEffect: {
  //   slideShadows: false,
  // },

  // slidesPerView: 3,
  // spaceBetween: 15,
  // slidesPerGroup: 3,

  breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    720: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40,
    },
  },

  // Bullets
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

// Carrousel de experiencia laboral ------------------------------------

const grandeExp = document.querySelector(".grandeExp");
const puntoExp = document.querySelectorAll(".puntoExp");

puntoExp.forEach((cadaPunto, i) => {
  puntoExp[i].addEventListener("click", () => {
    let pos = i;
    let operacion = pos * -33.33;

    grandeExp.style.transform = `translateX(${operacion}%)`;

    puntoExp.forEach((cadaPunto, i) => {
      puntoExp[i].classList.remove("activo");
    });

    puntoExp[i].classList.add("activo");
  });
});

// Carrousel de educacion -----------------------------------------------

const grandeEdu = document.querySelector(".grandeEdu");
const puntoEdu = document.querySelectorAll(".puntoEdu");

puntoEdu.forEach((cadaPunto, i) => {
  puntoEdu[i].addEventListener("click", () => {
    let pos = i;
    let operacion = pos * -33.33;

    grandeEdu.style.transform = `translateX(${operacion}%)`;

    puntoEdu.forEach((cadaPunto, i) => {
      puntoEdu[i].classList.remove("activo");
    });

    puntoEdu[i].classList.add("activo");
  });
});

// Marcado de numero de telefono ------------------------------------------

function llamar() {
  window.open("tel:+34641820009");
}

// Envio de correo electronico ------------------------------------------

function enviarCorreo() {
  window.open("mailto:cristopherabm@gmail.com");
}

// Enviar whatsapp ------------------------------------------------------

function enviarWhatsapp() {
  const telefono = "+50230944978";
  const mensaje = "Hola! Te saludo de: ";

  const enlaceWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(
    mensaje
  )}`;
  window.open(enlaceWhatsapp);
}

// Funciones para subir o bajar en la pantalla ---------------------------

// Funcion para detectar que la pagina ha sido desplazada
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-to-top").style.display = "block";
    document.getElementById("scroll-to-bottom").style.display = "none";
  } else {
    document.getElementById("scroll-to-top").style.display = "none";
    document.getElementById("scroll-to-bottom").style.display = "block";
  }
}

// Función para desplazar hacia abajo
function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

//Funcion para desplazar hacia arriba

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

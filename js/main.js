'use strict'

// scroll suave en la pagina

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0)
});

// Ver CV en PDF

document.getElementById("btn").addEventListener("click", function () {
  var pdfUrl = "https://portfoliobric.000webhostapp.com/documento/CV-Cristopher-Briceno-2023.pdf";
  window.open(pdfUrl, "_blank");
});

// Carrousel de proyectos -----------------------------------------------

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

//cuando click en punto
//saber la pos del punto
//aplicar un transform translat en eje x al grande 
//quitar clase activo de todos los puntos
//añadir clase activo al punto que hemos hecho click


punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener('click', () => {

    let pos = i
    let operacion = pos * -50

    grande.style.transform = `translateX(${operacion}%)`

    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove('activo')
    })

    punto[i].classList.add('activo')


  })
});


// Carrousel de experiencia laboral ------------------------------------

const grandeExp = document.querySelector('.grandeExp')
const puntoExp = document.querySelectorAll('.puntoExp')

puntoExp.forEach((cadaPunto, i) => {
  puntoExp[i].addEventListener('click', () => {

    let pos = i
    let operacion = pos * -33.33

    grandeExp.style.transform = `translateX(${operacion}%)`

    puntoExp.forEach((cadaPunto, i) => {
      puntoExp[i].classList.remove('activo')
    })

    puntoExp[i].classList.add('activo')
  })
});

// Carrousel de educacion -----------------------------------------------

const grandeEdu = document.querySelector('.grandeEdu')
const puntoEdu = document.querySelectorAll('.puntoEdu')

puntoEdu.forEach((cadaPunto, i) => {
  puntoEdu[i].addEventListener('click', () => {

    let pos = i
    let operacion = pos * -33.33

    grandeEdu.style.transform = `translateX(${operacion}%)`

    puntoEdu.forEach((cadaPunto, i) => {
      puntoEdu[i].classList.remove('activo')
    })

    puntoEdu[i].classList.add('activo')
  })
});

// Marcado de numero de telefono ------------------------------------------

function llamar() {
  window.open('tel:+34641820009');
}

// Envio de correo electronico ------------------------------------------

function enviarCorreo() {
  window.open('mailto:cristopherabm@gmail.com');
}

// Enviar whatsapp ------------------------------------------------------

function enviarWhatsapp() {
  const telefono = '+50230944978';
  const mensaje = 'Hola! Te saludo de: ';

  const enlaceWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(enlaceWhatsapp);
}

// Funciones para subir o bajar en la pantalla ---------------------------

// Funcion para detectar que la pagina ha sido desplazada
function scrollFunction() {
    if (window.screen.width <= 1500 || document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scroll-to-top").style.display = "block";
      document.getElementById("scroll-to-bottom").style.display = "none"
    } else {
      document.getElementById("scroll-to-top").style.display = "none";
      document.getElementById("scroll-to-bottom").style.display = "block";
    }  
  
}

// Función para desplazar hacia abajo
function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}

//Funcion para desplazar hacia arriba

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
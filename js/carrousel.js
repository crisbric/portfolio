const grande = document.querySelector('grande')
const punto = document.querySelectorAll('grande')

//cuando click en punto
  //saber la pos del punto
  //aplicar un transform translat en eje x al grande 
  //quitar clase activo de todos los puntos
  //añadir clase activo al punto que hemos hecho click


  punto.array.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click',()=>{

      let pos = i     
      let operacion = pos * -50

      grande.style.transform = `translateX(${operacion}%)`


    })
  });
/* se obtienen los id necesarios para localizar
   los elementos de la vista */

function seleccionW(){
    let aux = document.getElementById('cerouno')    
    seleccion(aux)
}

function seleccionF(){
    let aux = document.getElementById('facebook')
    seleccion(aux)
}

function seleccionI(){
    let aux = document.getElementById('instagram')
    seleccion(aux)
}

function seleccionL(){
    let aux = document.getElementById('linkedin')
    seleccion(aux)
}

/* 
    mediante una funcion se lleva adelante una rutina
    determinada según el id obtenido:
    se muestra una ventana con el mensaje de título del ancla <a> 
    y se setea la url (href) a la que debería enlazar
*/

function seleccion(aux){
    let enlace = aux.getElementsByTagName('a')[0]
    alert(enlace.title);
    switch (aux.id) {
      case "cerouno":
            enlace.href = "https://cerouno.com.ar";
        break;
      case "facebook":
            enlace.href = "https://www.facebook.com/cerounook/";
        break;
      case "instagram":
            enlace.href = "https://www.instagram.com/cerounook/";
        break;
      case "linkedin":            
            enlace.href = "https://www.linkedin.com/company/cerounook";
        break;
      default:
            enlace.href = "#";
        break;
    }
}

function contacto(){    
    alert("Lo contactaré en breve!")
    setInterval(()=> {
        contador()
    }, 1000)
}

/* Se crea una función que se dispara con el click para mostrar un mensaje emergente y
una funcion de intervalo para llamar a la funcion contador() cada segundo */

function contador(){
    const countDownDate = new Date("July 1, 2023 00:00:00").getTime();
    const hoy = new Date().getTime();
    const distancia = countDownDate - hoy;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);    
    
    let conteo = `Le recuerdo que quedan: ${dias} días, ${horas} horas, ${minutos} minutos, y ${segundos} segundos hasta el 01 de julio de 2023!`;

    let parrafo = document.getElementById('cuenta')
    parrafo.innerHTML = conteo
}

/* La función countdown() utiliza el objeto Date de JavaScript para obtener 
la fecha actual y la fecha del 1 de julio del 2023 a las 00:00.
Luego, se calcula la distancia entre ambas fechas en milisegundos 
y se convierte en días, horas, minutos y segundos.
Por último se crea una variable en la que se guarda un literal que se va a 
imprimir en la página */
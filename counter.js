'use strict' 

// Selecciona el elemento con la clase 'counter-number', y lo almacena en una variable
const counter = document.querySelector('.counter-number');

// Selecciona el elemento con el id 'buttons' y lo almacena en una variable
const btns = document.getElementById('buttons'); 

// Inicia el marcador en cero
let marker = 0;

// Define la función 'updateCounter' que se ejecutará cuando se haga clic en un botón
function updateCounter(event) {

    // IMPORTANTE: Obtiene el ID del boton que fue clicado y lo almacena en la variable 'clickedButtonId'
    const clickedButtonId = event.target.id;

    //Comprueba que boton fue clicado
    if(clickedButtonId === 'decrement') {
        marker = marker - 1;

    } else if (clickedButtonId === 'increment') {
        marker = marker + 1;

    } else if (clickedButtonId === 'reset') {
        marker = 0;
    }

    // Actualiza el contenido del elemento 'counter' con el valor actual del marcador
    counter.textContent = marker;
}

// Agrega un evento click al elemento 'btns' que escucha el evento 'click' y llama a la función 'updateCounter'
btns.addEventListener('click', updateCounter);

// Colores a los botones: 
document.querySelector('.reset').style.backgroundColor = '#e63946';
document.querySelector('.decrement').style.backgroundColor = '#a8dadc';
document.querySelector('.increment').style.backgroundColor = '#457b9d';
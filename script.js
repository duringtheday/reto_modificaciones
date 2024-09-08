// Reto: Modificaciones
// 1. Cambia los estilos del contenedor de color verde en pantalla, 
// modifica cualquier propiedad de css directamente y añade un atributo 
// de estilos al texto. 🧠
// 2. Intenta escribir el código de HTML, CSS y JS que ves en esta 
// página renderizada. No tiene que ser perfecto! 🧑‍💻 

// Seleccionar elemento `circulo` (ID)
let circuloContenedor = document.getElementById('circulo');
let mensaje = document.getElementById('mensaje');
let cambioEstiloBtn = document.getElementById('cambio-estilo-btn');

// Añadir clases (diversos colores para alternarlos)
// circuloContenedor.classList.toggle('verde');
// circuloContenedor.classList.toggle('amarillo');
// circuloContenedor.classList.toggle('naranja');
// circuloContenedor.classList.toggle('rojo');
// circuloContenedor.classList.toggle('violeta');
// circuloContenedor.classList.toggle('azul');
// circuloContenedor.classList.toggle('turquesa');


let rotationDegree = 0;
let isClockwise = true; // dirección de la rotación

// Definir las clases de colores y el índice inicial
const colorClassesCirculo = ['verde', 'amarillo', 'naranja', 'rojo', 'violeta', 'azul', 'turquesa'];
let indiceColorActualCirculo = 0;
let hue = 0; // Inicializar hue

// Función para cambiar el color del botón
function cambiaColorCirculo() {
    // Eliminar todas las clases de color del botón
    colorClassesCirculo.forEach(colorClassesCirculo => circuloContenedor.classList.remove(colorClassesCirculo));

    // Agregar la siguiente clase de color
    circuloContenedor.classList.add(colorClassesCirculo[indiceColorActualCirculo]);


    // Alternar la dirección de rotación
    isClockwise = !isClockwise;

    // Calcular la nueva rotación
    rotationDegree = isClockwise ? rotationDegree + 360 : rotationDegree - 360;


    // Aplicar Rotación
    // circuloContenedor.style.transform = `rotate(${indiceColorActualCirculo * 360}deg)`;
    circuloContenedor.style.transform = `rotate(${rotationDegree}deg)`;
    circuloContenedor.style.transition = `all 1s ease-in-out`;


    // CHANGE COLOR
    // Trigger a reflow to ensure transition is applied correctly
    circuloContenedor.offsetHeight; // This line forces a reflow

    // Set start color (current color before transition)
    let startColor = getComputedStyle(circuloContenedor).background;

    // Add the new color class for transition
    circuloContenedor.classList.add(colorClassesCirculo[indiceColorActualCirculo]);

    // Set end color (new color after adding class)
    let endColor = getComputedStyle(circuloContenedor).background;

    // Set CSS variables for the transition
    circuloContenedor.style.setProperty('--start-color', startColor);
    circuloContenedor.style.setProperty('--end-color', endColor);

    // Trigger color change animation
    circuloContenedor.style.animation = 'changeColor 3s ease-in-out';




        // Incrementar el valor de hue
        // hue += 60;
        // if (hue >= 360) hue = 0;
    
        // // Aplicar el nuevo color de fondo usando HSL
        // circuloContenedor.style.background = `hsl(${hue}, 100%, 50%)`;
        // circuloContenedor.style.transition = `background 1s ease`;





    // Actualizar el índice para el siguiente color
    // Siendo que `indiceColorActual` empieza en 0 y la longitud del array es
    // `7`, entonces, por norma si es menor a 7 será igual a su mismo número que,
    // en este caso, es el `dividendo` (el índice) y la longitud el `divisor`:
    // - con índice `0`: indiceColorActual = (0 + 1) % 7 = 1
    // - con índices `1`, `2`, `3`, `4`, `5`, `6`: 
    // indiceColorActual = `2`, `3`, `4`, `5`, `6`, `7` (porque sumamos `+1`)
    // residuos (a partir de índie 0): `0`, `1`, `2`, `3`, `4`, `5`, `6` (`dividendo` 
    // < `divisor`, entonces, `residuo` = `dividendo`)
    indiceColorActualCirculo = (indiceColorActualCirculo + 1) % colorClassesCirculo.length;
}

// Añadir el event listener al botón
circuloContenedor.addEventListener('click', cambiaColorCirculo);




// Alterna entre forma cuadrada y circular
circuloContenedor.style.borderRadius = circuloContenedor.style.borderRadius === '50%' ? '0' : '50%';

// cambio de estilo de texto
mensaje.setAttribute('style', 'color: white');



// Definir las clases de colores y el índice inicial
const colorClasses = ['verde', 'amarillo', 'naranja', 'rojo', 'violeta', 'azul', 'turquesa'];
let indiceColorActual = 0;

// Función para cambiar el color del botón
function cambiaColorBoton() {
    // Eliminar todas las clases de color del botón
    colorClasses.forEach(colorClass => cambioEstiloBtn.classList.remove(colorClass));

    // Agregar la siguiente clase de color
    cambioEstiloBtn.classList.add(colorClasses[indiceColorActual]);



    // CHANGE COLOR
    // Trigger a reflow to ensure transition is applied correctly
    circuloContenedor.offsetHeight; // This line forces a reflow

    // Set start color (current color before transition)
    let startColor = getComputedStyle(cambioEstiloBtn).background;

    // Add the new color class for transition
    cambioEstiloBtn.classList.add(colorClasses[indiceColorActualCirculo]);

    // Set end color (new color after adding class)
    let endColor = getComputedStyle(cambioEstiloBtn).background;

    // Set CSS variables for the transition
    cambioEstiloBtn.style.setProperty('--start-color', startColor);
    cambioEstiloBtn.style.setProperty('--end-color', endColor);

    // Trigger color change animation
    cambioEstiloBtn.style.animation = 'changeColor 3s ease-in-out';



    // Actualizar el índice para el siguiente color
    // Siendo que `indiceColorActual` empieza en 0 y la longitud del array es
    // `7`, entonces, por norma si es menor a 7 será igual a su mismo número que,
    // en este caso, es el `dividendo` (el índice) y la longitud el `divisor`:
    // - con índice `0`: indiceColorActual = (0 + 1) % 7 = 1
    // - con índices `1`, `2`, `3`, `4`, `5`, `6`: 
    // indiceColorActual = `2`, `3`, `4`, `5`, `6`, `7` (porque sumamos `+1`)
    // residuos (a partir de índie 0): `0`, `1`, `2`, `3`, `4`, `5`, `6` (`dividendo` 
    // < `divisor`, entonces, `residuo` = `dividendo`)
    indiceColorActual = (indiceColorActual + 1) % colorClasses.length;


}

// Añadir el event listener al botón
cambioEstiloBtn.addEventListener('click', cambiaColorBoton);

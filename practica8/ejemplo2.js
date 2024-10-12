// Requerimos el módulo readline para manejar la entrada y salida en la consola
const readline = require('readline');

// Creamos la interfaz de readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variables
let letra = '', veces = 0, cadena = '';

// Función para preguntar la letra
function preguntarLetra() {
    rl.question('¿Qué letra desea, X o Z? ', (inputLetra) => {
        letra = inputLetra.toUpperCase(); // Convertimos la letra a mayúscula para facilitar la comparación
        if (letra === 'X' || letra === 'Z') {
            preguntarVeces();
        } else {
            console.log('Debes elegir entre la letra X o Z.');
            preguntarLetra();
        }
    });
}

// Función para preguntar cuántas veces repetir la letra
function preguntarVeces() {
    rl.question('¿Cuántas repeticiones (1-15)? ', (inputVeces) => {
        veces = parseInt(inputVeces);
        if (veces >= 1 && veces <= 15) {
            generarCadena();
        } else {
            console.log('El número de repeticiones debe estar entre 1 y 15.');
            preguntarVeces();
        }
    });
}

// Función para generar la cadena repetida
function generarCadena() {
    while (veces > 0) {
        cadena += letra;
        veces--;
    }
    console.log(cadena);
    rl.close(); // Cerramos la interfaz cuando terminamos
}

// Iniciamos preguntando la letra
preguntarLetra();

// Importa el módulo readline para manejar la entrada y salida en la consola
const readline = require('readline');

// Creamos la interfaz de readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que muestra el menú
function mostrarMenu() {
    rl.question('1. Escribir\n2. Leer\n3. Salir\nEscoge una opción: ', (opcion) => {
        switch(opcion) {
            case '1':
                console.log('Opción 1: Eliges Escribir.');
                mostrarMenu(); // Repetimos el menú para que el usuario pueda seguir eligiendo
                break;
            case '2':
                console.log('Opción 2: Eliges Leer.');
                mostrarMenu(); // Repetimos el menú
                break;
            case '3':
                console.log('Fin del programa.');
                rl.close(); // Cerramos la interfaz para terminar el programa
                break;
            default:
                console.log('Opción no válida, intenta de nuevo.');
                mostrarMenu(); // Repetimos el menú en caso de opción inválida
                break;
        }
    });
}

// Iniciamos mostrando el menú
mostrarMenu();

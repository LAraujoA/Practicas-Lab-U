const readline = require('readline');

// Crear una interfaz de readline para la entrada de usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinarNumero() {
    rl.question('Adivina el número (entre 1 y 100): ', (respuestaUsuario) => {
        const numeroUsuario = parseInt(respuestaUsuario);
        intentos++;

        // Verificamos si el número es correcto
        if (numeroUsuario === numeroAleatorio) {
            console.log(`¡Correcto! Adivinaste el número en ${intentos} intentos.`);
            rl.close(); // Cerramos la interfaz cuando el número es adivinado
        } else if (numeroUsuario < numeroAleatorio) {
            console.log('El número es mayor.');
            adivinarNumero(); // Volvemos a pedir el número
        } else {
            console.log('El número es menor.');
            adivinarNumero(); // Volvemos a pedir el número
        }
    });
}

// Iniciamos el juego
adivinarNumero();

let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

function contarVocalesyNum(cadena) {
    let vocales = "aeiouAEIOU";
    let numVocales = 0;
    let numDigitos = 0;

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];

        if (vocales.includes(caracter)) {
            numVocales++;
        }

        if (!isNaN(caracter) && caracter !== ' ') { 
            numDigitos++;
        }
    }

    return { numVocales, numDigitos };
}

function solicitarCadena() {
    rl.question('Ingresa una cadena de texto: ', (cadena) => {
        if (cadena.trim() === "") {  // trim() elimina espacios en blanco al inicio y al final
            console.log("La cadena no puede estar vacía. Por favor, ingresa una cadena válida.");
            return solicitarCadena();  // Volvemos a pedir la cadena
        }

        let resultado = contarVocalesyNum(cadena);  // Corregido: llamada a la función correcta
        console.log(`La cadena tiene ${resultado.numVocales} vocales y ${resultado.numDigitos} números.`);
        
        rl.close();
    });
}

solicitarCadena();

let readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num;

function pedirNumero () {
  rl.question("Introduce un numero mayor a 5: ", (input) => {
        num = parseInt(input)
        if(num > 5) {
            console.log(`Numero Valido: ${num}`);
        rl.close();
    } else {
        console.log("El numero debe ser mayor a 5.");
        pedirNumero();
    }
    });
}

pedirNumero();
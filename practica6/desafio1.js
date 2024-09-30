// Programa que solicita la edad del usuario y clasifica según su grupo de edad
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa tu edad: ', (edad) => {
  let categoria = "";

  if (edad >= 0 && edad <= 12) {
    categoria = "Niño";
  } else if (edad >= 13 && edad <= 17) {
    categoria = "Adolescente";
  } else if (edad >= 18 && edad <= 35) {
    categoria = "Adulto Joven";
  } else if (edad >= 36 && edad <= 59) {
    categoria = "Adulto";
  } else if (edad >= 60) {
    categoria = "Adulto Mayor";
  } else {
    categoria = "Edad no válida";
  }

  console.log(`Perteneces al grupo de: ${categoria}`);
  rl.close();
});

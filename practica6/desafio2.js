// Programa que solicita un número del 1 al 12 y muestra el nombre del mes correspondiente
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un número del 1 al 12 para saber el mes correspondiente: ', (numeromes) => {
  let nombremes = "";

  switch (parseInt(numeromes)) {
    case 1:
      nombremes = "Enero";
      break;
    case 2:
      nombremes = "Febrero";
      break;
    case 3:
      nombremes = "Marzo";
      break;
    case 4:
      nombremes = "Abril";
      break;
    case 5:
      nombremes = "Mayo";
      break;
    case 6:
      nombremes = "Junio";
      break;
    case 7:
      nombremes = "Julio";
      break;
    case 8:
      nombremes = "Agosto";
      break;
    case 9:
      nombremes = "Septiembre";
      break;
    case 10:
      nombremes = "Octubre";
      break;
    case 11:
      nombremes = "Noviembre";
      break;
    case 12:
      nombremes = "Diciembre";
      break;
    default:
      nombremes = "Número no válido";
      break;
  }

  console.log(`El mes es: ${nombremes}`);
  rl.close();
});

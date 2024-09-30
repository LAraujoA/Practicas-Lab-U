// Ejemplo que muestra el nombre del mes basado en el número del mes
let numeromes = 4;
let nombremes = "";

// Usamos la estructura "switch" para asignar el nombre correspondiente
switch (numeromes) {
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
  default:
    nombremes = "Mes no válido";
    break;
}

console.log(`El mes es: ${nombremes}`);

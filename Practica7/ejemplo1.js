//seleccionamos los encabezados 
const headers = document.querySelectorALL('h1, h2, h3, h4, h5, h6')

//usamos un bucle for para iterar sobre los encabezados 
for (let i = 0; i<headers.length; i++ ) {
    //Cambiamos el texto de cada encabezado
    headers[i].innerText = `Nuevo encabezado de Nivel  ${i + 1}`;
}
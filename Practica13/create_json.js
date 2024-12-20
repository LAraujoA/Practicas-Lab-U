// Importamos el módulo fs para manipular archivos en Node.js
const fs = require('fs');

// Nombramos el archivo
const fileName = 'biblioteca.json';

// Contenido del archivo
const libros = [
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', disponible: true },
    { titulo: 'Don Quijote de La Mancha', autor: 'Miguel de Cervantes', disponible: false },
    { titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', disponible: true }
];

// Crear el archivo JSON con tres libros
fs.writeFile(fileName, JSON.stringify(libros, null, 2), (err) => {
    if (err) {
        console.log('Error al crear archivo JSON:', err);
    } else {
        console.log('Archivo JSON creado exitosamente con tres libros iniciales');
    }
});

const fs = require('fs')
const fileName = 'biblioteca.json'

fs.readFile(fileName, 'utf-8', (err, data) =>{
    if(err){
        console.log('Error al leer el archivo JSON', err)
        return;
    }
    try{
        const libros = JSON.parse(data);

        libros.splice(0, 1);

        fs.writeFile(fileName, JSON.stringify(libros, null, 2), (err) => {
            if(err){
                console.log('Error al escribir en el archivo JSON', err)
            } else {
                console.log('Libro eliminado exitosamente');
            }
        });
    }catch(error){
        console.log('Error al parsear el archivo JSON', error)
    }
});
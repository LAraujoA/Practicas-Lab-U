const fs = require('fs')

const fileName = 'archivo.json'
const content = {
    nombre: 'Luis Araujo',
    edad: 18,
    materias: ['Programación Estructurada', 'Sistemas Operativos', 'Ingles', 'Matematica II', 'Aplicaion de Metodos'],
    activo: true
}

fs.writeFile(fileName, JSON.stringify(content,null,2), (err) => {
    if (err) {
        console.log('Error al crear archivo JSON', err)
    }else{
        console.log('El archivo se creo con exito')
    }
})
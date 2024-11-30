const express = require('express'); // Express: FRamwork para manejar el servidor
const path = require('path'); //Path: Modulo para trabajar con las rutas de los archivos

const app = express(); //Inicializamos la aplicacoion
const PORT = 3000; //Definimos el puerto donde se ejecutara el servidor

//Configurar middleware para servir archivos estaticos (css, imagenes, Javascript, etc)
//Archivos dentro de la carpeta 'public' estaran disponibles en el servidor 

app.use(express.static('public'));

// ** Rutas **

//Ruta principal (Paginas de inicio)
app.get('/', (req, res)=>{
    //Enviar el archivo 'index.html' como respuesta cuando el usuario accede a '/'
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res)=>{
   //Enviar el archivo 'index.html' como respuesta cuando el usuario accede a '/about'
   res.sendFile(path.join(__dirname, 'views', 'about.html'));
})

// Manejo de rutas no existentes (404)
// Este middleware captura cualquier ruta no definida como 404 (No encontrado)
app.use((req, res)=>{
    // Configurar el codigo de estado como 404 (No encontrado)
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

// **Iniciar el servidor **
// Escuchar peticipones en el puerto definido
app.listen(PORT, ()=>{
    //Mostrar un mensaje en la consola indicando que el servidor esta activo
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
})
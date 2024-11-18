//Definimos la clase
class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    //Metodo para imprimir informacion en consola
    imprimirInfo(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

//Creacion de Objeto
const persona1 = new Persona ('Luis', 25);
persona1.imprimirInfo();
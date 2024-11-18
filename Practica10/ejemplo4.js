class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }

    hacerSonido(){
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log(`${this.nombre} ladra`);
    }
}

const perro1 = new Perro ('Maylo');
perro1.hacerSonido();
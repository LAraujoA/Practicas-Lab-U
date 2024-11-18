class Coche{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo
    }

    arrancar(){
        console.log(`${this.marca} ${this.modelo} esta arrancado.`);
    }

    detener(){
        console.log(`${this.marca} ${this.modelo} se ha detenido`);
    }
}

//creacion de objeto
const coche1 = new Coche('Toyota', 'Corolla');
coche1.arrancar()
coche1.detener()
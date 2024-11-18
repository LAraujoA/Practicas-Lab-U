class Coche{
    constructor(marca,modelo,velocidad){
        this._marca = marca;
        this._modelo = modelo;
        this._velocidad = velocidad || 0;
    }

    get velocidad () {
        return this._velocidad;
    }
    acelerar(incremento){
        if(incremento > 0){
            this._velocidad += incremento;
            console.log(`El coche ha acelerado, Nueva velocidad: ${this._velocidad} km/h`);
        }else{
            console.log('El incremento de velocidad debe ser mayor a 0.');
        }
    }
    

    frenar(decremento){
        if (decremento > 0 && this._velocidad - decremento >=0){
            this._velocidad -= decremento;
            console.log(`El coche ha frenado, Nueva velocidad: ${this._velocidad} km/h.`);
        }else if(this._velocidad - decremento < 0){
            console.log('El decremento es demasiado alto, el coche se detendra');
        this._velocidad = 0;
        }else{
            console.log('El decremento de velocidad debe ser mayor a 0.')
        }
    }

    mostrarInfo(){
        console.log(`${this._marca},${this._modelo}, velocidad actual: ${this._velocidad} km/h.`);
    }
}

const coche1 = new Coche ("Nissan","Sentra")
coche1.mostrarInfo();
coche1.acelerar (20);
coche1.frenar (10);
coche1.frenar =(15);
coche1.mostrarInfo();
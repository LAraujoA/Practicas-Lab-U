class cuentaBancaria {
    constructor(saldo){
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(cantidad) {
        if(cantidad >= 0) {
            this._saldo = cantidad;
        }else{
            console.log(`Saldo: $${cantidad}, no se puede establecer un saldo negativo`);
        }
    }
}

const cuenta = new cuentaBancaria(1000);
console.log(`Saldo inicial: $${cuenta.saldo}`);

cuenta.saldo = 500;
console.log(`Movimiento: $${cuenta.saldo}`);

cuenta.saldo = -500
console.log(`Saldo actual: $${cuenta.saldo}`);
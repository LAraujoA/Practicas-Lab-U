class CuentaBancaria{
    constructor(titular,saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    //Metodo estatico
    static tipoDeCuenta(){
        return 'Cuenta de Ahorros';
    }

    imprimirInfo() {
        console.log(`Titular: ${this.titular}, Saldo: $${this.saldo}`);
    }
}

//objetos
const cuenta1 = new CuentaBancaria ('Luis', 25000);
cuenta1.imprimirInfo();
console.log(CuentaBancaria.tipoDeCuenta());
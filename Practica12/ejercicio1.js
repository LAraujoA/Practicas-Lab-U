class Articulo{
    constructor(nombre,precio,stock){
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
    }

    comprar (cantidad){
        if (cantidad > 0 && this._stock > 0 && this._stock - cantidad >=0 ){
            this._stock -= cantidad;
            let total = cantidad * this._precio;

            if (cantidad > 1){
                console.log(`Usted ha comprado ${cantidad} unidades del producto ${this._nombre} - Total: $${total}.`);
            }else{
                console.log(`Usted ha comprado ${cantidad} unidad del producto ${this._nombre} - Total: $${total}.`);
            }
        }

        else if (this._stock <= 0){
            console.log(`El prodcto ${this._nombre} actualmente agotado`);
        }
        else if (this._stock - cantidad < 0){
            console.log(`La cantidad que desea comprar es superior, actualmente solo hay ${this._stock} unidades del producto ${this._nombre}.`);
        }
        else{
            console.log('La cantidad a comprar debe ser mayor a 0');
        }           
    }

    reabastecer(cantidad){
        if (cantidad > 0){
            this._stock += cantidad
            console.log(`Reabasteciendo el Stock - Cantidad disponible del producto ${this._nombre} = ${this._stock}.`);
        }else {
            console.log('La cantidad a reabastecer debe ser mayor a 0');
        }
    }
}

const ART = new Articulo ("Jabon", 20, 10 );

ART.comprar(11);
ART.comprar(1);
ART.reabastecer(20);
ART.comprar(15);
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    }

    set nombreCompleto(nombreCompleto) {
       [this.nombre, this.apellido] = nombreCompleto.split(" ");
    }
}

const persona = new Persona ("Luis", "Araujo");
persona.nombreCompleto = ("Greysi Bermudez");
console.log(persona.nombreCompleto)
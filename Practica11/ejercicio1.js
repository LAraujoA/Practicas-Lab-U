class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    }
}

const persona = new Persona ("Luis", "Araujo");
console.log(persona.nombreCompleto)
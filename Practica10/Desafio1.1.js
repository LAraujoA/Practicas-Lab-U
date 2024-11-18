class Libro {
    constructor(titulo, autor, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
    }

    resumen() {
        console.log(`'${this.titulo}' de ${this.autor}, publicado en ${this.anio}.`);
    }

    mostrarResumenCompleto() {
        return `"${this.titulo}" es un relato corto que describe el descubrimiento de una antigua y terrorífica criatura, Cthulhu, por medio de registros y testimonios. La historia sigue a un hombre que, al investigar los escritos de su fallecido tío, revela cultos oscuros, misterios ancestrales y sueños perturbadores que sugieren el despertar de una entidad cósmica dormida, Cthulhu, que acecha en las profundidades del océano. Lovecraft combina horror y lo desconocido para transmitir la insignificancia del ser humano frente a fuerzas cósmicas incomprensibles.`;
    }
}

const libro1 = new Libro('La llamada de Cthulhu', 'H.P. Lovecraft', 1928);
libro1.resumen();
console.log(libro1.mostrarResumenCompleto());

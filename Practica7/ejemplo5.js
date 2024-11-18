const persona = {
    nombre: "Luis",
    edad: 18,
    ciudad: "San Salvador"
};

for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}
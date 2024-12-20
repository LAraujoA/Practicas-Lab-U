
const fs = require("fs");
const fileName = "vehiculos.json";
function modify (){
fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {

        console.log("Error al leer el archivo JSON:", err);
        return;
    }
    try {
        const vehiculos = JSON.parse(data);

        const idEliminar = 2;

        const indice = vehiculos.findIndex((vehiculo) => vehiculo.id === idEliminar);

        vehiculos[indice].año = 2022;

        fs.writeFile(fileName, JSON.stringify(vehiculos, null, 2), (err) => {
            if (err) {
                console.log("Error al escribir archivo JSON:", err);
            } else {
                console.log("Año del vehiculo actualizado exitosamente");
            }
        });

    } catch (error) {
        console.error("Error al parsear el JSON: ", error);
    }
});
}
module.exports = modify;
function procesarPedido(pedido) {
    return new Promise((resolve, reject) => {
      console.log(`Procesando el pedido de: ${pedido}...`);
  
      // Simulación del tiempo de procesamiento del pedido
      setTimeout(() => {
        const exito = Math.random() > 0.2; // Probabilidad de éxito del 80%
        
        if (exito) {
          resolve(`El pedido de ${pedido} fue procesado con éxito.`);
        } else {
          reject(`Error al procesar el pedido de ${pedido}.`);
        }
      }, 2000); // Simulación de un retraso de 2 segundos
    });
  }
  
  // Llamada a la función
  procesarPedido('Pizza')
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => {
      console.error(error);
    });  
const prompt = require('prompt-sync')();

let opcion;

do {
  console.log("--- Menú Nequi ---");
  console.log("1) Ver saldo");
  console.log("2) Enviar dinero");
  console.log("3) Recargar");
  console.log("4) Salir");

  opcion = prompt("Elige una opción: ");

  if (opcion === "1") {
    console.log("Tu saldo es $50000");
  } else if (opcion === "2") {
    console.log("Dinero enviado exitosamente.");
  } else if (opcion === "3") {
    console.log("Recarga completada.");
  } else if (opcion === "4") {
    console.log("Saliendo...");
  } else {
    console.log("Opción incorrecta.");
  }
} while (opcion !== "4");

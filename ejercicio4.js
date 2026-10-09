let movimientos = [
  { valor: 150000, tipo: "ingreso" },
  { valor: 0, tipo: "vacio" },
  { valor: -20000, tipo: "retiro" },
  { valor: -45000, tipo: "pago a comercio" },
  { valor: 0, tipo: "vacio" },
  { valor: -10000, tipo: "pago a comercio" }
];

let posicionEncontrada = -1;

for (let i = 0; i < movimientos.length; i++) {
  if (movimientos[i].valor === 0) {
    continue;
  }

  if (movimientos[i].tipo === "pago a comercio") {
    posicionEncontrada = i;
    console.log("El primer pago a comercio está en la posición: " + posicionEncontrada);
    break;
  }
}

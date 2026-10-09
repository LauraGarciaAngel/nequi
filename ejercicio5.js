let usuarios = [
  { nombre: "Isabela", movimientos: [150000, -50000, -20000, 30000] },
  { nombre: "Carlos", movimientos: [80000, -10000, -15000] },
  { nombre: "Laura", movimientos: [200000, -120000, 40000, -10000] }
];

for (let i = 0; i < usuarios.length; i++) {
  let totalUsuario = 0;
  let movimientosActuales = usuarios[i].movimientos;

  for (let j = 0; j < movimientosActuales.length; j++) {
    totalUsuario += movimientosActuales[j];
  }

  console.log("El total de " + usuarios[i].nombre + " es: " + totalUsuario);
}

let movimientos = [1500000, -250000, 320000, -80000, -45000, 900000, -1200000, 150000]
let total = 0
let cantidadRetiros = 0

for (let i = 0; movimientos < array.length; i++) {
    total += i
    if (valor < 0) {
        cantidadRetiros += 1
    }
}

console.log(`total: ${total}, cantidad retirada ${cantidadRetiros}`)
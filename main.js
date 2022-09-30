let cont = 1;
let cali = 0;

let cant = parseInt(prompt("Ingrese la cantidad de las gallinas"));

while (cont <= cant) {
    let peso = parseInt(prompt(`Ingrese el peso de la gallina ${cont}`));
    let altu = parseInt(prompt(`Ingrese la altura de la gallina ${cont}`));
    let huevos = parseInt(prompt(`Ingrese la cantidad de huevos ${cont}`));
    cali += (peso * altu) / huevos;
    cont++;
}

let prom = cali * cant;

alert(cali);
alert(prom);
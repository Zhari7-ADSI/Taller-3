addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let cont = 1;
        let vend = parseInt(prompt("Ingrese la cantidad de vendedores"));

        while (cont <= vend) {
            let suel = parseFloat(prompt("Ingrese el sueldo"));
            let vent1 = parseFloat(prompt("Ingrese la venta 1"));

            let com1 = vent1 * 0.1;
            let sum1 = vent1 + com1;
            let vent2 = parseFloat(prompt("Ingrese la venta 2"));

            let com2 = vent2 * 0.1;
            let sum2 = vent2 + com2;
            let vent3 = parseFloat(prompt("Ingrese la venta 3"));

            let com3 = vent3 * 0.1;
            let sum3 = vent3 + com3;
            let total = sum1 + sum2 + sum3;
            let tot_suel = suel + total

            alert(`El sueldo del empleado es: ${suel}`);
            alert(`Vendio un total de comiciones de: ${total}`);
            alert(`El sueldo del empleado total es: ${tot_suel}`);

            cont++;
        }
    })
})
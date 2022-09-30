addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let cont = 1;
        let proce = 10;
        let sum, rest, div, multi;

        while (cont <= proce) {
            let num1 = parseInt(prompt("Ingrese el primer número: "));
            let num2 = parseInt(prompt("Ingrese el segundo número: "));

            sum = num1 + num2;
            rest = num1 - num2;
            div = num1 / num2;
            multi = num1 * num2;

            cont += 1;
            alert(` ${sum}
${rest}
${div}
${multi}`);
        }
    })
})
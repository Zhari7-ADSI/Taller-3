addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let cont = 1;
        let alum = parseInt(prompt("Ingrese la cantidad de alumnos: "));

        while (cont <= alum) {

            let cred1 = parseInt(prompt(`Ingrese los creditos de la materia de fundamento: ${cont} `));
            let not1 = parseFloat(prompt(`Ingrese la nota de la materia de fundamento: ${cont}`));

            let cred2 = parseInt(prompt(`Ingrese los creditos de la materia de bd: ${cont}`));
            let not2 = parseFloat(prompt(`Ingrese la nota de la materia de bd: ${cont}`));

            let cred3 = parseInt(prompt(`Ingrese los creditos de la materia de ética: ${cont}`));
            let not3 = parseFloat(prompt(`Ingrese la nota de la materia de ética: ${cont}`));

            let fin = (cred1 * not1) + (cred2 * not2) + (cred3 * not3);
            let prom_mater = (not1 + not2 + not3) / 3;
            let tot_fin = fin + prom_mater;
            let sum_cred = cred1 + cred2 + cred3;
            let tot_nota = tot_fin / sum_cred;

            cont++;

            alert(`El promedio del estudiante es: ${tot_nota}`);
        }
    })
})
addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let cont = 1;
        let aprend = 5;

        while (cont <= aprend){
            let nom = prompt(`Ingrese el nombre del estudiante ${cont}`);
            let ape = prompt(`Ingrese el apellido del estudiante ${cont}`);
            let edad = parseInt(prompt(`Ingrese la edad del estudiante ${cont}`));
            let prom = parseFloat(prompt(`Ingrese el promedio del estudiante ${cont}`));

            cont += 1;
            alert(`el promedio del estudiante llamado: ${nom} ${ape} es de: ${prom}`);
        }
    })
})
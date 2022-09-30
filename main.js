addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let cont = 1, alum = 2;

        while (cont <= alum){
            let not1 = parseFloat(prompt(`Ingrese la primera nota del alumno ${cont}`));
            let not2 = parseFloat(prompt(`Ingrese la segunda nota del alumno ${cont}`));
            let not3 = parseFloat(prompt(`Ingrese la tercera nota del alumno ${cont}`));
            let not4 = parseFloat(prompt(`Ingrese la cuarta nota del alumno ${cont}`));
            let not5 = parseFloat(prompt(`Ingrese la quinta nota del alumno ${cont}`));

            let nota = not1 + not2 + not3 + not4 + not5;
            let prom = nota / 5;

            if (prom < 3){
                alert(`El alumno no puede presentar el examen, su promedio fué: ${prom}`);
            }
            else{
                alert(`El alumno puede presentar el examen, su promedio fué: ${prom}`);
            }
            cont ++;
        } 
        
    })
})
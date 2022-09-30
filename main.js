addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let people = 40, woman = 1, men = 7, sum = 0;

        while (sum <= people) {
            sum = woman + men;
            woman += 1;
            men += 1;

            alert(`La cantidad de mujeres es de: ${woman}`);
            alert(`La cantidad de hombres es de: ${men}`);
            alert(`La cantidad total de mujeres es de: ${woman}`);
            alert(`El total de personas es de: ${sum}`);
        }
    })
})
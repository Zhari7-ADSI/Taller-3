addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let cont = 1, avión = 20, proyec = 10;

        while ((avión - proyec) <= 10000){
            avión = avión + 20;
            proyec = proyec + 10;
            cont+= 1;

            alert(`La distancia del avión ${cont} es: ${avión}`);
            alert(`La distancia del proyectil ${cont} es: ${proyec}`);
        }
    })
})
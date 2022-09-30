addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let veh = document.getElementById("num1").value;

        let tur = 0;
        let aut = 0;
        let cam = 0;
        let mot = 0;
        let con = 1;

        while (veh >= con) {
            let veh = prompt("Tipo de vehiculo que pasa(turismo, autobus, camion o motocicleta.): ");

            if (veh == "turismo") {
                tur ++;
            }

            else if (veh == "autobus") {
                aut ++;
            }

            else if (veh == "camion") {
                cam ++;
            }

            else if (veh == "moto") {
                mot ++;
            }

            con++;
        }

        alert(`La cantidad de autobuses son: ${aut}`);
        alert(`La cantidad de turismo son: ${tur}`);
        alert(`La cantidad de camion son: ${cam}`);
        alert(`La cantidad de motocicleta son: ${mot}`);
    })
})
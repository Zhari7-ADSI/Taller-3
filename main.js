addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let aprendices = document.getElementById("num1").value;
        let cont = 1, a = 0, b = 0, c = 0;
        
        while (aprendices >= cont) {
            let voto = prompt("Ingrese el candidato por el que deseea votar (A, B o C)");
            if (voto == 'A' || voto == 'a') {
                a++;
            } else if (voto == 'B' || voto == 'b') {
                b++;
            } else if (voto == 'C' || voto == 'c') {
                c++;
            }
            cont++;
        }

        let candidatoA = (a / aprendices) * 100;
        let candidatoB = (b / aprendices) * 100;
        let candidatoC = (c / aprendices) * 100;
        let cont2 = 1;

        a = 0, b = 0, c = 0;

        if (candidatoA > 51) {
            alert("¡¡¡Ganó el candidato A!!!");
        } else if (candidatoB > 51) {
            alert("¡¡¡Ganó el candidato B!!!");
        } else if (candidatoC > 51) {
            alert("¡¡¡Ganó el candidato C!!!")
        } else if (candidatoA == candidatoB && candidatoB == candidatoB) {
            alert("¡¡¡Triple empate!!!");
        } else if (candidatoA > candidatoB && candidatoB > candidatoC) {

            let candidatoA = 0, candidatoB = 0;

            while (aprendices >= cont2) {
                let voto = prompt("Ingrese el candidato por el que deseea votar (A o B)");
                if (voto == 'A' || voto == 'a') {
                    a++;
                } else if (voto == 'B' || voto == 'b') {
                    b++;
                }
                candidatoA = (a / aprendices) * 100;
                candidatoB = (b / aprendices) * 100;
                cont2++
            }
            if (candidatoA > candidatoB) {
                alert("¡¡¡Ganó el candidato A!!!");
            } else if (candidatoB > candidatoA) {
                alert("¡¡¡Ganó el candidato B!!!");
            } else {
                alert("¡¡¡Empate!!!");
            }
        } else if (candidatoA > candidatoC && candidatoC > candidatoB) {

            let candidatoA = 0, candidatoC = 0;

            while (aprendices >= cont2) {

                let voto = prompt("Ingrese el candidato por el que deseea votar (A o C)");

                if (voto == 'A' || voto == 'a') {
                    a++;
                } else if (voto == 'C' || voto == 'c') {
                    c++;
                }
                candidatoA = (a / aprendices) * 100;
                candidatoC = (c / aprendices) * 100;
                cont2++
            }
            if (candidatoA > candidatoC) {
                alert("¡¡¡Ganó el candidato A!!!");
            } else if (candidatoC > candidatoA) {
                alert("¡¡¡Ganó el candidato C!!!");
            } else {
                alert("¡¡¡Empate!!!");
            }
        } else if (candidatoB > candidatoC && candidatoC > candidatoA) {

            let candidatoB = 0, candidatoC = 0;

            while (aprendices >= cont2) {
                let voto = prompt("Ingrese el candidato por el que deseea votar (B o C)");
                if (voto == 'C' || voto == 'c') {
                    c++;
                } else if (voto == 'B' || voto == 'b') {
                    b++;
                }
                candidatoC = (c / aprendices) * 100;
                candidatoB = (b / aprendices) * 100;
                cont2++
            }
            if (candidatoB > candidatoC) {
                alert("¡¡¡Ganó el candidato B!!!");
            } else if (candidatoC > candidatoB) {
                alert("¡¡¡Ganó el candidato C!!!");
            } else {
                alert("¡¡¡Empate!!!");
            }
        } else if (candidatoB > candidatoA && candidatoA > candidatoC) {

            let candidatoA = 0, candidatoB = 0;
            
            while (aprendices >= cont2) {
                let voto = prompt("Ingrese el candidato por el que deseea votar (A o B)");
                if (voto == 'A' || voto == 'a') {
                    a++;
                } else if (voto == 'B' || voto == 'b') {
                    b++;
                }
                candidatoA = (a / aprendices) * 100;
                candidatoB = (b / aprendices) * 100;
                cont2++
            }
            if (candidatoA > candidatoB) {
                alert("¡¡¡Ganó el candidato A!!!");
            } else if (candidatoB > candidatoA) {
                alert("¡¡¡Ganó el candidato B!!!");
            } else {
                alert("¡¡¡Empate!!!");
            }
        } else if (candidatoC > candidatoA && candidatoA > candidatoB) {

            let candidatoA = 0, candidatoC = 0;

            while (aprendices >= cont2) {
                let voto = prompt("Ingrese el candidato por el que deseea votar (A o C)");
                if (voto == 'A' || voto == 'a') {
                    a++;
                } else if (voto == 'C' || voto == 'c') {
                    c++;
                }
                candidatoA = (a / aprendices) * 100;
                candidatoC = (c / aprendices) * 100;
                cont2++
            }
            if (candidatoA > candidatoC) {
                alert("¡¡¡Ganó el candidato A!!!");
            } else if (candidatoC > candidatoA) {
                alert("¡¡¡Ganó el candidato C!!!");
            } else {
                alert("¡¡¡Empate!!!");
            }
        } else if (candidatoC > candidatoB && candidatoB > candidatoA) {

            let candidatoB = 0, candidatoC = 0;

            while (aprendices >= cont2) {
                let voto = prompt("Ingrese el candidato por el que deseea votar (C o B)");
                if (voto == 'B' || voto == 'b') {
                    b++;
                } else if (voto == 'C' || voto == 'c') {
                    c++;
                }
                candidatoB = (b / aprendices) * 100;
                candidatoC = (c / aprendices) * 100;
                cont2++
            }
            if (candidatoB > candidatoC) {
                alert("¡¡¡Ganó el candidato C!!!");
            } else if (candidatoC > candidatoB) {
                alert("¡¡¡Ganó el candidato B!!!");
            } else {
                alert("¡¡¡Empate!!!");
            }

        }
    })
})
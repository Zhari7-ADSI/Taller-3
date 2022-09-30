addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let con = 1;
        let amarilla=0;
        let rosa=0;
        let roja=0;
        let verde=0;
        let azul=0;

        let cant = document.getElementById("num1").value;

        while (con <= cant) {
            let Nplaca = prompt('vehiculo #' + con + ' \n ingrese el ultimo dijito de su placa: ')

            if (Nplaca == 1 || Nplaca == 2) {
                amarilla ++;
            }
            else if(Nplaca == 3 || Nplaca == 4){
                rosa ++;
            }
            else if (Nplaca == 5 || Nplaca == 6){
                roja ++;
            }
            else if(Nplaca == 7 || Nplaca == 8){
                verde ++;
            }
            else {
                azul ++;
            }
            con ++;

            
        }
        alert('Número de placas color amarillo: '+amarilla+'\nNúmero de placas color rosa: '+rosa+'\nNúmero de placas color rojo: '+roja+'\nNúmero de placas color verde: '+verde+'\nNúmero de placas color azul: '+azul);
    })
    
})
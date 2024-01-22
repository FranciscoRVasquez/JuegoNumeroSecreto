let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
let intentos = 1;


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroUsuario === numeroSecreto) {
        asignarElementoTexto("p" , `Acertaste! el numero secreto era: ${numeroSecreto} lo intentaste ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
    if(numeroUsuario < numeroSecreto){
        asignarElementoTexto("p" , "El numero secreto es mayor");
        } else{
            asignarElementoTexto("p" , "El numero secreto es menor");
        }
        intentos++;
            limpiarCaja()
    }
    return;
}

function asignarElementoTexto(elemento, texto){
    let elemntoHtml = document.querySelector(elemento);
    elemntoHtml.innerHTML = texto;
    return;
}
/*function limpiarCaja(){
 let valorCaja = document.querySelector('#valorUsuario');
 valorCaja.value = '';
} */

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

asignarElementoTexto("h1" , "Juego del numero secreto");
asignarElementoTexto("p" , "Indica un numero entre 1 y 10");

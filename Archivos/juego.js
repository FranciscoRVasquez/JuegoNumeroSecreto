
let numeroSecreto = Math.floor(Math.random() * 10 +1);
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;
let numeroMaximoPosible = 25;

while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Introduce un numero entre 1 y ${numeroMaximoPosible}`));
    if(numeroUsuario == numeroSecreto){
          alert(`acertaste!! el numero correcto era: ${numeroSecreto}. lo intentaste ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
      }
      else{
        if(numeroUsuario > numeroSecreto){
            alert("numero secreto es menor")
        }
        else{
            alert("numero secreto es mayor")
        }
        // intentos = intentos + 1;
        // intentos += 1
        intentos ++;
        if(intentos > maximosIntentos){
            alert(`haz llegado al máximo de ${maximosIntentos} intentos permitidos el numero secreto era: ${numeroSecreto}`)
            break;
        }
      }
      }

 /* if (numeroUsuario == numeroSecreto){
    alert(`acertaste!! el numero era: ${numeroSecreto}`)}
    else {
        if(numeroSecreto < numeroUsuario){
            alert("el numero secreto es menor")
        }
        else {
            alert("el numero secreto es mayor")
        }
    }
  */   

    
    /*DESAFIOS:
    let finde0 = "sabado";
let finde1 = "domingo"
console.log(finde0);
console.log(finde1);
let diaSemana = prompt("Que dia de la semana es?");
if(diaSemana == finde0){
    alert("¡Buen fin de semana!")
}
else if(diaSemana == finde1){
    alert("¡Buen fin de semana!")
}
else{
    alert("¡Buena Semana!")
}*/


/* DESAFIOS RANDOM:
Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let porcentajeDescuento = 0;
let cantidadMillas = prompt("Ingrese la cantidad de millas");
if (cantidadMillas > 30000) {
    porcentajeDescuento = 20;
} else if (cantidadMillas > 5000) {
    porcentajeDescuento = 10;
} else {
    porcentajeDescuento = 0;

    CORRECTO:
    let porcentajeDescuento = 0;
let cantidadDeMillas = prompt("Ingrese la cantidad de millas");
if (cantidadDeMillas > 30000) {
    porcentajeDescuento = porcentajeDescuento + 20;
} else {
    if (cantidadDeMillas > 5000) {
        porcentajeDescuento = porcentajeDescuento + 10;
    }
}
} */

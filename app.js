let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignartextoElemento(elemento,texto ){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignartextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ===1 ) ?  'veces' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //El usuario no acerto
    if(numeroDeUsuario > numeroSecreto ){
        asignartextoElemento('p', 'El numero secreto es menor');
    }else{
        asignartextoElemento('p','El  numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
    }
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value='';
   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor( Math.random()* numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignartextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else {
    //Si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;

    }
    }

   
}

function condicionesIniciales(){
    asignartextoElemento('h1','Juego del número secreto!' );
    asignartextoElemento('p',`Indica un número entre el 1 y el ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1 ;
}

function reiniciarJuego(){
    //Limpiar la caja, recargar la pagina como si se hubiera presionado f5
    limpiarCaja();
    //indicar mensaje de inicio de intervalo de numeros, generar el nuevo numero aleatorio
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego.
   document.querySelector('#reiniciar').setAttribute('disabled','true');
    //reiniciar el numero de intentos.
    

}

 condicionesIniciales();

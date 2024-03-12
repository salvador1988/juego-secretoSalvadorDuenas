
let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados=[];
//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
let elemtoHTML = document.querySelector(elemento);
elemtoHTML.innerHTML = texto;
return;
}

function Verificarintento(){
    let numerosDeUsusarios=parseInt(document.getElementById('valorUsusario').value);
if(numerosDeUsusarios=== numeroSecreto){
 asignarTextoElemento('p',`Acertaste el  numero en ${intentos} ${(intentos===1)? 'vez': 'veces'}`);  
 document.getElementById('reiniciar').removeAttribute('disabled');
}else{
if(numerosDeUsusarios>numeroSecreto){
    asignarTextoElemento('p','el numero secreto es menor');

}else{
    asignarTextoElemento('p','el nnumero secreto es mayor');
}
intentos ++;
limpiarCaja();
}

    return;

}

function limpiarCaja(){
 let valorCaja =  document.querySelector('#valorUsusario');
 valorCaja.value='';
}
function condicionesIniciales(){
asignarTextoElemento('h1','Juego del numero secreto!');
asignarTextoElemento('p','Indica un numero del uno al dies..');
numeroSecreto = generarNuemeroSecreto();
intentos=1;

}

function generarNuemeroSecreto(){

   let numeroGenerado = Math.floor(Math.random()*10)+1;
   console.log(numeroSecreto);
   console.log(listaNumerosSorteados);
   if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNuemeroSecreto();

   }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
}
function reiniciaJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

}
condicionesIniciales();
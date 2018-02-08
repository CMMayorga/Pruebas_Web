
var titulo;
var texto;

function init(){
    titulo=document.getElementsByTagName("h1")[0];
    texto=document.getElementById("texto");
}

function ponerEstiloAzul(){
    titulo.style.color="#2d437f";
    texto.style.color="#2d437f";
    texto.innerHTML="El color elegido es el azul";
}
function ponerEstiloVerde(){
    titulo.style.color="#47bf58";
    texto.style.color="#47bf58";
        texto.innerHTML="El color elegido es el verde";
}
function reloadPage(){
    location.reload();
}

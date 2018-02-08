var h1 = document.getElementsByTagName("h1")[0];
var contador = 0;

setInterval(contar,1000);

function contar() {
    h1.innerHTML = contador++;
}



var listFotos =new Array("img/foto-1.jpg", "img/foto-2.jpg", "img/foto-3.jpg");
var fondo = document.getElementsByTagName("body")[0];
var pos = 0;

setInterval(cambiarFondo, 3000);

function cambiarFondo() {
    pos++;
    if (pos == listFotos.length) {
        pos=0;
    }
    fondo.style.background = "url("+listFotos[pos]+") no-repeat center";
    fondo.style.backgroundSize = "cover";
    fondo.style.backgroundAttachment = "fixed";
}
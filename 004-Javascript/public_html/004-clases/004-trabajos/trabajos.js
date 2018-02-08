function trabajo(valueTitulo, valueImg, valueCat) {
    this.titulo = valueTitulo;
    this.rutaImagen = valueImg;
    this.categoria = valueCat;
}

var trabajo1 = new trabajo("Globo aerostatico", "img/4f125d16e5854.image.jpg", "graphic");
var trabajo2 = new trabajo("Biblioteca", "img/img_01.png", "graphic");
var trabajo3 = new trabajo("Baloncesto", "img/img_01.jpg", "web");
var trabajo4 = new trabajo("Plumas", "img/img_04.png", "web");
var trabajo5 = new trabajo("Té", "img/tea-samples2.jpg", "otros");

var listadoTrabajos = new Array(trabajo1, trabajo2, trabajo3, trabajo4, trabajo5);

var lista = document.getElementById("trabajos");

function mostrar(cat) {
    
    if(cat=="web"){
        document.getElementsByClassName("btn")[0].className+=" active";
        document.getElementsByClassName("btn")[1].className="btn";
        document.getElementsByClassName("btn")[2].className="btn";
    }
    else if(cat=="graphic"){
        document.getElementsByClassName("btn")[1].className+=" active";
        document.getElementsByClassName("btn")[0].className="btn";
        document.getElementsByClassName("btn")[2].className="btn";
    }
    else{
        document.getElementsByClassName("btn")[2].className+=" active";
        document.getElementsByClassName("btn")[1].className="btn";
        document.getElementsByClassName("btn")[0].className="btn";
    }
    
    lista.innerHTML = "";
    for (var i = 0; i < listadoTrabajos.length; i++) {
        if (listadoTrabajos[i].categoria == cat) {
            lista.innerHTML += "<div class='trabajo'><img src='" + listadoTrabajos[i].rutaImagen + "'><span>" + listadoTrabajos[i].titulo + "</span></div>";
        }
    }
}
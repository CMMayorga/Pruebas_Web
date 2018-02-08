
var content_slider = document.getElementById("content_slider");
var content_btn = document.getElementById("content_btn");

//Crear clase(plantilla) para instanciar objetos
function foto(valueTitulo, valueImg) {
    this.titulo = valueTitulo;
    this.rutaImagen = valueImg;
}

var foto1 = new foto("Te ayudamos a entender el mundo", "img/slider1.jpg");
var foto2 = new foto("Lorem Ipsum", "img/slider2.jpg");
var foto3 = new foto("Lorem Ipsum", "img/slider3.jpg");

var listaFotos = new Array(foto1, foto2, foto3);

//Insertamos las fotos en el html
for (var i = 0; i < listaFotos.length; i++) {
    content_slider.innerHTML += "<div class='foto'><h2>" + listaFotos[i].titulo + "</h2><img src='" + listaFotos[i].rutaImagen + "' alt='" + listaFotos[i].titulo + "'/></div>";
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Una vez creadas e insertada las fotos las selecciono
var fotos = content_slider.getElementsByClassName("foto");

//Recalculamos tamaño del contenedor del slide, de la botonera en función de número de imágenes, añadimos bolitasy recalculamos el tamaño de cada foto
content_slider.style.width = listaFotos.length * 100 + "%";
content_btn.style.width = ((20 * listaFotos.length) + (5 * (listaFotos.length - 1))) + "px";

for (var i = 0; i < listaFotos.length; i++) {
    fotos[i].style.width = 100 / fotos.length + "%";
    content_btn.innerHTML += "<div onclick='mostrarFoto(" + i + ")' class='btn_slider'></div>";
}

//color puntitos
var puntitos = document.getElementsByClassName('btn_slider');
puntitos[0].style.background = "#222";
var contador = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var pos_left = 0;

//Animación
var animacion = setInterval(cambiarFoto, 3000);

function cambiarFoto() {
    //Mov contenedor fotos
    pos_left += 100;
    if (pos_left == (fotos.length * 100)) {
        pos_left = 0;
        content_slider.className = "";
    } else {
        content_slider.className = "slider_animate";
    }
    content_slider.style.left = "-" + pos_left + "%"

    //Color puntito
    contador++;
    if (contador == puntitos.length) {
        contador = 0;
    }
    for (var i = 0; i < puntitos.length; i++) {
        if (contador == i) {
            puntitos[i].style.background = "#222";
        } else {
            puntitos[i].style.background = "#fff";
        }
    }

}

function mostrarFoto(pos) {
    pos_left = (pos * 100) - 100;
    contador = pos - 1;
    cambiarFoto();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Eventos
content_slider.onmouseover = function () {
    clearInterval(animacion);
}
content_slider.onmouseout = function () {
    animacion = setInterval(cambiarFoto, 3000);
}
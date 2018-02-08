var content_portadas = document.getElementById("content_portadas");
var content_reproductor = document.getElementById("content_reproductor");

function cancion(valueImagen, valueAudio, valueTitulo) {
    this.imagen = valueImagen;
    this.audio = valueAudio;
    this.titulo = valueTitulo;
}

//Instanciamiento de objetos para rellenar un array y asi poderlo recorrer y montar la vista

var listaCanciones = new Array();

for (var i = 1; i <= 23; i++) {
    var pista = new cancion("portadas/portada" + i + ".jpg", "mp3/pista" + i + ".mp3", "Canción " + i + "");
    //Añado cada uno de los objetos al array previamente vacio
    listaCanciones.push(pista);
}

for (var i = 0; i < listaCanciones.length; i++) {
    content_portadas.innerHTML += ("<div class='portada'><img src='" + listaCanciones[i].imagen + "' alt='' onclick='reproducir(" + i + ")'/></div>");
}

function reproducir(pos) {
    content_reproductor.getElementsByTagName("img")[0].src = listaCanciones[pos].imagen;
    content_reproductor.getElementsByTagName("h3")[0].innerHTML = listaCanciones[pos].titulo;
    document.getElementById("reproductor").src = listaCanciones[pos].audio;
    document.getElementById("reproductor").play();
}
var noticias = document.getElementsByClassName("noticia");

for (var i = 0; noticias.length; i++) {
    noticias[i].getElementsByTagName("div")[0].addEventListener("click", mostrarOcultar);
}

function mostrarOcultar() {
    var id_btn = this.id;

    var id_array = id_btn.split("_");
    var id_numero = id_array[id_array.length - 1];

    var parrafo = document.getElementById("contenido_" + id_numero);
    
    switch (parrafo.style.display){
        case "block":
        case "":
            parrafo.style.display="none";
            this.innerHTML="Mostrar";
            break;
        case "none":
            parrafo.style.display="block";
            this.innerHTML="Ocultar";
            break;
    }
}
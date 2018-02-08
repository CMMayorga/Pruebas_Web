var main =document.getElementsByTagName("main");

for(var i=0;i<3;i++){
    main.innerHTML="<div class='noticia'><h2>Crecida del Ebro</h2><p id='contenido_0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><div id='enlace_0'>Ocultar</div></div>"
}
var noticias = main.getElementsByClassName("noticia");

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
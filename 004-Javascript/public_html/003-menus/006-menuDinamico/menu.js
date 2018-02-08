
//Crear menu dinamico

//Crear clase(plantilla9 de tipo elemento de menu <a href="url">Texto</a>

function elementMenu(valueTexto, valueEnlace) {
    this.texto = valueTexto;
    this.enlace = valueEnlace;
}

//instaciar objetos (dar valores a sus atributos)

var home = new elementMenu("Home", "index.html");
var servicios = new elementMenu("Servicios", "servicios.html");
var contacto = new elementMenu("Contacto", "contacto.html");

//alamcenar todos los objetos de manu en un array para que me sea mas facil recorrer y pintar

var listObjMenu = new Array(home, servicios, contacto);

//Rellenar el ul de bojetos tipo menu

var menuDinamico = document.getElementById("menuDinamico");

for (var i = 0; i < listObjMenu.length; i++) {
    menuDinamico.innerHTML += "<li><a href=" + listObjMenu[i].enlace + ">" + listObjMenu[i].texto + "</a></li>";
}

//Menu active: window.location.href

var path = window.location.pathname;
var protocol = window.location.protocol;
var host = window.location.host;

var url = protocol+"//"+host+path;

var enlaces = document.getElementsByTagName("header")[0].getElementsByTagName("nav")[0].getElementsByTagName("a");

for(var i =0; i<enlaces.length; i++){
    if( enlaces[i].href === url ){
        enlaces[i].className = "active";
    }
}

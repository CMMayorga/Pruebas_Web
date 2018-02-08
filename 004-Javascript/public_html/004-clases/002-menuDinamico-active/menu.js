//Crear menu dinámico:

//Crear clase(plantilla) de tipo elemento de menu <a href="url">texto</a>
function elemntMenu( valueTexto, valueEnlace ){
    this.texto = valueTexto;
    this.enlace =  valueEnlace;
}

//Instanciar objetos (dar valores a sus atributos)
var home = new elemntMenu("Home","index.html");
var servicios = new elemntMenu("Servicios","servicios.html");
var contacto = new elemntMenu("Contacto","contacto.html");

//Almacenar todos los objetos de menu en un array para que me sea más facil de recorrer y pintar
var listObjMenu = new Array(home,servicios,contacto);

//Rellenar el ul de obj tipo menu componiendo el listado
var menuDinamico = document.getElementById("menuDinamico"); //ul

for(var i=0; i<listObjMenu.length;i++){
    menuDinamico.innerHTML += "<li><a href='"+listObjMenu[i].enlace+"'>"+listObjMenu[i].texto+"</a></li>";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Menu active: window.location.href
var url = window.location.href;
console.log(url);

//Selecciono los enlaces para ponerle la clase activa al que coincida con la url
var enlaces = menuDinamico.getElementsByTagName("a");

for(var i=0;i<enlaces.length; i++){
    if( enlaces[i].href == url ){
        enlaces[i].className ="active";
    }
}


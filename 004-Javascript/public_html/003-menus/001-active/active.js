
//Destacamos el enlace cuyo HREF coincida con la URL

///Obtenemos url del navegador por trozos
var path = window.location.pathname;
var protocol = window.location.protocol;
var host = window.location.host;

//Creamos url con la combinación de los 3 elementos
var url = protocol+"//"+host+path;

//Seleccionar los enlaces
var enlaces = document.getElementsByTagName("header")[0].getElementsByTagName("nav")[0].getElementsByTagName("a");

console.log(url);
console.log(enlaces[0].href);

for(var i =0; i<enlaces.length; i++){
    if( enlaces[i].href === url ){
        enlaces[i].className = "active";
    }
}
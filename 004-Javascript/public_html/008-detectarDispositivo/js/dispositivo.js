//Navigator = objeto que da informacion relativa al navegador que esta utilizando el usuario
//attr userAgent = nos devuelve informacion completa sobre el agente de usuario representado por el navegador

var dispositivo = navigator.userAgent.toLowerCase();

//search() = esta funcion busca una cadena de texto y devuelve su posicion si no devuelve -1

if(dispositivo.search(/iphone|ipod|ipad|android|Windows Phone/)!=-1){
    window.location="mobile.html";
}
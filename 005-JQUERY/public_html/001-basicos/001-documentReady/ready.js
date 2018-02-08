

//Javascript
window.onload = function(){
    console.log("Web cargada 1");
}

//Jquery
//Función nombrada
$(document).ready(init);
function init(){
     console.log("Web cargada 2");   
}

//Función anónima
$(document).ready(function(){
       console.log("Web cargada 3");     
});

//Simplificado
$(function(){
       console.log("Web cargada 4");     
});
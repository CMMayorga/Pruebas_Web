
///////Selectores
//por Id
$("#formulario"); //document.getElementById("formulario");
//por Class
$(".content");
//por Tag
$("h3");
//por descendencia
$("main ul li");

///////Refinamiento de selecciones
$("h3").not(".foo"); //$("h3:not(.foo)")
$("main ul li").first(); //$("main ul li:first-child")
$("main ul li").last(); //$("main ul li:last-child")
$("ul li").eq(1); //$("ul li:nth-child(1)")

/////Formato de código encadenado
$("main").find("h3").eq(1).html("Título añadido con Jquery");
//document.getElementsByTagName("h3")[1].innerHTML = "Título añadido con Js";


////Cuando se selecciona un elemento con $() lo que devuelve es un objeto, para saber su este existe en el DOM hay que preguntar por la cantidad de elementos que posse $().lenght, esto devuelve TRUE si existe el objeto y FALSE si contiene 0
if( $("h3.foo").length ){
    $("h3.foo").append("<span>añadido con Jquery</span>");
    //document.getElementsByClassName("foo")[0].innerHTML += "<span>añadido con Js</span>";
}else{
    $("main").append("<span>añadido con Jquery</span>");
}




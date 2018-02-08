
//html() = cambiar el contenido de un elemento
//$("div p:first-child").html("Párrafo modificado");
$("div p").eq(0).html("Párrafo modificado");

//Añadir contenido:
//append() = añade al final
$("div").append("<p>Párrafo nuevo</p>");
//append() = añade al principio
$("div").prepend("<p>Párrafo nuevo al principio</p>");

//Modificar posición de un elemento (cortar y pegar)
//appenTo() / prependTo()
$("div p").eq(0).appendTo("section");

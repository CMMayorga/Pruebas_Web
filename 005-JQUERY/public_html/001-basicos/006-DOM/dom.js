
function recorrer(){
    
    //seleccionar el elemento siguiente
    $("h1").next().hide(1000);
    //seleccionar el padre de un elemento
    $("input").parent().attr({"action":"enviar.php","method":"post"});
    //seleccionar los padres
    $("input").parents("div,body,html").css("background","#ededed");
    //seleccionar el padre no directo pero si más cercano
    $("input").closest("div").addClass("abuelo");
    //seleccionar los hijos
    $("ul").children().css("color","tomato"); //$("ul li").css("color","tomato");
    //selccionar hermanos
    $("li.foo").siblings().css("color","blue");
    
}

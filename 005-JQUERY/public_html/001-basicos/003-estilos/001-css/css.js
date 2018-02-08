
//función css() -> obtenedor
$("h1").css("font-size");
$("h1").css("fontSize");
//document.getElementsByTagName("h1")[0].style.fontSize;

//función css() -> establecedor

//Prop individual
$("h1").css("font-size","80px");
//document.getElementsByTagName("h1")[0].style.fontSize="80px";

//Prop múltiple
$("h1").css({
    "font-size":"50px",
    "color":"tomato",
    "letter-spacing":"-2px"
});

//Establecer valores CSS relativos
$("h1").css("font-size","+=10px"); //sumamos 10px al tamaño de origen

var p=$("p#info span");
var box=$("#box");

///////Eventos de ratón_____________

//Evento individual -> box.attr("onclick",nameFuncion())
box.click(cajaClick);
box.dblclick(cajaDblClick);
box.mouseenter(cajaMouseEnter);
box.mouseleave(cajaMouseLeave);

//Eventos múltiples a un mismo elemento
box.on({
    click:cajaClick,
    dblclick:cajaDblClick,
    mouseenter:cajaMouseEnter,
    mouseleave:cajaMouseLeave
});

//Evento con llamada a función anónima (método reducido)
box.click(function(){
    p.html("click sobre caja");
});

//Funciones
function cajaClick(){
     p.html("click sobre caja");
}
function cajaDblClick(){
     p.html("2 click sobre caja");
}
function cajaMouseEnter(){
     p.html("entro en la caja");
}
function cajaMouseLeave(){
     p.html("salgo de la caja");
}


/////Eventos de teclado_________
var body=$("body");
body.keypress(teclaPresionada);
body.keydown(teclaSiendoPulsada);
body.keyup(sueltoTecla);

function teclaPresionada(tecla){
    if(tecla.keyCode==13){
        alert("gracias");
    }
    console.log("tecla presionada:"+tecla.keyCode);
}
function teclaSiendoPulsada(tecla){
    console.log("tecla pulsada:"+tecla.keyCode);
}
function sueltoTecla(tecla){
    console.log("tecla soltada:"+tecla.keyCode);
}


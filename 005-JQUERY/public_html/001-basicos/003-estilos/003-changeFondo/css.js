
var color="blue";
$("body").css("background-color",color);

//La consola nos demuestra que aunque yo ponga el color en texto, hedacedimal.... lo devuelve en el canal rgb(), por tanto NO puedo utilizar un condicional $()=0"blue"
console.log($("body").css("background-color"));

//////////////////////////////////////////////

setInterval(cambiarColor,2000);
function cambiarColor(){
    
    if(color=="blue"){
        color="pink";
    }else if(color=="pink"){
        color="yellow";
    }else{
        color="blue";
    }
    $("body").css("background-color",color);
    
}





//Funciones propias del Nucleo de Jquery

//$.each() = recorrer un array_____________________________
var array=["perro","gato","pájaro"];
$.each(array,function(i,item){
    $("body").append("<p>"+item+"</p>");
});

//for(var i=0;i<array.length;i++){
//    $("body").append("<p>"+array[i]+"</p>");
//}

//$.inArray() = comprueba si existe un elemento dentro de un array. Devuelve -1 sino lo encuentra y si lo encuentra devuelve su posición____________________________
if( $.inArray("perro",array) == -1 ){
    console.log("No existe");
}else{
    console.log("Si existe");
}

//Funciones que devuelven el tipo de dato almacenado en una variable_________________
var num='a';
num=parseInt(num);
console.log(typeof num);

console.log($.isNumeric(num));
console.log($.isArray(array));

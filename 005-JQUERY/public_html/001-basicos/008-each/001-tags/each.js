
//each(function(pos,representante para cada elemento){})
$("#alumnos li").each(function(i,item){
    var txt=$(item).html();
    $(item).html("Mi nombre es "+txt+" y estoy en el ordenador "+i);
});


$("#animales li").each(function(pos,animal){
    var valor=$(animal).html();
    $(animal).html("Me gusta el "+valor);
});
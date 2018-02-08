
var musica = ["norah jones","estopa","Indila","Lana del Rey","Kate Melua"];

//recorremos el array para corregir el texto
$.each(musica,function(i,artista){
    musica[i] = artista.charAt(0).toUpperCase().concat( artista.substr(1,artista.length-1) );
});

//ordenamos el array y pintamos en el DOM
$.each(musica.sort(), function(i,artista){
    $("#nlist_music").append("<li>"+artista+"</li>");
});

//Añadimos evento
$("#nlist_music li").attr("onclick","addMusic(this)");
function addMusic(item){    
    var isRepeat=false;
    $("#mylist_music li").each(function(i,elegido){
        if( $(item).html() === $(elegido).html() ){
            isRepeat=true;
        }
    });    
    if(!isRepeat){
        $(item).clone().attr("onclick","removeMusic(this)").appendTo("#mylist_music");
    }
}

function removeMusic(item){
    $(item).remove(); //elimina el elemento, se elimina así mismo
}

function removeList(){
    $("#mylist_music").empty(); //vacía de contenido
}
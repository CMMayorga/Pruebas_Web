
var musica = ["norah jones","estopa","Indila","Lana del Rey","Kate Melua"];
var mimusica = [];

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
    var txtArtistaSelect=$(item).html();
    if($.inArray(txtArtistaSelect,mimusica) == -1){
        mimusica.push(txtArtistaSelect);
    }
    $("#mylist_music").empty();
    $.each(mimusica, function(i,artista){
        $("#mylist_music").append("<li onclick='removeMusic(this)'>"+artista+"</li>");
    });
    
}

function removeMusic(item){
   var txtArtistaSelect=$(item).html();
   
   //borramos el texto del elem seleccionado -> splice(pos,cantidad)
   mimusica.splice( $.inArray(txtArtistaSelect,mimusica), 1 );
    $("#mylist_music").empty();
    $.each(mimusica, function(i,artista){
        $("#mylist_music").append("<li onclick='removeMusic(this)'>"+artista+"</li>");
    });
   
}

function removeList(){
    $("#mylist_music").empty(); //vacía de contenido
    mimusica.length=0;
}
//JS VINCULADO EN CABECERA
//el documento javascript está vinculado en cabecera, por tanto debido al sentido de lectura lineal, es ejecutado antes que el propio documento html. Por ello en el js no puedo hacer refencia a una etiqueta si todavía no ha sido creada
//Solución-> llamamos al objeto window para que llame a una función cuando ha sido cargada

window.onload = function(){
    
    //SELECTORES
    //por ID -> selector único
    var info = document.getElementById("info");
    //por TAG -> genera un array con todos los enlaces del documento ( enlaces[0] )
    var enlaces = document.getElementsByTagName("a");
    //por CLASS -> genera un array con todos los elementos con la clase rojo 
    var elemRojos = document.getElementsByClassName("rojo");
    
    //CONTAR ELEMENTOS E INSERTAR INFO
    //Nº de enlaces
    info.innerHTML = "Nº de enlaces: "+enlaces.length+"<br>";
    //Nº de elem rojos
    info.innerHTML += "Nº de elem rojos: "+elemRojos.length+"<br>";
    
    //OBJ.ATTR
    //Mostrar el href del primero enlace
    var firstEnlace = enlaces[0];
    console.log(firstEnlace);
    info.innerHTML += firstEnlace.href+"<br>";
    
    //Mostrar el href del último enlace
    var endEnlace = enlaces[ enlaces.length-1 ];
    info.innerHTML += endEnlace.href+"<br>";
    
    //Listado de links
    info.innerHTML += "Listado de links: <br> <ul>";
        for( var i=0; i<enlaces.length ; i++ ){
            info.innerHTML += "<li>"+enlaces[i].href+"</li>";
        }
    info.innerHTML += "</ul>";
    
    //Contar nº enlaces que van a index
    var contador=0;
     for( var i=0; i<enlaces.length ; i++ ){
            if( enlaces[i].href.match("index.html") === "index.html" ){
                    contador++;
            }
     }
    info.innerHTML += "Nº de link a la home: "+contador;
    
    
}

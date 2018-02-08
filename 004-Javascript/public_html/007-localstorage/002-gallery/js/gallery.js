
//para leer dinamicamente una carpeta, necesitamos de un php (lado de servidor) que nos devuelva un json  para convertirlo con js en un array
var lista_fotos = new Array("foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg");


///////////////////////////////////////////////////////////////////INDEX
function  montarGallery(){
    
    for(var i=0; i<lista_fotos.length; i++){
        //Creo el div
        document.getElementsByTagName("main")[0].innerHTML += "<div onclick='goToDetalle("+i+")' id='foto_"+i+"' class='foto'></div>";
        
        //Seleccionar el div recién creado -> método que sustituye a poner el style en línea aplicandole a cada div su imagen de fondo
        var divActual = document.getElementById("foto_"+i);
        divActual.style.background = "url(img/"+lista_fotos[i]+") no-repeat center";
        divActual.style.backgroundSize = "cover";
    }
    
}

function goToDetalle(pos){
    localStorage.setItem("posFoto",pos);
    window.location = "detalle.html";
}


///////////////////////////////////////////////////////////////////DETALLE
var posFoto = localStorage.getItem("posFoto");
var detalle=document.getElementById("detalle");

function cargarFoto(){
    detalle.style.background = "url(img/"+lista_fotos[posFoto]+") #222 no-repeat center";
    detalle.style.backgroundSize = "contain";
}

function goToBack(){
    window.location = "index.html";
}

function pase(dir){
    
    if(dir=="prev"){
        if(posFoto==0){
            posFoto = lista_fotos.length-1;
        }else{
            posFoto--;
        }
    }else{
        if(posFoto==lista_fotos.length-1){
            posFoto = 0;
        }else{
            posFoto++;
        }
    }
    
    detalle.style.background = "url(img/"+lista_fotos[posFoto]+") #222 no-repeat center";
    detalle.style.backgroundSize = "contain";
}
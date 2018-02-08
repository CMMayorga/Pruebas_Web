var sizeventana=window.innerHeight;
var ventana = document.getElementById("ventana_modal");

function recalc(){
    sizeventana=window.innerHeight;
    ventana.style.display="none";
}

var listadoFotos = new Array("img/foto1.jpg","img/foto2.jpg","img/foto3.jpg","img/fondo1.jpg","img/foto4.jpg");

for(var i=0; i<listadoFotos.length; i++){
    document.getElementsByTagName("main")[0].innerHTML += "<div style='background-image:url("+listadoFotos[i]+"); background-repeat: no-repeat; background-position: center; background-size:cover' class='col' onclick='mostrarDetalle(this)'></div>";
}

function mostrarDetalle(div){
    
    //1-Mostrar-ocultar venata modal
    ventana.style.display="table";
    ventana.onclick = function(){
        ventana.style.display="none";
    }
    
    //2-Cargar en la ventana modal la foto pinchada de la galería
    //console.log(div.style.backgroundImage);
    var divBg=div.style.backgroundImage;   
    divBg = divBg.replace('url(',"");  
    
    var srcImagen = divBg.replace(')',"");
    //Eliminamos las dobles comillas que pone firefox en el src
    srcImagen=srcImagen.replace('"','');
    srcImagen=srcImagen.replace('"','');
    
    var image=ventana.getElementsByTagName("img")[0];
    image.setAttribute("src", srcImagen); //image.src = srcImagen;
    
    //3- Recalcular tamaños de la ventana modal en función del tamaño de la foto
    console.log(image.width);
    console.log(image.height);
    
    if(image.width >= image.height){
        image.style.width = "80%";
        image.style.height = "auto";
    }else{
        image.style.width = "auto";
        image.style.height = ((sizeventana)-100)+"px";
    }
    
}


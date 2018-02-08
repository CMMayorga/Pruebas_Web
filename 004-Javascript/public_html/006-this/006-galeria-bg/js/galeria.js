
var listadoFotos = new Array("img/foto1.jpg","img/foto2.jpg","img/foto3.jpg","img/fondo1.jpg");

for(var i=0; i<listadoFotos.length; i++){
    document.getElementsByTagName("main")[0].innerHTML += "<div style='background-image:url("+listadoFotos[i]+"); background-repeat: no-repeat; background-position: center; background-size:cover' class='col' onclick='mostrarDetalle(this)'></div>";
}

function mostrarDetalle(div){
    //console.log(div.style.backgroundImage);
    
    var ventana = document.getElementById("ventana_modal");
    ventana.style.display="table";
    ventana.onclick = function(){
        ventana.style.display="none";
    }
    
    var foto_modal=document.getElementById("foto_modal");
    foto_modal.style.backgroundImage = div.style.backgroundImage;
    
}


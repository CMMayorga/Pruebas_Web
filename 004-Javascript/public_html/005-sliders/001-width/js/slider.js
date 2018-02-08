
var pos_left=0;

//SLIDER
var content_slider = document.getElementById("content_slider");
var fotos = content_slider.getElementsByTagName("img");

//recalculamos el tamaño del contendor en función de cuantas imágenes tenga
content_slider.style.width = fotos.length*100+"%";

//BOTONES
var content_btn=document.getElementById("content_btn");
content_btn.style.width = (25*fotos.length)+"px";

for(var i=0; i<fotos.length; i++){
    //recalculamos el tamaño de cada foto
    fotos[i].style.width = 100/fotos.length+"%";
    //calculamos tantas bolitas cómo fotos
    content_btn.innerHTML += "<div onclick='mostrarFoto("+i+")' class='btn_slider'></div>";
}

//START---> Empezamos a mover el slider al entrar al documento
var animacion = setInterval(cambiarFoto,3000);

function cambiarFoto(){
    pos_left += 100;
    
    if(pos_left == (fotos.length*100)){
        pos_left=0;
        content_slider.className =""; //quitamos propiedad de transición para que vuelva a empezar desde left 0 sin hacer un recorrido por todas
    }else{
        content_slider.className ="slider_animate";
    }
    
    content_slider.style.left= "-"+pos_left+"%";
}

function mostrarFoto(pos){
    pos_left = (pos*100)-100;
    cambiarFoto();
}


//Eventos
content_slider.onmouseover = function(){
    clearInterval(animacion);
};
content_slider.onmouseout = function(){
    animacion = setInterval(cambiarFoto,3000);
};

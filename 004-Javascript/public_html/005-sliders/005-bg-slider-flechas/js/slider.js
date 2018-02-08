
var content_slider = document.getElementById("content_slider");
var content_btn = document.getElementById("content_btn");

//Crear clase(plantilla) para instanciar objetos
function foto(valueTitulo, valueImg){
    this.titulo = valueTitulo;
    this.rutaImagen = valueImg;
}

var foto1 = new foto("Fotografía chica","img/foto1.jpg");
var foto2 = new foto("Foto modelo","img/foto2.jpg");
var foto3 = new foto("Bosque encantado","img/foto3.jpg");

var listaFotos = new Array(foto1,foto2,foto3);

//Insertamos las fotos en el html
for(var i=0; i<listaFotos.length; i++){
    content_slider.innerHTML += "<div class='foto' style='background:url("+listaFotos[i].rutaImagen+") no-repeat center; background-size:cover'><h2>"+listaFotos[i].titulo+"</h2></div>";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Una vez creadas e insertada las fotos las selecciono
var fotos = content_slider.getElementsByClassName("foto");

//Recalculamos tamaño del contenedor del slide, de la botonera en función de número de imágenes, añadimos bolitasy recalculamos el tamaño de cada foto
content_slider.style.width = listaFotos.length*100+"%";

for(var i=0; i<listaFotos.length; i++){
    fotos[i].style.width = 100/fotos.length+"%";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var pos_left=0;

//Animación
var animacion = setInterval(cambiarFoto,3000);

function cambiarFoto(){
    //Mov contenedor fotos
    pos_left += 100;
    if(pos_left == (fotos.length*100) ){
        pos_left=0;
        content_slider.className = "";
    }else{
         content_slider.className = "slider_animate";
    }
    content_slider.style.left = "-"+pos_left+"%";
    
}

function pasarFoto(dir){
    
    if(dir=='prev'){ //prev
        if(pos_left==0){
            pos_left += (fotos.length*100) -100;
        }else{ 
            pos_left -= (fotos.length*100) -100; 
        }
       
    }
    //Lamamos a la función que mueve el slide independientemente de si pincho next o prev
    cambiarFoto();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Eventos
content_slider.onmouseover = parar;
content_btn.onmouseover = parar;
function parar(){
    clearInterval(animacion);
}
content_slider.onmouseout = reanimar;
content_btn.onmouseout = reanimar;
function reanimar(){
    animacion = setInterval(cambiarFoto,3000);
}
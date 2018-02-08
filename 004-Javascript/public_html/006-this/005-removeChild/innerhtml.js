//Declarar variables globales para que sean accesibles por todas las funciones. Si declaro una variable dentro de una función solo es accesible por ella misma, ya que para el resto de  funciones no existiría
var producto;
var precio;
var nlist;
var btn_borrar;
var total;
var suma=0;

//Constructor de obj
function init(){
    producto= document.getElementById("producto");
    precio = document.getElementById("precio");
    nlist=document.getElementById("nlist");
    btn_borrar=document.getElementById("btnborrar");
    total= document.getElementById("total");
}

//Funciones
function addProducto(){
    
    //1-Obtenemos valor de los inputs
    var txt_producto = producto.value;
    var cant_precio = Number(precio.value);//Number() convierte string a número y devuelve 0 si el valor q ue está intentando convertir es una letra
    
    //2-preguntar si vienen datos
    if( txt_producto.trim().length == 0 ){
        alert("Ups! Introduce algún producto");
    }else{
        if(cant_precio===0){
            alert("Debes introducir un número");
        }else{
            ///3-Una vez validados ambos campos, añadimos los li y el total
            nlist.innerHTML += "<li onclick='borrarLi(this)'>"+txt_producto+" | <span>"+cant_precio+"</span> €</li>";
            //4-Total
            suma += cant_precio;
            total.innerHTML = suma+" €";
            
            //5-limpiar inputs para poder insertar nuevo producto
            producto.value = "";
            precio.value = "";
            producto.focus();
            
            //6-mostrar botón eliminar
            btn_borrar.style.display ="inline-block";
            
        }
    }
    
    
}

function borrar(){
    
    nlist.innerHTML="";
    btn_borrar.style.display="none";
    suma=0;
    total.innerHTML=suma+" €";
    
    producto.focus();
    
}

function borrarLi(li){
    console.log(li);   
    //obtenemos el precio del li seleccionado y lo convertimos en número para poder operar con el
    var li_precio = Number(li.getElementsByTagName("span")[0].innerHTML);
    
    //recalculamos el total
    suma -= li_precio;
    total.innerHTML=suma+" €";
    
    //eliminamos del ul, el hijo li que ha activado la función
    nlist.removeChild(li);
    
    if(nlist.getElementsByTagName("li").length == 0){
        borrar();
    }
    
}
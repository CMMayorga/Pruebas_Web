var nombre;
var apellido;
var correo;
var hombre;
var mujer;
var mes;
var year;
var usuario;
var password;
var file;

function init(){
    nombre=document.getElementById("nombre");
    apellido=document.getElementById("apellido");
    correo=document.getElementById("correo");
    hombre=document.getElementById("hombre");
    mujer=document.getElementById("mujer");
    mes=document.getElementById("mes");
    year=document.getElementById("year");
    usuario=document.getElementById("usuario");
    password=document.getElementById("password");
    file=document.getElementById("files");
}

function registrar(){
    if(nombre.value==="" || apellido.value==="" || correo.value==="" || mes.value==="" || year.value==="" || usuario.value==="" || password.value===""){
        alert("No has introducido algun dato");
    }
    else{
        alert("Te has registrado correctamente");
    }
}

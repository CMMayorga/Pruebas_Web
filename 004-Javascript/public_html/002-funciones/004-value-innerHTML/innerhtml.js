//variables globales

var nlist;
var producto;

function init() {
    nlist = document.getElementById("nlist");
    producto = document.getElementById("producto");
}
function addProducto() {
    if (producto.value != "") {
        nlist.innerHTML += "<li>" + producto.value + "</li>";
        producto.value = "";
        btnBorrar.style.display="inline-block";
    }
    else{
        alert("Debes indicar el producto.")
    }
}
function borrar() {
    nlist.innerHTML = "";
    btnBorrar.style.display="none";
}

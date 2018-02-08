//variables globales

var nlist;
var producto;
var precio;
var btn_borrar;
var total;
var suma = 0;

function init() {
    nlist = document.getElementById("nlist");
    producto = document.getElementById("producto");
    precio = document.getElementById("precio");
    btn_borrar = document.getElementById("btn_borrar");
    total = document.getElementById("total");
}
function addProducto() {
    var txt_producto = producto.value;
    var cant_precio = Number(precio.value);
    console.log(typeof (cant_precio));

    if (txt_producto.trim().length === 0) {
        alert("Debes indicar el producto.");
    }
    else {
        if (cant_precio === 0) {
            alert("Debes introducir un número");
        }
        else {
            nlist.innerHTML += "<li>" + txt_producto + " | " + cant_precio + "</li>";
            suma += cant_precio;
            total.innerHTML = suma + " €";
            btn_borrar.style.display = "inline-block";
           /* document.getElementsByTagName("input").value = "";
            producto.focus();*/
        }
    }
}
function borrar() {
    nlist.innerHTML = "";
    suma = 0;
    total.innerHTML = suma + " €";
    btn_borrar.style.display = "none";
    producto.focus();
}

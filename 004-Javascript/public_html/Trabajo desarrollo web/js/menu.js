
var btn_menu = document.getElementById("btn_menu");
var menu = document.getElementById("menu");
var mascara = document.getElementById("mascara");

function recalcMenu() {
    if (window.innerWidth >= 800) {
        mostrarMenu();
    }
}
;

btn_menu.onclick = mostrarMenu;

function mostrarMenu() {
    menu.style.right = "0";
    mascara.style.display = "block";
}
;

mascara.onclick = cerrarMenu;

function cerrarMenu() {
    menu.style.right = "-250px";
    mascara.style.display = "none";
}
;
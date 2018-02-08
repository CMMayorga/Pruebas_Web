
var btn_menu = document.getElementById("btn_menu");
var menu = document.getElementById("menu");
var mascara = document.getElementById("mascara");
var contenido = document.getElementById("contenido");

function recalcMenu() {
    if (window.innerWidth >= 800) {
        mostrarMenu();
    }
};

btn_menu.onclick = mostrarMenu;

function mostrarMenu() {
    menu.style.right = "0";
    mascara.style.display = "block";
    contenido.style.right="250px";
};

mascara.onclick = cerrarMenu;

function cerrarMenu() {
    menu.style.right = "-250px";
    mascara.style.display = "none";
    contenido.style.right="0";
};
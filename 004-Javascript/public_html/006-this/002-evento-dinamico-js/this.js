var cajas = document.getElementsByClassName("caja");
var fondo = document.getElementsByTagName("body")[0];

for (var i = 0; i < cajas.length; i++) {
    cajas[i].addEventListener("mouseover", cambiarFondoCaja);
    cajas[i].addEventListener("mouseout", resetCaja);
    cajas[i].addEventListener("click", cambiarFondo);
}

function cambiarFondoCaja() {
    switch (this.title) {
        case "caja1":
            this.style.background = "red";
            break;
        case "caja2":
            this.style.background = "green";
            break;
        case "caja3":
            this.style.background = "blue";
            break;
    }
}

function resetCaja() {
    this.style.background = "#fff";
}

function cambiarFondo() {
    fondo.style.background = this.style.background;
}
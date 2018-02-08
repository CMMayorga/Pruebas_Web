var fondo = document.getElementsByTagName("body")[0];

function cambiarFondoCaja(caja) {
    switch (caja.title) {
        case "caja1":
            caja.style.background = "red";
            break;
        case "caja2":
            caja.style.background = "greenyellow";
            break;
        case "caja3":
            caja.style.background = "blue";
            break;
    }
}

function resetCaja(caja) {
    caja.style.background = "#fff";
}

function cambiarFondo(caja) {
    fondo.style.background = caja.style.background;
}



function checkOrientation() {

    var orientacionClass = "";

    if (window.orientation == 90 || window.orientation == -90) {
        orientacionClass = "portrait"
    }
    else {
        orientacionClass = "landscape";
    }

    document.getElementsByTagName("body")[0].setAttribute("class", orientacionClass)
}

//si se produce algun cambio en la orientacion, cambiamos la funcion
window.onorientationchange = checkOrientation;
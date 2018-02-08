var botones = document.getElementsByClassName("btn");
var mensaje = document.getElementById("mensaje");

botones[0].onclick = function() { //funcion anonima
    mensaje.innerHTML = "Buenos dias";
    mensaje.style.color = "#82B1FF";
    mensaje.style.opacity = "1";
    setTimeout(ocultar,2000);
};
botones[1].onclick = darBuenasTardes;
botones[2].onclick = darBuenasNoches;

function darBuenasTardes() { //funcion nombrada
    mensaje.innerHTML = "Buenas Tardes";
    mensaje.style.color = "#F44336";
    mensaje.style.opacity = "1";
    setTimeout(ocultar,2000);
}
function darBuenasNoches() {
    mensaje.innerHTML = "Buenas Noches";
    mensaje.style.color = "#263238";
    mensaje.style.opacity = "1";
    setTimeout(ocultar,2000);
}

function ocultar() {
    mensaje.style.opacity = "0";
}
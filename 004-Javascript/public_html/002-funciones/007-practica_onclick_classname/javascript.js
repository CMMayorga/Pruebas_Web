var botones = document.getElementsByClassName("btn");
var mensaje = document.getElementById("mensaje");

botones[0].onclick = function() {
    mensaje.innerHTML = "Buenos dias";
    mensaje.style.color = "#82B1FF";
};
botones[1].onclick = darBuenasTardes;
botones[2].onclick = darBuenasNoches;

function darBuenasTardes() {
    mensaje.innerHTML = "Buenas Tardes";
    mensaje.style.color = "#F44336";
}
function darBuenasNoches() {
    mensaje.innerHTML = "Buenas Noches";
    mensaje.style.color = "#263238";
}
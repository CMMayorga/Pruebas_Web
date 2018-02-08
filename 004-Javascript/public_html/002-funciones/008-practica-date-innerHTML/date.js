var mensaje = document.getElementsByTagName("h1")[0];
var theme=document.getElementById("theme");

//Validacion de la hora
var fecha = new Date();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();

if ((hora >= 8) && (hora <= 12)) {
    mensaje.innerHTML = "Buenos dias, son las " + hora + ":" + minutos;
    theme.href="css/morning.css"
}
else if ((hora >= 13) && (hora <= 19)) {
    mensaje.innerHTML = "Buenas tardes, son las " + hora + ":" + minutos;
    theme.href="css/evening.css"
}
else {
    mensaje.innerHTML = "Buenas noches, son las " + hora + ":" + minutos;
    theme.href="css/night.css"
}
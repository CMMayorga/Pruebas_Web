var h1 = document.getElementsByTagName("h1")[0];
var botones = document.getElementsByClassName("btn");
var contador=1;

botones[0].onclick = function() {
    intervalo= setInterval(function (){
            h1.innerHTML=contador++;
    },1000);
    botones[0].style.display="none";
    botones[1].style.display="inline-block";
    botones[2].style.display="inline-block";
};
botones[1].onclick = function() {
    clearInterval(intervalo);
    botones[0].style.display="inline-block";
    botones[1].style.display="none";
};
botones[2].onclick= function (){
    clearInterval(intervalo);
    contador=0;
    h1.innerHTML=contador;
    botones[0].style.display="inline-block";
    botones[1].style.display="none";
    botones[2].style.display="none";
};
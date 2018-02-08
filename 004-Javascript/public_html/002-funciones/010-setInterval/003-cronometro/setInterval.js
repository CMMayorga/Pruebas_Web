var contadorHora=0;
var contadorMin=0;
var contadorSg=0;

var h1 = document.getElementsByTagName("h1")[0];
var botones = document.getElementsByClassName("btn");

var hora=document.getElementById("hora");
var min=document.getElementById("min");
var sg=document.getElementById("sg");

var body=document.getElementById("theme");

botones[0].onclick = function() {
    intervalo= setInterval(function(){
    if(contadorSg==59){
        contadorSg=0;
        min.innerHTML=++contadorMin;
        if(contadorMin==60){
            contadorMin=0;
            hora.innerHTML=++contadorHora;
        }
    }
    switch (contadorSg){
        case 0:
            body.style.background="#EF5350";
            break;
        case 9:
            body.style.background="#F44336";
            break;
        case 19:
            body.style.background="#E53935";
            break;
        case 29:
            body.style.background="##D32F2F";
            break;
        case 39:
            body.style.background="#C62828";
            break;
        case 49:
            body.style.background="#B71C1C";
            break;
    }
    sg.innerHTML=++contadorSg;
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
    contadorHora=0;
    contadorMin=0;
    contadorSg=0;
    hora.innerHTML=contadorHora;
    min.innerHTML=contadorMin;
    seg.innerHTML=contadorSg;
    clearInterval(intervalo);
    botones[0].style.display="inline-block";
    botones[1].style.display="none";
    botones[2].style.display="none"; 
};
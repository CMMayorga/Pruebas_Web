
var box=document.getElementsByClassName("box")[0];

function pasarColor(){
    localStorage.setItem("bg",box.style.background);
    window.location="view.html"
}

function cogerColor(){
    var body=document.getElementsByTagName("body")[0];
    var color = localStorage.getItem("bg");
    
    body.style.background=color;
}
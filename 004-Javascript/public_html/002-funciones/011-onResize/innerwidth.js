
getMedidas();

function getMedidas(){
    document.getElementById("width").innerHTML = window.innerWidth;
    document.getElementById("height").innerHTML = window.innerHeight;
    
    if(window.innerWidth>600){
        document.getElementsByTagName("body")[0].style.background="teal";
    }else{
        document.getElementsByTagName("body")[0].style.background="#222";
    }
    
}


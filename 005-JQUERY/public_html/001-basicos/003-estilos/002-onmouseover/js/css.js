var color;
var bgOrigen= $("body").css("background");


function select(red){
    if(red=='fb'){
        color="#2b5997";
    }else{
        color="#42c0fb";
    }
    $("body").css("background",color);
}

function reset(){
    $("body").css("background",bgOrigen);
}
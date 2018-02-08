

function insertClase(){
    $("h1").addClass("verde");
    //document.getElementsByTagName("h1")[0].className="verde";
}
function removeClase(){
    $("h1").removeClass("verde");
    //document.getElementsByTagName("h1")[0].className="";
}

//var hasClass=false;
function toogleClase(){
    $("h1").toggleClass("verde");
   
//con javascript
//    if(!hasClass){
//        document.getElementsByTagName("h1")[0].className="verde";
//        hasClass=true;
//    }else{
//        document.getElementsByTagName("h1")[0].className="";
//        hasClass=false;
//    }
    
}

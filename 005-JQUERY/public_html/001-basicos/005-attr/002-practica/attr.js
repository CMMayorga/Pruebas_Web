
//function change(){
//    var foto= $("img").attr("src");
//    
//    if( foto=="img/foto1.png" ){
//        $("img").attr("src","img/foto2.png");
//    }else{
//         $("img").attr("src","img/foto1.png");
//    }
//}


var foto= $("img").attr("src");
var fotograma="img/foto1.png";
    
function change(){
    if(foto==fotograma){
        fotograma="img/foto2.png";
    }else{
        fotograma="img/foto1.png";
    }   
    $("img").attr("src",fotograma);
}





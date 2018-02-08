
$("ul").children().attr("onclick","activar(this)");
$("button").hide();

function activar(item){
    $(item).removeClass("off").addClass("on").siblings().removeClass("on").addClass("off");
    $("button").show();
}

function info(){
    var texto=$("li.on").html();
    
    alert("Te voy a redireccionar: "+texto);
    
    switch(texto){
        case "Facebook":
            window.location="http://www.facebook.com";
            break;
        case "Twitter":
            window.location="http://www.twitter.com";
            break;
        case "Pinterest":
            window.location="http://www.pinterest.com";
            break;
        case "Google+":
            window.location="http://www.google.com";
            break;
    }
}
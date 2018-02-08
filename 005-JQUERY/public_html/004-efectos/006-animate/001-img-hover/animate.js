//$(selector).mouseenter(inFunction);
//$(selector).mouseleave(outFunction);

//$(selector).hover(inFunction, outFunction);

$(".foto").hover(dentro,fuera);

function dentro(){
    var txt_height=$(this).find(".info").innerHeight();
    $(this).find(".info").animate({top:"-"+txt_height+"px"},300);
}

function fuera(){
    $(this).find(".info").animate({top:"0px"},300);
}
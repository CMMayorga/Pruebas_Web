//
//var boton = document.getElementById("btn_menu");
//var menu = document.getElementById("menu");
//
//var isShowing = false;
//
//boton.onclick = function() {
//    if (isShowing) {
//        menu.style.height = "0px";
//        isShowing = false;
//    }
//    else {
//        menu.style.height = "250px";
//        isShowing = true;
//    }
//}


$("#btn_menu").click(function (){
    $("nav").slideToggle(300);
});
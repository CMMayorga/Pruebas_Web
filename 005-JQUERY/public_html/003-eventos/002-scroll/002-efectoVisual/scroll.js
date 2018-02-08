
var scroll = 0;
var scala = 0.1;
var altura;

$(window).scroll(function() {

    if ($(window).scrollTop() > scroll) {
        //estoy haciendo scroll positivo
        scroll = $(window).scrollTop();
        if (scala < 1.5) {
            scala += 0.1;
        } else {
            $("#filtro").fadeIn(1000, function() {
                $("#filtro h1").fadeIn(2000);
            });
            altura = $(window).scrollTop();
            calcSection();
        }

    } else {
        //estoy haciendo scroll negativo
        scroll = $(window).scrollTop();
        if (scala > 0.1) {
            scala -= 0.1;
        }
        $("#filtro").fadeOut(1000);
    }

    $("#img_car").css("transform", "scale(" + scala + ")");
    console.log(scroll);



});

function calcSection() {
    var heigthSection = $(window).height() + altura;
    console.log(heigthSection);
    $("section").css("height", heigthSection);
}
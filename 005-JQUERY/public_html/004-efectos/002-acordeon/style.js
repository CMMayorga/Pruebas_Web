/*Acordeon tipo 1*/

$(".ac").click(function (){
    $(this).next().slideToggle();
});


/*Acordeon tipo 2*/
$(".ac2").first().next().slideDown();

$(".ac2").click(function (){
    $(this).next().slideToggle(200);
    $(this).siblings(".ac2").next().slideUp(200);
});
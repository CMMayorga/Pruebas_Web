//$(".nlist li").on("mouseenter",function (){
//    $(this).children(".sub_nlist").slideDown();
//});
//
//$(".nlist li").on("mouseleave",function (){
//    $(this).children(".sub_nlist").slideUp();
//});

$(".nlist li").click(function (){
    $(this).children(".sub_nlist").slideToggle();
});

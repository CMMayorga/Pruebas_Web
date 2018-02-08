var positionHeader = $("header").position().top;

$(window).scroll(function() {
    if ($(window).scrollTop() >= positionHeader) {
        $("header").removeClass("bottom").addClass("fixed");
        $("nav").fadeIn(200);
    } else {
        $("header").removeClass("fixed").addClass("bottom");
        $("nav").fadeOut(200);
    }
});
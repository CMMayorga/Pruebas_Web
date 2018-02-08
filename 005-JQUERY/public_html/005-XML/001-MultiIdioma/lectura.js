
function page(info) {
    switch (info) {
        case 'blog':
            cargarEntradas();
            break;
        case 'nosotros':
            cargarNosotros();
            break;
    }
}

function cargarEntradas() {
    $(".content").empty();

    $.get("xml/blog_es.xml", function(xml) {
        $(xml).find("blog").find("entrada").each(function(i, entrada) {
            var id = $(entrada).children("id").text();
            var titulo = $(entrada).children("titulo").text();
            var fecha = $(entrada).children("fecha").text();
            var texto = $(entrada).children("texto").text();

            $(".content").append('<h1></h1><div class="entrada"><h2>' + titulo + '</h2><h3>' + fecha + '</h3><p>' + texto + '</p></div>');
        });
    });
}

function cargarNosotros() {
    $(".content").empty();
    
    $.get("xml/blog_es.xml", function(xml) {
        
            var titulo=$(nosotros).children("titulo").text();
            var texto=$(nosotros).children("texto").text();

            $(".content").append('<h1>Nosotros</h1><div class="entrada"><h2>' + titulo + '</h2><p>' + texto + '</p></div>');
    });
    }

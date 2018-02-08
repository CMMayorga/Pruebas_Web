
///Establecer atributos (name,value,href,title,alt,src,width,id,class,style....)

//Attr individual
$("h1").attr("class","foo");
//document.getElementsByTagName("h1")[0].className="foo";


//Attr múltiple
$("a").attr({
    "href":"index.html",
    "title":"Título del enlace",
    "alt":"Descripción",
    "style":"color:blue;font-size:2em"
});
//document.getElementsByTagName("a")[0].href="index.html";
//document.getElementsByTagName("a")[0].title="Título del enlace";



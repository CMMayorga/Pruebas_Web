
// array= listado de datos accesibles por su posición
var alumnos = new Array("Alejandro","Eduardo","Shina","Sergio");

//Extraer dato
document.write( alumnos[0]+" viene siempre a clase<br>" );

//Listado de alumnos
document.write("<ul>");
    for( var i=0; i<alumnos.length ; i++ ){
        document.write( "<li>"+alumnos[i]+"</li>" );
    }
document.write("</ul>");


//Listado de alumnos (pares en rojo)
document.write("<ul>");
    for( var i=0; i<alumnos.length ; i++ ){
        if( i%2!=0 ){
            document.write( "<li><span>"+alumnos[i]+"</span></li>" );
        }else{
            document.write( "<li>"+alumnos[i]+"</li>" );
        }        
    }
document.write("</ul>");
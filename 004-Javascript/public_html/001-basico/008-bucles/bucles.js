
// for( inicialización de la variable ; condición ; incremento ){}

//Repetir sentencias 10 veces:
for(var i=0; i<10 ; i++){
    document.write("hola "+i+" <br>");
}

for(var i=0; i<10 ; i++){
    var a= i+1; //asignamos valor a la var a, pero sin afectar a la var i 
    //OJO var a= i++; porque estamos modificando el valor de i en cada vuelta
    document.write("hola "+a+" <br>");
}

//Repetir sentencias tantas veces cómo valor recogido
var result = prompt("¿Cuántos 'adios' quieres?","");
for( var i=0; i<result ; i++ ){
    document.write("adios<br>");
}

//Pintar por pantalla las letras que componen una palabra
var palabra="supercalifragilisticoespialidoso";
for( var i=0; i<palabra.length ; i++ ){
    document.write( palabra.charAt(i)+"<br>" ); 
}

//Pintar por pantalla la palabra con la primera letra roja
for( var i=0; i<palabra.length ; i++ ){
    
    if( i==0 ){
         document.write( "<span>"+palabra.charAt(i)+"</span>" ); 
    }else{
         document.write( palabra.charAt(i) ); 
    }
    
}

//Pintar por pantalla la palabra con la última letra roja
for( var i=0; i<palabra.length ; i++ ){
    
    if( i==palabra.length-1 ){
         document.write( "<span>"+palabra.charAt(i)+"</span>" ); 
    }else{
         document.write( palabra.charAt(i) ); 
    }
    
}

document.write("<br>");

var palabra ="cice";
//Pintar por pantalla la palabra con la primera y última letra roja
for( var i=0; i<palabra.length ; i++ ){
    
    if( i==0 ){
         document.write( "<span>"+palabra.charAt(i)+"</span>" ); 
    }else if( i==palabra.length-1){
        document.write( "<span>"+palabra.charAt(i)+"</span>" ); 
    }else{
         document.write( palabra.charAt(i) ); 
    }
    
}









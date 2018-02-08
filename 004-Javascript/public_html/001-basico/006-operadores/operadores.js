document.write("<h2>OPERADORES DE ASIGNACION (=) (+=) (-=)</h2>");

//(=)
var a = 3;
var b = 4;
document.write("Las variables valen "+a+" y "+b+"<br>");

//(+=)
a+=4;
b+=6;
document.write("Las variables valen "+a+" y "+b+"<br>");

//(-=)
a-=1;
b-=4;
document.write("Las variables valen "+a+" y "+b+"<br>");

//(+=)
a+=b;
document.write("Las variables valen "+a+" y "+b+"<br>");

//Autoincremento

document.write("<h2>OPERADORES DE AUTOINCREMENTO (++) (--)</h2>");

a++;
b--;
document.write("Las variables valen "+a+" y "+b+"<br>");

//Operadores aritmeticos

document.write("<h2>OPERADORES ARITMETICOS (+) (-) (*) (/) (%)</h2>");

//(+)
var suma=a+b;
document.write("a+b= "+suma+"<br>");
//(-)
var resta=a-b;
document.write("a-b= "+resta+"<br>");
//(*)
var mult=a*b;
document.write("a*b= "+mult+"<br>");
//(/)
var div=a/b;
document.write("a/b= "+div+"<br>");
//(%)
var resto=a%b;
document.write("a%b= "+resto+" es un tipo de dato <span>"+typeof(resto)+"</span>");

//Operadores comparadores

document.write("<h2>OPERADORES COMPARACION (<) (>) (<=) (>=) (==) (!=) (===)</h2>");

//Operadores logicos
document.write("<h2>OPERADORES LOGICOS (&&) (||)</h2>");
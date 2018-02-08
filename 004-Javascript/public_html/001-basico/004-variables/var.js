//Tipos de comentario
/*Tipo de comentario*/

//Definimos la variables

var noDefinida;//Variable que esta declarada pero no definida
var nombre="Carlos Martin";//Variable de tipo string
var edad=58;//Variable de tipo number
var altura=1.8;//Variable de tipo number
var isWorking=true;//Variable de tipo boolean

//Nombres de variables NO PERMITIDOS vs SI PERMITIDOS
//3namevar vs namevar3= No numeros al princiapio
//var na me vs name/naMe= No espacios dentro del nombre
//var ñame vs na_me= No usar caracteres raros o acentos pero si barras bajas
//SON SENSIBLES A LAS MAYUSCULAS Y MINUSCULAS

var texto="Hola";
alert(texto);
console.log(texto);

//OBJETO
//attr length= devuelve el numero de caracteres de una cadena de texto (obtenedor);
console.log(nombre.length);
console.log(nombre.length);

//FUNCIONES UTILES PARA MANEJO DE CADENAS DE TEXTO
//Vamos a aplicar una funcion sobre un objeto, en este caso la variable que representa al texto

//funcion para transformae texto en mayusculas-> toUpperCase() | o minusculas-> toLowerCase()

console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());

//Funcion para encontrar un caracter por su posicion, empezando a contar desde 0->obj.charAt(pos)

console.log(nombre.charAt(0));

//Ultima letra-> pos=obj.length-1

//funcion para extraer una porcion de texto-> obj.substring(start-pos, end-pos)

console.log(nombre.substring(7));

//funcion que devuelve la posicion del caracter que estoy buscando por la izq, devuelve -1 si no lo encuentra-> obj.indexOF("caracter")

var fichero="foto.jpg";

console.log(fichero.substring(fichero.indexOf(".")));

//funcion para buscar y reemplazar-> obj.replace(search.replace)
console.log(nombre.replace("Carlos", "Javier"));

//funcion para saber con que tipo de variable trabajo-> typeof(var)
console.log(typeof(edad));

//funcion para buscar cooincidencias, si no encuentra devuelve null, es sensible al uso de mayusculas y minusculas-> obj.match("txt").
console.log(nombre.match("Carlos"));

//funcion que genera una caja de dialogo y recoge un resultado. Es un metodo de objetos de ventana- prompt("pregunta","valor")
var result=prompt("¿Cual es tu nombre?");
console.log(result);

//Practica
var escuela=prompt("¿Donde estudias?","");
var estudios=prompt("¿Que estudias?","");
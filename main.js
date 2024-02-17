//¿cómo empezamos a trabajar JS en nuestro proyecto interactivo?
//SIEMPRE vamos a trabajar los que es JS vinculado a un HTML. 
//Forma de vincularlo. 
//1) crear un main.js y vincularlo a lo que es HTML con la etiqueta script:src.
//SIEMPRE COLOCO EL SCRIPT AL FINAL DEL HTML Y LE INSERTO LA RUTA AL .JS
//PORQUE EL NAVEGADOR LEE DE ARRIBA HACIA ABAJO.

//Sintaxis del código.
//1)Comentarios: dos formas 
/* comentario en bloque*/
//comentario en una linea

//2) En js NO tengo en cuenta los especios en blanco (si los tiene en cuenta al momento de darle un nombre a una variable)
//3) CASE SENSITIVE: distingue entre en mayúsculas y minúsculas
// let estoEsUnEjemplo
// let estoesunejemplo (NO LO HAGAN! TENGAN PIEDAD, NO ES UNA BUENA PRÁCTICA)

//4) PODEMOS terminar las líneas de código sin ";", pero por buena práctica es necesario hacerlo.
//5) Hay palabras que son de tipo "reservadas": no se pueden usar como nombres de:
// variable, objeto, función, array, etc. 

//Tipos de datos: 
//1) tipos de datos PRIMITIVOS: 
// 14525 => number => lo usamos para operaciones matemática.
// "Este es un tipo de dato string" => soy un dato de cadena de caracteres.
//Los string van entre comillas dobles o simples. 

// true/false => tipo de dato booleando. Permite tomar solo uno de estos dos valores.
//(Lo vamos a usar en condicionales)

//null (nulo)

//undefined => es cuando el valor no está definido. 

//Variables: son espacios de memoria que resvervamos para:
// ALMACENAR INFORMACIÓN DURANTE LA EJECUCIÓN DEL PROGRAMA. 

//¿Cómo las declaro?
// let 1234alumno = ESTO NO ES CORRECTO. EN LA SINTAXIS DE JS, EL NOMBRE DE LA
//VARIABLE NO PUEDE EMPEZAR CON UN NÚMERO. 

//let nombre alumnos= ESTO TAMPOCO LO PUEDO HACER. NO PUEDO DEJAR ESPACIOS. 
//admite la ñ. NO ES RECOMENDABLE

// LA FORMA CORRECTA DE NOMBRAR UNA VARIABLE ES let nombreAlumno ó let nombre

//ASIGNAR UN VALOR A UNA VARIABLE. 
//Asigno un valor por medio de un operador de asignación "=" e inicializo la variable.

let nombreAlumno = "Rubi";
console.log(nombreAlumno); 

//¿puedo cambiar el nombre de esta variable? 
//SI, js me lo permite porque estoy usando la palabra reservada "let". 
//Lo reasigno con el nombre de la variable (sin let)

nombreAlumno = "luciana";
console.log(nombreAlumno);

//Constantes: 
// NO es lo mismo declarar una variable con "let" que con "const"
//¿POR QUÉ? porque la constante recibe un ÚNICO valor de asignación y declaración.
//Esto impide que yo después pueda modificar ese valor

// CONST LO USO SOLO SI ESTOY SEGURO QUE EL DATO QUE LE VOY A ASIGNAR NO LO VOY A VOLVER 
//A REASIGNAR EN OTRA PARTE DEL CÓDIGO. 

const pi = 3.1494547578; //ATENCIÓN: SI YO QUIERO USAR DECIMALES, USO PUNTO, NO USO COMA
console.log (pi);

/*pi = "luciana"; 
console.log(pi);*/ //No puedo reasignar como en el caso de let. Me da error

//Ejemplos donde me serviría const: un dni, iva, días de la semana.

//Cálculo de promedio de notas

//prompt pide el ingreso de dato al usuario en una ventana emergente o input.
//Si yo necesito calcular un promedio, necesito un tipo de dato number. 
//Como prompt me devuelve un string, no podría hacerlo. 
//Necesito que ese dato que ingresa el usuario se transforme en un dato de tipo number. 

//para transformar el tipo de dato de string a number voy a realizar un parse INT (entero) 
//o float (decimales) (recomiendo siempre el float, porque toma enteros y decimales. el int solo enteros)
alert("Bienvenido a su calculadora de promedio de notas");
let ingreseNombre = prompt("Ingrese su nombre");
let notaPrimerParcial = parseFloat (prompt ("Ingrese la nota de su primer parcial para la materia y si es decimal ingrese con (.: ej 7.5)"));
let notaSegundaParcial = parseFloat (prompt ("Ingrese la nota de su segundo parcial para la materia y si es decimal ingrese con (.: ej 7.5)"));

let notaPromedio = ( notaPrimerParcial + notaSegundaParcial)/2;

//concatenar un mensaje con string y variables.
alert( "El alumno: " + ingreseNombre + " ha sacado en su primer parcial: " + notaPrimerParcial + " y en su segundo parcial: " + notaSegundaParcial + " cuyo promedio es " + notaPromedio);
console.log( "El alumno: " + ingreseNombre + " ha sacado en su primer parcial: " + notaPrimerParcial + " y en su segundo parcial: " + notaSegundaParcial + " cuyo promedio es " + notaPromedio);
alert("Gracias por usar nuestro sistema, lo esperamos pronto.")

//prompt devuelve un string si le doy aceptar y si le doy cancelar devuelve null.
// con prompt recibo el string.

//alert: me muestra un mensaje tipo pop up que sale para el usuario, pero no da opciones de interacción.






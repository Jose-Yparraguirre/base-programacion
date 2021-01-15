// Puedo escribir comentarios de esta manera
/* o tambien puedo escribir comentarios de esta manera */

// ============================================ Variables ============================================

/*

Tipos de variables
- const : acceso local, solo lectura
- let   : acceso local, editable
- var   : acceso global, editable

*/ 

// Creación de variables
const nombre  = 'Aldair';
let nombre2 = 'Maria';
var nombre3 = 'José';

// Para la creación de variables mas largas, se usa el formato 'camelCase'
const nombreConApellido = 'Aldair Yparraguirre';
let nombreConApellido2 = 'Maria Lujan';
var nombreConApellido3 = 'José Yparraguirre';

// ** Tipos de contenido **
// String : Puede contener comillas dobles o simples
const variableString = "Esta es una variable string con comillas dobles";
const variableString2 = 'Esta es una variable string con comillas simples';

// Integer(Numeros enteros)
const variableNumeroEntero = 10;

// Float(Numeros Decimales) : Tienes que usar el punto
const variableNumeroDecimal = 1.25;

// Boolean(Verdad o mentira)
const variableBoolean = true;
const variableBoolean2 = false;

// Null(Variable nula)
const variableNull = null;

// Undefined(Variable indefinida) : No debemos Asignarlos
const variableIndefinida = undefined;


// ============================================ Variables con JSON ============================================
// Se utiliza para guardar una estructura compleja en una variable

/*

    [tipo] [clave] = {
        [subclave]: [valor],
        [subclave]: [valor]
    };

*/

let personaJSON = {
    nombre: 'José',
    apellido: "Yparraguirre",
    edad: 22
};


// ============================================ Operaciones Aritmenticas ============================================

// Opción 1
const num1 = 20;
const num2 = 20;
const resultado = num1 + num2; // El resultado seria 40

// Opción 2
const resultado = 1 + 2 // El resultado es 3


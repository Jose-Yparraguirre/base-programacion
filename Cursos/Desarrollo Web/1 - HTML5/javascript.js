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

// Sumar
const resultado = num1 + num2; 

// Restar
const resultado = num1 - num2; 

// Dividir
const resultado = num1 / num2; 

// Multiplicar
const resultado = num1 * num2; 

// Resto
const resultado = num1 % num2; 

// Potencia (Elevado a...)
const resultado = num1 ** num2; 

// Operaciones más complejas, nos podemos ayudar de los parentesis

const resultado = (5 * 2) + (10 / 2) // El resultado es 15


// ============================================ Manipulación de variables ============================================
const variable1 = 'Hola';
const variable2 = ' a todos';
const completa = variable1 + variable2; // El resultado es Hola a todos

// Con plantillas de etiquetadas
const nombre = 'Jose';
const texto = 'El nombre de esta persona es ${nombre}';

// Con la funcion concat
const nombre = 'Jose';
const apellido = ', se apellida Yparraguirre';
const edad = ', y tiene una edad de 22 años';
const textoCompleto = ''.concat(nombre, apellido, edad); // Resultado = 'Jose, se apellida Yparraguirre, y tiene una edad de 22 años'



// ============================================ Manipulación de String ============================================
const manipulandoString = 'Este es un texto de ejemplo';

// Convertir las letras en MAYUSCULAS
const letrasEnMayusculas = manipulandoString.toUpperCase();

// Convertir las letras en minisculas
const letrasEnMinusculas = manipulandoString.toLowerCase();

// Contador de caracteres
const cantidadDeCaracteres = 'Este es un texto';
const resultado = cantidadDeCaracteres.length();


// ============================================ Intercambiar tipos ============================================
// Numero entero(Integer) o float(Decimal) a texto(String)
const entero = 1;
const decimal = 1.7;

const resultado = entero + ''; // El resultado es 1 en el formato String
const resultado = entero.toString(); // El resultado es 1 en el formato String
const resultado = decimal.toString(); // El resultado es 1.7 en el formato String

// Número entero
const miNumero = parseInt('45');

// Número con decimales
const miDecimal = parseFloat('45.3');


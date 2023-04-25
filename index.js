//console.log("hola mundo")
/*console.log("hola mundo 2")
console.log("hola mundo 3")
console.log("hola mundo otra vez")
*/

//Hay 3 tipos de variables:

//1. var NO SE USA MAS
//2. let
//3. const

//var miPrimerVariable = ("funcion") //camel case
//var mi_primer_variable = ("funcion") //kebab case

/*
//VARIABLE LET
let var1 = 10;

//VARIABLE VAR
var var2 = 20;

function prueba(){
    var variableVAR = 10;
    if (variableVAR == 10){
        let variableLET = 20;
        console.log(variableLET)
    }
    console.log(variableLET);
};

prueba()

const valor1 = 20
const valor2 = 10

let resultado = valor1 + valor2
//resultado = 30

resultado = valor1 - valor2
//resultado = 10

resultado = valor1 * valor2
//resultado = 200


const palabra1 ="Coder"
const palabra2 ="House"
const blanco=" "

let resultado = palabra1 + blanco + palabra2
let resultado2 = `${palabra1} ${palabra2}` // ``, ``
*/

let nombre = prompt("Ingrese su nombre:")
console.log("Hola" + " fac" + nombre)

for (let i = 1; i <= 10; i++){
    
    if (i*j == 8){
        console.log("Se encontro el numero 10")
    }
    continue
    for (let j = 1; j <= 10; j++){
        console.log(` ${1} * ${j} = ${i} * ${j} `)
    }
    continue
}
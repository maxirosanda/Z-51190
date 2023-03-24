/*
function saludo(){
    alert("Hola")
}

function ingresarNombre(){
    const nombre = prompt("ingrese un nombre")
    alert(nombre)
}

*/
const sumar = (valor1,valor2) => valor1 + valor2

//sumar(12,23)
//sumar(10,30)
//sumar(35,15)

function resta(valor1,valor2){
     return valor1 - valor2
}
function mostrar(mensaje){
    alert(mensaje)
}
//console.log(sumar(2,2))
let resultado = sumar(5,10)
let resultado2 = sumar(10,77)

/*
function calculadora(valor1,valor2,operacion){
    switch(operacion){
        case "+":
            return valor1 + valor2
        case "-":
            return valor1 - valor2
        case "*":
            return valor1 * valor2
        case "/":
            return valor1 / valor2
        default:
            return 0
    }
}

let resultado3 = calculadora(12,3,"-")
console.log(resultado3)
*/
/*
let valorA = 12

function funcionA(){
    let valorA = 5
    if(true){
        let valorA = 3
        
    }

}
funcionA()
console.log(valorA)
*/


const funcionB  = mensaje =>  mensaje

console.log(funcionB("coder"))
console.log(funcionB("house"))



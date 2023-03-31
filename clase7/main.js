/*
const autos = []

autos.push("alfa romeo")
autos.push("fiat")
console.log(autos)
const sumarRango = (valorMin,valorMax) => {
  let total = 0
  for (let i = valorMin; i <= valorMax; i++) {
      total +=  i
  }
  return total
}

console.log(sumarRango(1,20))
//console.log(total)  //  55
*/

/*
const mayorQue = (numero) =>{
    return (m) => m > numero
}

const mayorQue20 = mayorQue(20)
console.log(mayorQue20)
console.log(mayorQue20(30))
const mayorQue40 = mayorQue(40)
console.log(mayorQue40(40))
*/


/*
const asignarOperacion = (operacion) =>{
  switch(operacion){
    case "suma":
      return (valor1,valor2) =>  valor1 + valor2
    case "resta":
      return (valor1,valor2) => valor1 - valor2
    case "multi":
      return (valor1,valor2) => valor1 * valor2
    case "divi":
      return (valor1,valor2) => valor1 / valor2
    
  }
}

const suma = asignarOperacion("suma")
console.log(suma)
console.log(suma(10,23))
const resta = asignarOperacion("resta")
console.log(resta)
console.log(resta(10,4))
*/

const funcion1 = (funcion) =>{
    funcion("hola")
 }
 
 funcion1( console.log )
 
 const arr = [12,124,123,342,23]
 const arr2 = ["hola","chau","coder"]
 const porCadaUno = (arr,fn) => {
   for(const el of arr){
     fn(el)
   }
 }
 porCadaUno(arr,alert)
 
 
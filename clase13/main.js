// Condicionales con retorno
/*
const numero = 5

const ejemplo1 = numero >=5 ? "este numero es mayor a 5" : "el numero es menor a 5"

console.log(ejemplo1)

const ejemplo1_1 = ((parametro)=>{
    if(parametro >= 5){
        return "este numero es mayor a 5"
    }
    else{
        return "el numero es menor a 5"
    }
})(numero)

console.log(ejemplo1_1)

//-----------------------------------------------------
const ejemplo2 = numero >=6 && "el valor mayor a 6"
console.log(ejemplo2)

const ejemplo2_2 = ((parametro)=>{
    if(parametro >=6 ){
        return "el valor mayor a 6"
    }else{
        return false
    }
})(numero)
console.log(ejemplo2_2)
*/
//----------------------------------------
/*
const numero2 = 0
const ejemplo3 = numero2 || "sale el segundo valor"
console.log(ejemplo3)

const ejemplo3_3 = ((parametro)=>{
    if(parametro === null || parametro === undefined || isNaN(parametro) || parametro === 0 || parametro ==="" || parametro === false){
        return "sale el segundo valor"
    }else{
        return parametro
    }
   
})(numero2)
console.log(ejemplo3_3)

//---------------------------------------------------

const ejemplo4 = numero2 ?? "sale el segundo valor"
console.log(ejemplo4)

const ejemplo4_4 = ((parametro)=>{
    if(parametro === null || parametro === undefined){
        return "sale el segundo valor"
    }else{
        return parametro
    }
})(numero2)
console.log(ejemplo4_4)
*/
//--------------------------------------------

const producto = {
    nombre: "Ibuprofeno 600",
    desc: "jkfgsdjg kjgsfdgj sdjmposdj",
    precios: {
        medio: 1200,
        marca: 1500
    }
}
/*
const producto2 = null
console.log(producto?.nombre || "el producto no existe")
console.log(producto2?.nombre || "el producto no existe")
console.log(producto?.precios?.precioEconomico || "este producto no esta en stock")
*/
// 1) Destructuracion
/*
let nombre = producto.nombre
let precioEconomico = producto.precios.economico
let precioMedio = producto.precios.medio
let precioMarca = producto.precios.marca
*/
/*
let {nombre:precioNombre,precios:{medio}} = producto
console.log(precioNombre)
console.log(medio)
*/
//2) destructuracion en parametros
/*
const verPrecioMedio = ({nombre,precios:{medio}}) =>{
    console.log("Nombre: " + nombre + " Precio Medio: " + medio)
}
verPrecioMedio(producto)
*/
//Spread (desparramar)
const nombres1 = ["Juan", "Julieta", "Carlos", "Mariela"]
console.log(nombres1)
// 1) spread ... del array
console.log(...nombres1) // Juan Julieta Carlos Mariela
const numeros = [123,43234,5345,52,44,4324]
console.log(Math.max(...numeros))
const nombres2 = ["Carlos", "Mariela"]
const nombresCompletos = [...nombres1,...nombres2]
console.log(nombresCompletos)
const usuario1 = {
    nombre: "Juan",
    edad: 24,
    curso: "Javascript"
}

const usuario2 = {...usuario1}
usuario2.nombre = "kjvgsjag"
console.log(usuario1)

const sumar = (...numeros) =>{

    return numeros.reduce((acumular,numero)=> acumular + numero ,0)
}

console.log(sumar(2313,2321,32 ,3424,34234,2313,23213,231))














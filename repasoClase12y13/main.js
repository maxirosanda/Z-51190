// Condiciones con retorno
const valor = "Mundo Mundo"

const variableUno = valor === "Hola Mundo" ? "Hola señor" : "No me saludo"
const variableDos = valor === "Hola Mundo" && "Hola señor buenos dias"
const variableTres =  valor || "el valor no es valido"
const variableCuatro = valor ?? "el valor no es valido"
//desestructuracion
const objeto ={
    nombre:"jgiosg",
    precios:{
        economico:124,
        medio :234
    }
}
const variableCinco = objeto?.precios?.economico ?? "no tiene precio economico"

const {nombre:nombrePrecio,precios:{economico:precioEconomico}} = objeto
console.log(nombrePrecio)
console.log(precioEconomico)

const mostrarDatos = ({nombre,precios:{economico}})=>{
    console.log("el nombre es: " + nombre + "y el precio economico es: " + economico)
}

mostrarDatos(objeto)

// spread (desparramar)
const objeto2 = {
    ...objeto,
    desc: "fjgdfjgip",
    nombre:"maxi"
}
console.log (objeto2)

const numeros1 = [13,23213,3434,3443,34]
const numeros2 = [12,23,3453,4545,56]
const numeros3 = [...numeros1,...numeros2]
console.log(numeros3)

const sumar= (...numeros) =>{
    console.log(numeros)
}

sumar(213,231,23213,232,2332)


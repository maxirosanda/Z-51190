// Objeto Math

const numeros = [12,232,325,656,76,87,4]
const EULER = Math.E
console.log(EULER)
const PI = Math.PI
console.log(PI)
const maximo = Math.max(...numeros)
console.log(maximo)
const minimo = Math.min(12,232,325,656,76,87,4)
console.log(minimo)
const numero = 12.7
console.log(Math.ceil(numero)) // redondea para arriba
console.log(Math.floor(numero)) // redondea para abajo
console.log(Math.round(numero)) // redondea al numero entero mas cercano
console.log(Math.sqrt(16)) // calculan la raiz
const aliatorio = Math.random() // genera numero aliatorio 0 y 1
console.log(aliatorio)
const aliatorio1000 = Math.random() * 1000// genera numero aliatorio 0 y 99
console.log(aliatorio1000)
const aliatorio100y900 = Math.random() * 900 + 100 // genera numero aliatorio 100 y 1000
console.log(aliatorio100y900)
console.log(Math.round(aliatorio100y900))


// Objeto Date
const fechaActual = new Date()
console.log(fechaActual)
const cumpleMaxi = new Date(1987,6,18)
console.log(cumpleMaxi)
const casiNavidad = new Date(2023,11,24,23,59,59)
console.log(casiNavidad)
console.log(cumpleMaxi.getDate()) //muestra el dia
console.log(cumpleMaxi.getMonth()) // muestra el mes (de 0 a 11)
console.log(cumpleMaxi.getFullYear()) //muestra el año
console.log(cumpleMaxi.getDay()) //dia de semana (1 al 7)
console.log(cumpleMaxi.toLocaleDateString()) // ver solo la fecha si la hora
console.log(fechaActual.toLocaleString()) // ver solo fecha y hora
console.log(casiNavidad - fechaActual) // tiempo pero en milisegundos
console.log((Math.round((casiNavidad - fechaActual)/86400000))) //calcular dias para que sea navidad





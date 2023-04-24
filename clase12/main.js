let num = 10

//num = num + 1
//num+=1
num++
console.log(num)

/*
if(num >= 11){
    console.log("es mayor")
}else{
    console.log("es menor")
}
*/
//num >= 12 ? console.log("es mayor") : console.log("es menor")
/*
let esMayor
if(num >= 12){
    esMayor = "es mayor"
}else{
    esMayor = "es menor"
}
*/

//1) Operador Ternario
/*
const esMayor = num >= 12 ? "es mayor" : "es menor"
console.log(esMayor)
*/
//2) Operador logico and
/*
const nombre = "maxi"
const pasar = nombre == "maxi" && "usted puede pasar"
console.log(pasar)
*/
//3) Operador logigo or (||)
//si el valor primero es (0 - "" - false - null - undefined - NaN) queda el valor despues del ||
/*
console.log(0 || "sale el segundo")
console.log(false || "sale el segundo")
console.log("" || "sale el segundo")
console.log(null || "sale el segundo")
console.log(undefined|| "sale el segundo")
console.log(NaN || "sale el segundo")

console.log("hola" || "sale el segundo")
console.log(123 || "sale el segundo")
console.log(true || "sale el segundo")
console.log([] || "sale el segundo")
console.log({} || "sale el segundo")
*/
//4) Operador Nullish Coalescing
//si el primer valor es (null o undefined) queda el segundo valor
/*
console.log(null ?? "sale el segundo")
console.log(undefined ?? "sale el segundo")

console.log("" ?? "sale el segundo")
console.log(0 ?? "sale el segundo")
console.log(false ?? "sale el segundo")
console.log(NaN ?? "sale el segundo")
console.log("Hola " ?? "sale el segundo")
console.log(122 ?? "sale el segundo")
console.log(true ?? "sale el segundo")
console.log([] ?? "sale el segundo")
console.log({} ?? "sale el segundo")
*/
//5) Acceso condicional a un objeto
/*
const usuario = null
console.log( usuario?.nombre || "El usuario no existe" )

const usuarioCurso = {
    nombre:"maxi",
    apellido:"rosanda",
    edad:35,
    cursos: {
        js:40000,
        dw:35000
    }
}

console.log(usuarioCurso?.cursos?.js || "no esta anotado")
*/

const usuario = {
    nombre:"marcelo",
    edad:23,
    apellido:"fernandez"
}
/*
let nombre = usuario.nombre
nombre = "hernan"
let edad = usuario.edad
edad = 24
let apellido = usuario.apellido
*/
let {nombre, edad, apellido} = usuario
nombre = "maria"
console.log(nombre)
console.log(usuario)


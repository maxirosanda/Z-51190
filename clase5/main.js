//Objetos Literales
/*
const persona1 = {
    nombre:"Homero",
    edad:39,
    direccion:"siempreviva 764",
    apellido:"simpson"
}
const persona2 = {
    nombre:"bart",
    edad:10,
    direccion:"siempreviva 764",
    apellido: "simpson"
}*/
// Funcion Contructor
/*
    function Persona(nombre ,apellido ,edad ,direccion){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.direccion = direccion
        this.hablar = () =>{
            alert("Hola me llamo " + this.nombre)
        }
    }

*/
// Clases 
    class Persona {
        constructor(nombre,apellido,edad,dirreccion){
            this.nombre = nombre
            this.apellido = apellido
            this.edad = edad
            this.dirreccion = dirreccion
        }
        hablar(){
            alert("Hola me llamo " + this.nombre)
        }
    }
const persona1 = new Persona("Homero","Simpson",39,"Siempreviva 764")
const persona2 = new Persona("Bart","simpson",10,"Siempreviva 764")
alert(persona1.nombre) 
persona2["edad"] = 11
persona2.hablar()

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase()
        this.precio  = parseFloat(precio)
        this.vendido = false
    }
    sumaIva() {
        this.precio = this.precio * 1.21
    }
    vender() {
        this.vendido = true
    }
}
const producto1 = new Producto("arroz", "125")
const producto2 = new Producto("fideo", "50")
console.log(producto1.precio)
console.log(producto2.precio)
producto1.sumaIva()
console.log(producto1.precio)
producto2.sumaIva()
console.log(producto2.precio)
producto1.vender()
console.log(producto1.vendido)


/*
let texto = "soy Un texto"
console.log(texto.toLowerCase())
*/
/*
alert("nombre: " + persona2.nombre + " apellido: " + persona2.apellido + " edad: " + persona2.edad)
alert("nombre: " + persona1["nombre"] + " apellido: " + persona1["apellido"] + " edad: " + persona1["edad"])
let dato = prompt("ingrese el dato de homero que quiera ver")
console.log(persona1[dato])
*/



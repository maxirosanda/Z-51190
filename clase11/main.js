/*
//localStorage
localStorage.setItem("numero",123)
localStorage.setItem("texto","Hola mundo")
localStorage.setItem("booleano",true)
localStorage.setItem("array",[12,3434,5445,5656])
// los valores numericos usar parseFloat o parseInt
const numero= parseFloat(localStorage.getItem("numero"))
console.log(typeof(numero))
console.log(numero)

// los string quedan igual
const texto = localStorage.getItem("texto")
console.log(typeof(texto))
console.log(texto)

// los valores boolean usar una comparacion con "true"
const booleano = (localStorage.getItem("valor3") === "false")
console.log(typeof(booleano))
console.log(booleano)

const array = localStorage.getItem("array").split(",")
console.log(array)
// metodo para eliminar un valor almacenado
//localStorage.removeItem("numero")
// metodo para eliminar todo lo almacenado
//localStorage.clear()

//sessionStorage
sessionStorage.setItem("texto2","chau")
const texto2 = sessionStorage.getItem("texto2")
console.log(texto2)
sessionStorage.removeItem("texto2")
sessionStorage.clear

// JSON (JSON.stringify JSON.parse)
const objeto1 = {
    nombre: "televisor",
    precio: 125000
}
localStorage.setItem("objeto1",JSON.stringify(objeto1))
const objeto1Alamacenado =JSON.parse(localStorage.getItem("objeto1"))


//Ejemplo Json con array de productos
const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];

localStorage.setItem("productos", JSON.stringify(productos))

const productosAlmacenados = JSON.parse(localStorage.getItem("productos"))

productosAlmacenados.forEach((producto)=>{
    alert("Nombre:" + producto.nombre)
})
*/

// Ej: Recurar datos y reinstanciarlo
const productos = []
class Producto {
    constructor(nombre,precio,stock){
        this.nombre = nombre,
        this.precio = precio,
        this.stock = stock
    }
    iva(){
        this.precio =  this.precio * 1.21
    }
}

const producto1 = new Producto("Fideos",150,30)
const producto2 = new Producto("cafe",300,30)
productos.push(producto1,producto2)

localStorage.setItem("productos",JSON.stringify(productos) )

const productosAlmacenados = JSON.parse(localStorage.getItem("productos")) 

const productosRecuperados = []
for(const producto of productosAlmacenados)
    productosRecuperados.push(new Producto(producto.nombre,producto.precio,producto.stock))

console.log(productosRecuperados)

//
/*
// modificar un objeto desde una funcion externa al objeto
const productos = []


const producto1 = {
    nombre:"Fideos",
    precio:150,
    stock:30
}
const producto2 = {
    nombre:"Cafe",
    precio:30,
    stock:30
}

const iva = (objeto) =>{
 objeto.precio = objeto.precio * 1.21
}
productos.push(producto1,producto2)

localStorage.setItem("productos",JSON.stringify(productos) )

const productosAlmacenados = JSON.parse(localStorage.getItem("productos")) 
console.log(productosAlmacenados)
iva(producto1)
console.log(producto1)
*/
const productos = []
class Producto{
    constructor(nombre,precio,stock){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }

}

const crearProducto = () =>{
    const productoCarrito = document.querySelector("#crearProducto")
    productoCarrito.addEventListener("submit",(e)=>{
        e.preventDefault()
        const datos = e.target.children
        const producto = new Producto(datos["nombre"].value,parseFloat(datos["precio"].value) , parseInt(datos["stock"].value))
        productos.push(producto)
        productoCarrito.reset()
        console.log(productos)
    })
    
}

const totalProductos = () => {
    const btnTotal = document.querySelector("#btnTotal")
    btnTotal.addEventListener("click",()=>{
        const total = productos.reduce((acc,el)=> acc + el.precio * el.stock,0)
        console.log("El precio total es: " + total)
    })

}
totalProductos()
crearProducto()

/*
const producto1 = {
    nombre:"Televisor smart 50",
    descripcion:"dgsgsdg sdgsdgsdg sdgsdgsd",
    precio:150000,
    stock:10
}


const producto2 = {
    nombre:"Heladera 350lt",
    descripcion:"dfsdgsg dsgdsgsdg sdgsdgsd gsgdgsg",
    precio:160000,
    stock:15
}

let confirma = true
console.log(confirma)
while(confirma){
    console.log("paso por el while")
    confirma = confirm("Quiere continuar")
}
*/

const productos = [
    {
        id:1,
        nombre:"televisor 32 pulgadas",
        precio:150000,
        stock:12
    },
    {
        id:2,
        nombre:"televisor 14 pulgadas",
        precio:90000,
        stock:120
    },
    {
        id:3,
        nombre:"televisor 14 pulgadas",
        precio:90000,
        stock:120
    }
]
let count = 4
const verProducto = (producto)=>{
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "tarjeta"
    tarjetaProducto.innerHTML = `
                                <h3>${producto.nombre}</h3>
                                <p>Precio: ${producto.precio}</p>
                                <p>Stock: ${producto.stock}</p>
                                <button>Editar</button>
                                <button>Borrar</button>
    `
    contenedorProductos.append(tarjetaProducto)
}
const crearProducto = document.querySelector("#crearProducto")
    crearProducto.addEventListener("submit",(e)=>{
    e.preventDefault()
    const datos = e.target.children
    const producto = {
        id: count,
        nombre:datos["nombre"].value,
        precio:datos["precio"].value,
        stock:datos["stock"].value,
        fecha: new Date()
    }
    count++
    productos.push(producto)
    crearProducto.reset()
    verProducto(producto)
    console.log(productos)
})

const contenedorProductos = document.querySelector("#contenedorProductos")
productos.forEach((producto)=>{
    verProducto(producto)

})
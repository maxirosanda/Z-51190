
const productos = JSON.parse(localStorage.getItem("productos")) || []  
console.log(productos)
let idGenerador = 1
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
        id: idGenerador,
        nombre:datos["nombre"].value,
        precio: parseFloat(datos["precio"].value),
        stock: parseInt(datos["stock"].value),
        fecha: new Date()
    }
    idGenerador++
    productos.push(producto)
    localStorage.setItem("productos",JSON.stringify(productos))
    crearProducto.reset()
    verProducto(producto)
})

const contenedorProductos = document.querySelector("#contenedorProductos")
productos.forEach((producto)=>{
    verProducto(producto)

})


const productos = JSON.parse(localStorage.getItem("productos")) || []  
console.log(productos)
let idGenerador = 1

const mensaje = (texto) =>{
    Toastify({
        text: texto,
        duration: 2000,
        style:{
            background:"blueviolet"
        }
        }).showToast();
}
const verProducto = ({nombre,precio,stock})=>{
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "tarjeta"
    tarjetaProducto.innerHTML = `
                                <h3>${nombre}</h3>
                                <p>Precio: ${precio}</p>
                                <p>Stock: ${stock}</p>
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
    mensaje("Producto Creado")

})

const contenedorProductos = document.querySelector("#contenedorProductos")
productos.forEach((producto)=>{
    verProducto(producto)

})

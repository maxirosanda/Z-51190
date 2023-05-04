const productosCarrito = (JSON.parse(localStorage.getItem("productosCarrito")) ?? [])
const agregarCarrito = (id) =>{
    
    const formularioagregarCarrito = document.querySelector("#carrito" + id)
    formularioagregarCarrito.addEventListener("submit",(e)=>{
        e.preventDefault()
        const datos = e.target.children
        const productoCarrito = {
            id:id,
            cantidad:datos["cantidad"].value
        }
        productosCarrito.push(productoCarrito)
        localStorage.setItem("productosCarrito",JSON.stringify(productosCarrito))
        formularioagregarCarrito.reset()
        mensaje("Se agrego un producto al carrito")

    })
}

const verProductoCarrito = (productoCarrito) =>{
    const contenedorProductosCarrito = document.querySelector("#carrito")
    const productoCompleto = productos.find((producto)=> producto.id == productoCarrito.id)
    console.log(productoCarrito)
    if(productoCompleto){
        alert("no hay productos en el carrito")
        localStorage.setItem("productosCarrito",JSON.stringify([]))
    }else{
        const tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "producto"
        tarjetaProducto.id = "producto" + productoCompleto.id
        tarjetaProducto.innerHTML = `
            <img src="../src/img/tv-with-wide-screen.jpg" alt="">
            <p>${productoCompleto.nombre}</p>
            <p>${productoCompleto.precio}</p>
            <p>Cantidad ${productoCarrito.cantidad}</p>
           `
            contenedorProductosCarrito.append(tarjetaProducto)
    }
    
}
const verProductosCarrito = () =>{
    productosCarrito.forEach(productoCarrito => {
        verProductoCarrito(productoCarrito)


    })
    
}

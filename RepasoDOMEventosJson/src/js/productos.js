

const productosLiterales = (JSON.parse(localStorage.getItem("productos")) ?? [])
const productos = []
productosLiterales.forEach((producto)=>{
    productos.push(new Producto(
        producto.id,
        producto.nombre,
        producto.descrip,
        producto.stock,
        producto.precio
    ))
})

const borrarProducto = (id) =>{
    const borrarProductoBtn = document.querySelector("#btnBorrar" + id)
    borrarProductoBtn.addEventListener("click",()=>{
        const index = productos.findIndex((producto)=> producto.id == id)
        productos.splice(index,1)
        localStorage.setItem("productos",JSON.stringify(productos))
        const tarjetaProducto = document.querySelector("#producto" + id)
        tarjetaProducto.remove()
        mensaje("se borro el producto correctamente")
    })

}
const editarProducto = (id) =>{
    const editarProductoForm = document.querySelector("#editar" + id)
    editarProductoForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        const datos = e.target.children
        const index = productos.findIndex((producto)=> producto.id == id)
        productos[index].nombre = datos["nombre"].value
        productos[index].descrip = datos["descrip"].value
        productos[index].precio = datos["precio"].value
        productos[index].stock = datos["stock"].value
        localStorage.setItem("productos",JSON.stringify(productos))
        mensaje("se actualizo correctamente el producto")
    })
}
const verProducto = (producto) =>{
    const ContenedorProductos = document.querySelector("#productos")
    const tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "producto"
        tarjetaProducto.id = "producto" + producto.id
        tarjetaProducto.innerHTML = `
            <img src="../src/img/tv-with-wide-screen.jpg" alt="">
            <form class="editar" id="editar${producto.id}">
                <input type="text" name="nombre" value="${producto.nombre}">
                <input type="text" name="descrip" value="${producto.descrip}">
                <input type="number" name="precio" value="${producto.precio}">
                <input type="number" name="stock" value="${producto.stock}">
                <button class="btn" type="submit">Editar</button>
            </form>
            <button class="btn" id="btnBorrar${producto.id}">Borrar</button>`
    ContenedorProductos.append(tarjetaProducto)
}
const crearProducto = () =>{
    const formularioCrear = document.querySelector("#crearProducto")
    formularioCrear.addEventListener("submit",(e)=>{
        e.preventDefault()
        let idProducto = parseInt(localStorage.getItem("idProducto") || 0) 
        const datos = e.target.children
        const producto = new Producto(
            idProducto,
            datos["nombre"].value,
            datos["descrip"].value,
            datos["stock"].value,
            datos["precio"].value
            )
        productos.push(producto)
        localStorage.setItem("productos",JSON.stringify(productos))
        formularioCrear.reset()
        idProducto++
        localStorage.setItem("idProducto",idProducto)
        verProducto(producto)
        borrarProducto(producto.id)
        editarProducto(producto.id)
        mensaje("Se creo correctamente el produc")

    })
}

const verProductos = () =>{
    productos.forEach(producto => {
        verProducto(producto)
        borrarProducto(producto.id)
        editarProducto(producto.id)

    })
    
}






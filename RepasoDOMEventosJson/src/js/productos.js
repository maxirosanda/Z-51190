class Producto {
    constructor(id,nombre,descrip,stock,precio){
        this.id = id
        this.nombre = nombre
        this.descrip = descrip
        this.stock = parseInt(stock)
        this.precio = parseFloat(precio)
    }
    verEditar(){
        return `
        <img src="../src/img/tv-with-wide-screen.jpg" alt="">
        <form class="editar" id="editar${this.id}">
            <textarea type="text" name="nombre">${this.nombre}</textarea>
            <textarea type="text" name="descrip">${this.descrip}</textarea>
            <input type="number" name="precio" value="${this.precio}">
            <input type="number" name="stock" value="${this.stock}">
            <button class="btn" type="submit">Editar</button>
        </form>
        <button class="btn" id="btnBorrar${this.id}">Borrar</button>`
    }
    verTarjeta(){
        return `
        <img src="./src/img/tv-with-wide-screen.jpg" alt="">
        <h3>${this.nombre}</h3>
        <p>${this.descrip}</p>
        <span>Precio: ${this.precio} Pesos </span>
        <span> Stock:${this.stock}</span>
        <form id="carrito${this.id}">
        <label>Cantidad deseada</label>
        <input type="number" min="1" max="${this.stock}" name="cantidad" value="1"> 
        <button type="submit" class="btn">Carrito</button>
        </form>
        `
    }


}

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

const mensaje = (mensaje) =>{
    Toastify({
        text: mensaje,
        duration: 1000
        }).showToast();
}

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
const verProducto = (producto ,contenidoTarjeta) =>{
    const contenedorProductos = document.querySelector("#productos")
    const tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "producto"
        tarjetaProducto.id = "producto" + producto.id
        tarjetaProducto.innerHTML = contenidoTarjeta
    contenedorProductos.append(tarjetaProducto)
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
        verProducto(producto,producto.verEditar())
        borrarProducto(producto.id)
        editarProducto(producto.id)
        mensaje("Se creo correctamente el produc")

    })
}

const verProductos = () =>{
    productos.forEach(producto => {
        verProducto(producto,producto.verEditar())
        borrarProducto(producto.id)
        editarProducto(producto.id)

    })
    
}






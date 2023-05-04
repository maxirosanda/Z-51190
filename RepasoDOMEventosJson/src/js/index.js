const productosLiterales = JSON.parse(localStorage.getItem("productos")) ?? []
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
const contenedorProductos = document.querySelector("#productos")
productos.forEach(producto => {
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "producto"
    tarjetaProducto.innerHTML = `
        <img src="./src/img/tv-with-wide-screen.jpg" alt="">
        <h3>${producto.nombre}</h3>
        <p>${producto.descrip}</p>
        <span>Precio: ${producto.precio} Pesos </span>
        <span> Stock:${producto.stock}</span>
        <form id="carrito${producto.id}">
        <input type="number" min="1" max="${producto.stock}" name="cantidad" value="1"> 
        <button type="submit" class="btn">Carrito</button>
        </form>
        `
    contenedorProductos.append(tarjetaProducto)
    agregarCarrito(producto.id)
})

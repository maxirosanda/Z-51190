const productos = JSON.parse(localStorage.getItem("productos")) ?? []

const ContenedorProductos = document.querySelector("#productos")
productos.forEach(producto => {
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "producto"
    tarjetaProducto.innerHTML = `
        <img src="./src/img/tv-with-wide-screen.jpg" alt="">
        <h3>${producto.nombre}</h3>
        <p>${producto.descrip}</p>
        <span>${producto.precio} Pesos</span>
        <button class="btn">Carrito</button>`
ContenedorProductos.append(tarjetaProducto)
})

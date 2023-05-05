const carrito = (JSON.parse(localStorage.getItem("carrito")) ?? [])

const agregarCarrito = (id) =>{
    
    const formularioagregarCarrito = document.querySelector("#carrito" + id)
    formularioagregarCarrito.addEventListener("submit",(e)=>{
        e.preventDefault()
        const cantidad = e.target.children["cantidad"].value
        const index = carrito.findIndex((producto)=>producto.id == id)
        if(index == -1){
            const productoCarrito = {
                id:id,
                cantidad:cantidad
            }
           carrito.push(productoCarrito)
        }else{
            carrito[index].cantidad = cantidad
        }

        localStorage.setItem("carrito",JSON.stringify(carrito))
        mensaje("Se agrego un producto al carrito")
        setTimeout(()=>{
            location.href ='./pages/carrito.html';
        },2000)


    })
}

const borrarCarrito = () =>{
    const btnBorrarCarrito = document.querySelector("#btnBorrarCarrito")
    btnBorrarCarrito.addEventListener("click",()=>{
        localStorage.setItem("carrito",JSON.stringify([]))
        mensaje("se borro el carrito")
        setTimeout(()=>{
            location.href ='../index.html';
        },2000)
    })
}

const verProductoCarrito = (productoCarrito) =>{
    const listaCarrito = document.querySelector("#listaCarrito")
    const producto = productos.find((producto)=> producto.id == productoCarrito.id)

    if(producto != undefined ){
        const tdProducto = document.createElement("tr")
        tdProducto.innerHTML = `
            <td><img src="../src/img/tv-with-wide-screen.jpg" alt=""></td>
            <td><h3>${producto.nombre}</h3></td>
            <td>${producto.precio} $</td>
            <td>${productoCarrito.cantidad}</td>
           `
           listaCarrito.append(tdProducto)
    }else{
        const index = carrito.findIndex((producto)=> producto.id == productoCarrito.id)
        carrito.splice(index,1)
        localStorage.setItem("carrito",JSON.stringify(carrito))
    }
}
const verProductosCarrito = () =>{
    if(carrito.length == 0){
        const contenedorCarrito = document.querySelector("#contenedorCarrito")
        contenedorCarrito.innerHTML = "<h3>El carrito esta vacio</h3>"
        setTimeout(()=>{
            location.href ='../index.html';
        },2000)
    }
    carrito.forEach(producto => {
            verProductoCarrito(producto)
       
    })
    
}

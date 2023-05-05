// app de clima con then/catch
/*
const formCiudades = document.querySelector("#formCiudades")
formCiudades.addEventListener("submit",(e)=>{
    e.preventDefault()
    const ciudad = e.target.children["ciudad"].value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},ar&appid=71db4a3153716749adab248fafe3b05e&units=metric`)
        .then((resp)=>{
        return resp.json()
        }).then(datos =>{
            const verTemperatura = document.querySelector("#verTemperatura")
            verTemperatura.innerHTML = `La ciudad ${ciudad} tiene una temperatura de: ${datos.main.temp}°`
        }).catch((error)=>{
            verTemperatura.innerHTML = "volver a intentar"
            console.log(error)
        })
})
*/
//app de clima con async/await
/*
const formCiudades = document.querySelector("#formCiudades")
formCiudades.addEventListener("submit",async (e)=>{
    e.preventDefault()
    const ciudad = e.target.children["ciudad"].value
    try{
        const resp = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},ar&appid=71db4a3153716749adab248fafe3b05e&units=metric`)
        const datos = await resp.json()
        console.log(datos)
        const verTemperatura = document.querySelector("#verTemperatura")
        verTemperatura.innerHTML = `La ciudad ${ciudad} tiene una temperatura de: ${datos.main.temp}°`
    }catch(error){
        verTemperatura.innerHTML = "volver a intentar"
        console.log(error)
    }
    
})
*/
// Traer Pokemones de la pokeapi
/*
const pokeApi = async ()=>{
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon/5")  
    const pokemon = await resp.json()
    console.log(pokemon)
}
pokeApi()
*/
// CRUD de post (GET,POST,PUT,DELETE)
/*
const verPosts = async () =>{
    try{
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await resp.json()
        console.log(posts)
    }catch(error){
        console.log(error)
    }

}
const crearPosts = async () =>{
    try{
        const resp = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method:"POST",
                body:JSON.stringify({
                    title: "jknvkildsag",
                    body:"gfkldg jjgbpodgj sjdgposdgjsa jopogvasj",
                    userId:"2"
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  }
            }
           
        )
        const posts = await resp.json()
        console.log(posts)
    }catch(error){
        console.log(error)
    }

}

const actualizarPosts = async () =>{
    try{
        const resp = await fetch(
            "https://jsonplaceholder.typicode.com/posts/2",
            {
                method:"PUT",
                body:JSON.stringify({
                    title: "hhhhhhhhhhh",
                    body:"gfkldg jjgbpodgj sjdgposdgjsa jopogvasj",
                    userId:"2"
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  }
            }
           
        )
        const posts = await resp.json()
        console.log(posts)
    }catch(error){
        console.log(error)
    }

}


const borrarPosts = async () =>{
    try{
        const resp = await fetch(
            "https://jsonplaceholder.typicode.com/posts/4",
            {
                method:"PUT",
            }
           
        )
        const posts = await resp.json()
        console.log(posts)
    }catch(error){
        console.log(error)
    }

}
verPosts()
*/
 //-----------------------------------

 const verProductos = async () =>{
    const contenedorProductos = document.querySelector("#contenedorProductos")
    try{
        const resp = await fetch("./productos.json")
        const produtos = await resp.json()
        produtos.forEach(producto => {
            const tarjetaProducto = document.createElement("div")
            tarjetaProducto.className = "producto"
            tarjetaProducto.innerHTML = `<h3>${producto.nombre}</h3>`
            contenedorProductos.append(tarjetaProducto)
        });
    }catch(error){

    }
 }
 verProductos()
 

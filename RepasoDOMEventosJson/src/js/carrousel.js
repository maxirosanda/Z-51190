const verCarrousel = async () =>{
    try{
        const res = await fetch("../../carrousel.json")
        const items = await res.json()
        const carrousel = document.querySelector("#carrousel")
        items.forEach(item => {
            const carrouselItem = document.createElement("div")
            carrouselItem.className = `carousel-item ${item.clases}`
            carrouselItem.innerHTML = `
                <img src="./src/img/carrousel/${item.imagen}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${item.nombre}</h5>
                    <p>${item.descripcion}</p>
                </div>
            `
            carrousel.append(carrouselItem)


        })

    }catch(error){
        console.log(error)
    }
    
}
verCarrousel()
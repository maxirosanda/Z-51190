

const comprarProducto = document.querySelector("#comprarProducto")
comprarProducto.addEventListener("click",()=>{
    /*
    Swal.fire({
        title:"Gracias Por la Compra",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non mi eget velit ultrices elementum et vel urna.",
        icon:"success",
        showConfirmButton:true,
        showCancelButton:true,
        confirmButtonText:"Quiero",
        cancelButtonText:"No quiero",
        timer:5000,
        //imageUrl: 'https://unsplash.it/400/200',
        //imageWidth: 400,
        //imageHeight: 200,
        //imageAlt: 'Custom image',
        width: 500,
        color:"#fff",
        background:"#000",
        backdrop:"rgba(0,0,0,0.9)",
        position: 'center',


    
    }).then((resultado)=>{
       if(resultado.isConfirmed){
        Swal.fire({
            title:"confirmo"
        })
       }
       if(resultado.isDismissed){
        Swal.fire({
            title:"no confirmo"
        })
       }
    })
    */
    Toastify({
        text: "This is a toast",
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c92d)',
        
        },
        onClick: () => {
            Toastify({
                text: 'Clickeaste un Toast!',
                duration: 1500,
                position: 'left',
                destination: 'https://www.coderhouse.com'

            }).showToast()
        }


        }).showToast();
})


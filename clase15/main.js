/*
console.log("inicio")

setTimeout(() => { 
    console.log("hola")
},0)

console.log("fin")
*/
/*
console.time("letras")
for (let letra of "hola") {
    setTimeout(() => {
        console.timeLog("letras")
        console.log(letra)
    }, 6000);
   
}

for(let letra of "mundo"){
    setTimeout(() => {
        console.timeLog("letras")
        console.log(letra)
    }, 5000);
}

*/
/*
const fs1 = () =>{
    return true
}
const fs2 = () =>{
    return fs1()
}

const fs3 = () =>{
    return fs2()
}

const fs4 = () =>{
    return fs3()
}

const fs5 = () =>{
    return fs4()
}

console.log(fs5())
console.log("fin")
*/
/*
setInterval(() => {
    console.log("Tic")
}, 3000)
*/
/*
let counter = 0
const interval = setInterval(() => {
    counter++
    console.log("Counter: ", counter)

    if (counter >= 5) {
        clearInterval(interval)
        console.log("Se removió el intervalo")
    }
}, 1000)
*/
/*
console.log("Inicio")

const fin = setTimeout(() => {
    console.log("fin")
}, 2000)

clearTimeout(fin)
*/
console.log("inicio")
const eventoFuturo = (res) => {
    return new Promise((resolve,reject)=>{
            res ? resolve("aceptado"): reject("rechazado")
      
    }).then((respuesta)=>{
        console.log(respuesta)
    }).catch(()=>{
        alert("pedido rechazo, vuelva a intentar")
    }).finally(()=>{
        console.log("gracias por comunicarse")
    })
}
eventoFuturo(false)
console.log("fin")

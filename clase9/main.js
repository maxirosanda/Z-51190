/*
const titulo = document.getElementById("titulo") //seleccionar por id
console.log(titulo.innerText) // innerText toma el texto dentro del nodo
titulo.innerText = "Hola mundo soy maxi" // modificar el nodo texto que esta dentro de un nodo
const cajas = document.getElementsByClassName("caja") //seleccionar por clase 
cajas[0].innerHTML = "<h4>Esto es otra caja</h4><p>esto es un parrafo</p>" // remplaza el contenido del nodo

const items = document.getElementsByTagName("li") // seleccionar por etiqueta
console.log(items[2])
*/
/*
let paises = document.getElementsByClassName("paises")

for (const pais of paises) {
    console.log(pais.innerHTML)
}
const titulo = document.getElementById("titulo")
console.log( titulo.innerText ) // “Hola Mundo!”
// cambio el contenido del elemento
titulo.innerText = "Hola Coder soy maxi!"
console.log( titulo.innerText ) // "Hola Coder!"
*/
/*
const titulo = document.querySelector("#titulo") //seleccionar como si fuera css (un unico nodo)
titulo.className = "titulo text-center" // agregar clases a un elemento
const lista = document.getElementById("lista")
const item = document.createElement("li") // crear un nodo a travez de js
item.innerText = "item js"
lista.append(item) // agregar al final del nodo padre un elemento
const items = document.querySelectorAll("#lista li") //seleccionar como si estuvieramos en css
items[0].remove() // remover nodo (nodo = elemento)
*/

const personas = [
    {
        nombre:"Maxi",
        apellido:"Rosanda",
        edad:35
    },
    {
        nombre:"jose",
        apellido:"Perez",
        edad:25
    },
    {
        nombre:"Maria",
        apellido:"Gonzales",
        edad:20
    },
    {
        nombre:"Belen",
        apellido:"Perez",
        edad:35
    },
    {
        nombre:"Hernan",
        apellido:"Perez",
        edad:33
    }
]

const contenedorPersonas = document.getElementById("contenedorPersonas")
personas.forEach((persona)=>{
    const tarjetaPersona = document.createElement("div")
    tarjetaPersona.className = "tarjeta"
    tarjetaPersona.innerHTML = `
                                <h3>${persona.nombre} ${persona.apellido}</h3>
                                <p>Edad: ${persona.edad} años</p>
                                <button>Editar</button>
                                `
    contenedorPersonas.append(tarjetaPersona)

})
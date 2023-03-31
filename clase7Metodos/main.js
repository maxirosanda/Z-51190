const cursos = [
    {
        nombre:"js",
        precio:25000,
        duracion: 17

    },
    {
        nombre:"dw",
        precio:50000,
        duracion: 19

    },    
    {
        nombre:"react",
        precio:15000,
        duracion:20

    },
    {
        nombre:"dw",
        precio:60000,
        duracion: 19

    }
]
 //1 recorrer un array
cursos.forEach((el)=>{
    console.log("Curso: " + el.nombre + " Precio: " + el.precio)
})
//2 Buscar un elemento del array (trae el primero)
const cursoBuscado = cursos.find((el)=> el.nombre == "js") 
console.log(cursoBuscado)
//3 Fitrar elementos de un array
const precioMenor30000 = cursos.filter((el)=> el.precio < 30000 )
console.log(precioMenor30000)

//4 Ver si existe un elemento
const existe = cursos.some((el)=> el.nombre == "angular" )
console.log(existe)

//5 crear un nuevo array a partir del array original
const cursosMarzo2023 = cursos.map((el)=>{
    return {
        nombre: el.nombre,
        precio: el.precio * 1.20,
        duracion:el.duracion
    }
})
console.log(cursosMarzo2023)

//6 sirve para sacar un resultado final
const total = cursos.reduce((acc,el)=> acc + el.precio,0)
console.log(total)

//7.a Ordenar por numero
cursos.sort((a,b) => b.duracion- a.duracion)
console.log(cursos)

//7.b Ordenar alfabeticamente
cursos.sort((a, b) => {
    if (b.nombre > a.nombre) {
        return 1;
    }
    if (b.nombre < a.nombre) {
        return -1;
    }
    // a es igual a b
    return 0;
})
console.log(cursos)




/*
const numeros = [12,34,454,754.54,343.3]
const condiciones = [true,false,true]
const mixto = [2135,"hola",true,"chau"]
//alert(numeros[1])
numeros[1] = 33
//alert(numeros[1])
let resultado = numeros[1] + numeros[3]
//console.log(resultado)

const palabras = ["hola","chau señor","buenos dias","hector","jose","dos","tren"]
const palabras2 = ["gim", "pc"]
palabras.push("otro elemento") //1 agrega un valor al final
palabras.unshift("primer elemento") //2 agrega un valor al principio
palabras.pop() //3 elimina el ultimo
palabras.shift() //4 elimima el primero
palabras.splice(2,1) //5 elimina la ubicacion que pase por parametros
//console.log(palabras)
const palabras3 = palabras.concat(palabras2) //6 Concatenar arrays
const palabras4 = palabras.slice(0,4) //7 copiar (recortada) array
//console.log(palabras4)
const index = palabras.indexOf("jose") //8 buscar posicion
console.log(palabras)
console.log(index)
const encontrar = palabras.includes("maxi") // 9
//console.log(encontrar)
palabras.reverse() //10 invierte el array

//console.log(palabras.join(" * ")) //11 
*/
/*
for(let i = 0; i < palabras.length; i++){
    console.log(palabras[i])
}
*/
/*
//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));
*/
/*
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 1)
    } 
}

eliminar('Miguel')
console.log(nombres)
*/

const productos = []
let continuar
do{
    const nombre = prompt("ingrese nombre del producto")
    const precio = prompt("ingrese precio del producto")
    const stock = prompt("ingrese stock del producto")
    
    productos.push(
        {
        nombre:nombre,
        precio:precio,
        stock:stock
        }
    )
    continuar = confirm("quiere segir ingresando productos")
}while(continuar)

for(i = 0; i < productos.length; i++){
    alert("Nombre: " + productos[i].nombre + ", precio: " + productos[i].precio + ", stock: " + productos[i].stock )
}


for(let i = 1;i<=5;i++){
    const operacion = prompt("Colocar Operacion: 1) + 2) - 3) * 4) /")
    const valor1 = parseFloat(prompt("ingrese un numero")) 
    const valor2 =  parseFloat(prompt("Ingrese otro numero")) 
    let resultado = 0
    switch (operacion){
        case "+":
            resultado = valor1 + valor2
            break
        case "-":
            resultado = valor1 - valor2
            break
        case "*":
            resultado = valor1 * valor2
            break
        case "/":
            resultado = valor1 / valor2
            break
        default:
            resultado = "Operacion matematica desconocida"

    }
    alert(resultado)
}
console.log("sigue")

/*
for (let i = 0; i < 10; i++) {
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
*/

/*
for (let i = 1; i <= 5; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+ i + " Nombre: " + ingresarNombre);
}
*/
/*
const idPruducto = parseInt(prompt("ingrese el id del producto"))
for(let i = 1; i <= 10; i++){
    if(i == idPruducto){
        console.log(i)
        break
    }
    
}
*/
/*
const idcategoriaProducto = parseInt(prompt("ingrese id de categoria a sacar"))
for(let i = 1 ; i <= 20 ; i++){

    if(i == idcategoriaProducto){
        continue
    }
    console.log(i)

}
*/
/*
// ingreso de datos con while
let nombre = prompt("ingrese un nombre")
let dni = prompt("ingrese DNI")
let direccion = prompt("ingrese direccion")
while(nombre != "esc"){
    alert("Nombre: " + nombre + " DNI " + dni + " direccion: " + direccion)
    nombre = prompt("ingrese otro nombre o esc para")
    if(nombre != "esc"){
        dni = prompt("ingrese DNI")
        direccion = prompt("ingrese direccion")
    }
}
console.log("continua con el codigo")
*/
// ingreso de datos con do while

/*
let nombre;
do{
    nombre = prompt("ingrese un nombre");
    if(nombre != "esc"){
        let dni = prompt("ingrese DNI");
        let direccion = prompt("ingrese direccion");
        alert("Nombre: " + nombre + " DNI " + dni + " direccion: " + direccion);
    }
    
}while(nombre != "esc");
console.log("continua con el codigo");
*/
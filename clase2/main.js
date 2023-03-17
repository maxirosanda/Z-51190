
const nombre = prompt("Ingrese su nombre")
const edadPersona = prompt("ingrese su edad")
const NACIMIENTO = 2010
//alert("Mi nombre es: " + nombre + " y mi edad es: " + edadPersona)
let variable = false

if(nombre == "maxi" || nombre == "jose" || nombre == "julia" ){
    console.log("Hola " +  nombre + " sos usuario")
}
else{
    console.log("no es usuario de la pagina")
}

if(edadPersona >= 18 && (nombre == "maxi" || nombre == "jose" || nombre =="julia")){
    console.log("puede entrar por que es mayor de edad")
}else{
    console.log("no puede entrar a la pagina porque no es mayor de edad")
}

/*
let precio = "50";
console.log((precio == 50))
if (precio < 20) {
    alert("El precio es menor que 20");
}
else if (precio <= 49) {
    alert("El precio es menor o igual a 49");
}
else if(precio === 50){
 alert("el precio es 50")
}
else if (precio < 100) {
    alert("El precio es menor que 100");
}
else {
    alert("El precio es mayor que 100");
}
*/
/*
const numero = prompt("ingrese un mumero")

if(numero != 50){
    alert("el numero no es 50")
}else{
    alert("el numero es 50")
}
*/
/*
let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}
*/
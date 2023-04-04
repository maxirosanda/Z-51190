const personas = [
    {
        nombre:"maxi",
        apellido:"rosanda",
        dni:1
        
    },
    {
        nombre:"flavia",
        apellido:"esteiro",
        dni:2
    },
    {
        nombre:"marcos",
        apellido:"pereyra",
        dni:3
    }
]

const crearPersona = ()=>{
    const nombre = prompt("ingrese nombre de la persona")
    const dni = parseInt(prompt("Ingrese DNI de la persona"))
    const apellido = prompt("ingrese apellido") 
    personas.push({
        nombre:nombre,
        dni:dni,
        apellido:apellido
    })

}

const actualizarPesona = () =>{
    const dniBuscar = prompt("Ingrese el dni de la persona a actualizar")
    const index = personas.findIndex(persona => persona.dni == dniBuscar)
    if(index != -1){
        const cambiarNombre = confirm("quiere cambiar el nombre")
        if(cambiarNombre){
            const nombreNuevo = prompt("Ingrese el nombre a actualizar")
            personas[index].nombre = nombreNuevo
        }
        const cambiarDNI = confirm("quiere cambiar el DNI")
        if(cambiarDNI){
            const nuevoDni = parseInt(prompt("ingrese nuevo dni"))
            personas[index].dni = nuevoDni
        }
        const cambiarApellido = confirm("quiere cambiar el Apellido")
        if(cambiarApellido){
            const nuevoApellido = prompt("ingrese nuevo apellido")
            personas[index].apellido = nuevoApellido
        }
      
    }else{
        alert("no existe esa persona")
    }
    
}

const borrarPersona = () =>{
    const dniBuscar = prompt("Ingrese el dni de la persona a borrar")
    const index = personas.findIndex(persona => persona.dni == dniBuscar)
    if(index != -1){
        personas.splice(index,1)
    }
}

const verPesonas = () =>{
    personas.forEach((persona)=>{
        alert("Nombre y apellido: " + persona.nombre + " " + persona.apellido +  " DNI: " + persona.dni)
    })
}

const inicializar = (continuar) =>{
    while(continuar){
        const accion = prompt("ingrese accion:c:crear/a:actualizar/:b:borrar/v:ver")
        switch(accion){
            case "c":
                crearPersona()
                break
            case "a":
                actualizarPesona()
                break
            case "b":
                borrarPersona()
                break
            case "v":
                verPesonas()
                break
            default:
                alert("accion no valida")
        }
        continuar = confirm("quiera seguir editando los datos")
    }
    

}
inicializar(true)
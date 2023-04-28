class Producto {
    constructor(nombre,descrip,precio){
        this.nombre = nombre
        this.descrip = descrip
        this.precio = parseFloat(precio) 
        this.enviogratis = false
    }
    envioGratis(precioEnvio){
        this.precio = this.precio + precioEnvio
        this.envioGratis = true
    }
}
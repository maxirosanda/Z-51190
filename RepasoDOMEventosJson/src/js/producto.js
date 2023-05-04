class Producto {
    constructor(id,nombre,descrip,stock,precio){
        this.id = id
        this.nombre = nombre
        this.descrip = descrip
        this.stock = parseInt(stock)
        this.precio = parseFloat(precio)
        this.enviogratis = false
    }
    envioGratis(precioEnvio){
        this.precio = this.precio + precioEnvio
        this.envioGratis = true
    }
}
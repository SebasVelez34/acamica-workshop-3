let publicar = document.getElementById("publicar");
let nombreProducto = document.getElementById("nombreProducto");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");


class Producto{
    constructor( nombre, precio, cantidad, descripcion){
        //this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
    }    
}

let Productos = [];

function guardarInformacion(){
    console.log("entra a la funcion")
    let nuevoProducto = new Producto(nombreProducto.value, precio.value, cantidad.value);
    Productos.push(nuevoProducto);
};


publicar.addEventListener("click", guardarInformacion)
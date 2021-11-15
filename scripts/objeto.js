//simulacion carrito supermercado usando objetos

let costoTotal=0;
let productoIngresado;


class productoTienda{
    constructor( nombre , precio , codigo, tipo){  

         this.nombre = nombre;
         this.precio = precio;
         this.codigo = codigo;
         this.tipo = tipo;
    }
     
    infoProducto(){
 
         console.log("nombre producto: " +this.nombre);
         console.log("precio: "+ this.precio);
         console.log("codigo: " + this.codigo);
         console.log(this.tipo);
    }

    traerPrecio(){
         return this.precio
    }
 
}
                                                    
               
let harina = new productoTienda( "harina" , 65,1, "almacen"); //  -->  objeto producto(nombre,precio,codigo,tipo)
let leche = new productoTienda("leche", 85, 2, "lacteos");
let mermelada = new productoTienda("mermelada", 92, 3,"almacen");
let galletitas = new productoTienda("galletitas", 88, 4,"almacen");
let queso = new productoTienda("queso", 230, 5,"lacteos");


 function devolverPrecio(codigo) {    
    if(codigo==1){return harina.traerPrecio()}        
     else if(codigo==2){return leche.traerPrecio()}     
     else if(codigo==3){return mermelada.traerPrecio()}     
     else if(codigo==4){return galletitas.traerPrecio()}  
     else if(codigo==5){return queso.traerPrecio()}   
}


 function mostrarDetalle(codigo) {               
    if(codigo==1){return harina.infoProducto()}
    else if(codigo==2){return leche.infoProducto()}
    else if(codigo==3){return mermelada.infoProducto()}
    else if(codigo==4){return galletitas.infoProducto()}
    else if(codigo==5){return queso.infoProducto()}  
} 

function mostrarTotal(costo) {
    console.log("el costo total de la compra es : $"+costo);  
}
function mensajeError() {
    console.log("opcion incorrecta");   
}




 productoIngresado=parseInt(prompt(`elija un producto o 0 para terminar compra:

                                        0- terminar compra
                                        1- harina- $65
                                        2- leche-  $85
                                        3- mermelada-   $92
                                        4- galletitas-  $88
                                        5- queso-  $230
`))


while (productoIngresado != 0) {
   
   if(productoIngresado>0 && productoIngresado<=5) {  
        cantidadProducto=parseInt(prompt("cantidad de unidades?"))
        costoTotal=costoTotal+devolverPrecio(productoIngresado)*cantidadProducto; 
        console.log(mostrarDetalle(productoIngresado)); //problemas Undefined ??
        console.log("unidades : "+cantidadProducto); 
      

    }
  else{ mensajeError(); }

   productoIngresado=parseInt(prompt(`elija un producto o 0 para terminar compra:

                                          0- terminar compra
                                          1- harina- $65
                                          2- leche-  $85
                                          3- mermelada-   $92
                                          4- galletitas-  $88
                                          5- queso-  $230
`))
 
}
mostrarTotal(costoTotal);


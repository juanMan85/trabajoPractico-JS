//simulacion carrito de super

let costoTotal=0;
let productoIngresado;

//-------------constructor
class producto{
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

//---------ARRAY del almacen-------------


let productos=[ 
    harina = new producto( "harina" , 65,1, "almacen"),
    leche = new producto("leche", 85, 2, "lacteos"),
    mermelada = new producto("mermelada", 92, 3,"almacen"),
    galletitas = new producto("galletitas", 88, 4,"almacen"),
    queso = new producto("queso", 230, 5,"lacteos"),
]


               

 function devolverPrecio(codigo) {    
    if(codigo==1 || codigo=="harina"){return harina.traerPrecio()}        
     else if(codigo==2 || codigo=="leche"){return leche.traerPrecio()}     
     else if(codigo==3 || codigo=="mermelada"){return mermelada.traerPrecio()}     
     else if(codigo==4 || codigo=="galletitas"){return galletitas.traerPrecio()}  
     else if(codigo==5 || codigo=="queso"){return queso.traerPrecio()}   
}


 function mostrarDetalle(codigo) {               
    if(codigo==1 || codigo=="harina"){return harina.infoProducto()}
    else if(codigo==2 || codigo=="leche"){return leche.infoProducto()}
    else if(codigo==3 || codigo=="mermelada"){return mermelada.infoProducto()}
    else if(codigo==4 || codigo=="galletitas"){return galletitas.infoProducto()}
    else if(codigo==5 || codigo=="queso"){return queso.infoProducto()}  
}



//----------
harina= document.getElementById("harina");

console.log(harina.value)

//-------------comienzo de programa------
//cargas por usuario

let carritoDeCompra=[]


//-----------------

function ingresoUsuario(){
    let producto= document.getElementById("busquedaUsuario"); //captura input html producto
    let cantidad=document.getElementById("cantidadUsuario"); //captura input html cantidad

    
    console.log("producto: "+producto.value);           //control de carga 
    console.log("cantidad: "+cantidad.value);           //control de carga
   

    if((producto.value!="" || producto.value <6 || producto.value>0 )&& cantidad.value>=0 ) {
        
        devolverPrecio(producto.value)

        carritoDeCompra.push(new productoCarrito(producto.value, cantidad.value, devolverPrecio(producto.value)))
        let carritoJson=JSON.stringify(carritoDeCompra); //convirtiendo a JSON el objeto que entra al carrito

        localStorage.setItem("claveCarrito",carritoJson) //guardando en memoria con la key claveCarrito
        console.log(carritoJson);                        //chequeo
        console.log(typeof(carritoJson))                 //chequeo 
            
    }

};
//---------constructor objeto de carrito
class productoCarrito{
    constructor (productoIngresado, cantidadIngresada, precio){
        this.prod=productoIngresado;
        this.cant=cantidadIngresada;
        this.valor=cantidadIngresada*precio;
    }  
};  

//----------terminar compra-----
function terminarCompra(){
    
    let carritoFinal=JSON.parse(localStorage.getItem("claveCarrito"))//trae array de la memoria local
    console.log(carritoFinal);                             //chequeo 
    console.log(typeof(carritoFinal))                      //chequeo 
        
    let precioFinal=0;

    let tituloTicket=document.createElement("h2")
    tituloTicket.innerHTML ="Su Ticket :";
    mensaje.appendChild(tituloTicket);

    for (let prodCarrito of carritoFinal) {        
        console.log("nombre: "+prodCarrito.prod)
        console.log("cantidad: "+prodCarrito.cant)
        console.log("precio: "+prodCarrito.valor)
        precioFinal=precioFinal+prodCarrito.valor;                  //suma todos los productos del carrito

        let ticket=document.createElement("h5")                     //crea nodo h5
        ticket.innerHTML = `<p>producto: ${prodCarrito.prod}</p>   
                            <p>cantidad: ${prodCarrito.cant}</p>`;  
        mensaje.appendChild(ticket)                                 //engancha el nodo en el div con id: "mensaje"
        

    }

  
    let parrafo=document.createElement("h3")                        //crea nodo suelto
    parrafo.innerHTML = "el precio final es: "+precioFinal ;        //propiedad de nodo innerHTML 
    mensaje.appendChild(parrafo)                                    //engancha el nodo suelto <p> al <div> con id: "mensaje" ----muestra al usuario en pantalla


   
}




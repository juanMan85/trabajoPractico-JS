
let costoTotal=0;



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
    harina = new producto( "harina" , 80,1, "almacen"),
    leche = new producto("leche", 95, 2, "lacteos"),
    mantequilla = new producto("mantequilla", 350, 3,"almacen"),
    miel = new producto("mile", 260, 4,"almacen"),
]
               
//-------------
//-------------


let botonAlCarrito = document.querySelectorAll(".botonAlCarrito"); //-------------
console.log(botonAlCarrito);
let carritoDeCompra=[];

for(let boton of botonAlCarrito){

      boton.addEventListener("click", agregarCarrito)
     
}

//-------------------
//-------------------


let nombreProducto;
let cantidad;


function agregarCarrito(e) { 
    console.log(e.target)                              //me dice donde sucedio el evento click
    let hijo = e.target;                                //dato donde sucedio el evento lo almaceno en la variable hijo
    let padre = hijo.parentNode.parentNode; 
    let cantidadAgregada = e.target;                   
    

    nombreProducto = padre.querySelector("h5"); //trae el contenido textual del titulo de la carta
    console.log("titulo: "+nombreProducto.textContent); 
    let precio = padre.querySelector(".precio"); 
  
    cantidad = cantidadAgregada.parentNode.querySelector(".datoInput");
   
    console.log("cantidad: "+cantidad.value);  
    console.log("precio: "+precio.textContent);



     class productoCarrito{
         constructor (productoIngresado, cantidadIngresada, precio){
            this.prod=productoIngresado;
            this.cant=cantidadIngresada;
            this.valor=precio;
        }  
     }; 
     

        carritoDeCompra.push(new productoCarrito(nombreProducto.textContent, cantidad.value, parseInt( precio.textContent) ))
        let carritoJson=JSON.stringify(carritoDeCompra); //convirtiendo a JSON el objeto que entra al carrito

        localStorage.setItem("claveCarrito",carritoJson) //guardando en memoria con la key claveCarrito
     
}

//------------------------------}

  
let terminar = document.getElementById("terminarCompra")    //-------------
console.log("terminar Compra "+terminar)

terminar.addEventListener("click", terminarCompra)         //----agregando evento



//----------funcion terinar compra-----------
function terminarCompra(){
    
    let carritoFinal=JSON.parse(localStorage.getItem("claveCarrito"))//trae array de la memoria local
    console.log(carritoFinal);                             //muestra array
    console.log(typeof(carritoFinal))                      //tipo objeto
        
    let precioFinal=0;
    

    let tituloTicket=document.createElement("h2")
    tituloTicket.innerHTML ="Su Ticket :";
    mensaje.appendChild(tituloTicket); 

    for (let prodCarrito of carritoFinal) {        
        console.log("nombre: "+prodCarrito.prod)
        console.log("cantidad: "+prodCarrito.cant)
        console.log("precio: "+prodCarrito.valor)
        precioFinal=precioFinal+(prodCarrito.valor*prodCarrito.cant);                  //suma todos los productos del carrito


         let ticket=document.createElement("h5")                     //crea nodo h5
        ticket.innerHTML = `<p>producto: ${prodCarrito.prod}</p>   
                            <p>cantidad: ${prodCarrito.cant}</p>`;  
        mensaje.appendChild(ticket)                                //engancha el nodo en el div con id: "mensaje"
        
    }

    console.log("el precio final: "+precioFinal)

  
    let parrafo=document.createElement("h3")                        //crea nodo suelto
    parrafo.innerHTML = "el precio final es: "+precioFinal ;        //propiedad de nodo innerHTML 
    mensaje.appendChild(parrafo)                                   //engancha el nodo suelto <p> al <div> con id: "mensaje" ----muestra al usuario en pantalla


   
}





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
    miel = new producto("miel", 260, 4,"almacen"),
    cafe = new producto("cafe", 115, 5, "almacen"),
    mermelada = new producto("mermelada", 105, 6, "almacen"),
    manteca = new producto("manteca", 95, 7, "lacteos"),
    aceite = new producto("aceite", 240, 8, "almacen"),
    galletitas = new producto("galletitas", 130, 9, "almacen"),
]
               
//-------------
//-------------


let botonAlCarrito = document.querySelectorAll(".botonAlCarrito"); //-------------
console.log(botonAlCarrito);
let carritoDeCompra=[];

for(let boton of botonAlCarrito){

      boton.addEventListener("click", agregarCarrito)
 
}



//---------------
//--------------






//-------------------
//-------------------


let nombreProducto;
let cantidad;


function agregarCarrito(e) { 
    console.log(e.target)                              //me dice donde sucedio el evento click
    let hijo = e.target;                                //dato donde sucedio el evento lo almaceno en la variable hijo
    let padre = hijo.parentNode; 
    let cantidadAgregada = e.target;  
   
    
          
    

    nombreProducto = padre.querySelector(".card-title"); //trae el contenido textual del titulo de la carta
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



var señal=0 
     
$("#terminarCompra").on("click", function(){

        if(señal===0){
            terminarCompra();
            señal=1
        }
        else if(señal===1){
            limpiarPantalla();
            señal=0;
        } 
        else{"error"}       
})  

function limpiarPantalla(){
    $("#mensaje h2").remove()
    $("#mensaje div").remove()
    $("#mensaje h4").remove()
}


//----------funcion terinar compra-----------
function terminarCompra(){
    
    let carritoFinal=JSON.parse(localStorage.getItem("claveCarrito"))//trae array de la memoria local
    console.log(carritoFinal);                             //muestra array
    console.log(typeof(carritoFinal))                      //tipo objeto
        
    let precioFinal=0;
    

   

    $("#mensaje").prepend(`<h3>Su ticket</h3>`)
    

    for (let prodCarrito of carritoFinal) {        
        console.log(prodCarrito.prod)
        console.log("cantidad: "+prodCarrito.cant)
        console.log("precio: "+prodCarrito.valor)
        precioFinal=precioFinal+(prodCarrito.valor*prodCarrito.cant);                  //suma todos los productos del carrito


        
        //----------JqUERY
<<<<<<< HEAD
        $("#mensaje").append(  `<div>${prodCarrito.prod}          
                                <span>ud. / uds. ${prodCarrito.cant}</span>
                                <span>$${prodCarrito.valor}</span></div>`)
=======
       
       
        $("#mensaje").append(`<div class="row">
        <div class="col-4">${prodCarrito.prod}</div>
        <div class="col-4">${prodCarrito.cant}</div>
        <div class="col-4">${prodCarrito.valor}</div>
      </div>`)
>>>>>>> 280d9b411c9427ca18d076cabf0f5b76f82dc038
        //-----------------------------------------------------------
    }

    console.log("el precio final: "+precioFinal)

  
    let parrafo=document.createElement("p")                        //crea nodo suelto
    parrafo.innerHTML = "El precio final es: "+precioFinal ;        //propiedad de nodo innerHTML 
    mensaje.appendChild(parrafo)                                   //engancha el nodo suelto <p> al <div> con id: "mensaje" ----muestra al usuario en pantalla

   
}


//-------------------------------jQuery
$(".botonAlCarrito").on("click", function(e){
        let esteBoton = e.target;
        esteBoton.style.background ="green" ;
          
})


//-------------------animaciones jquery---------------------

// $(".titulo").on("mousemove", function(){

//     $(".titulo").slideUp(5000).delay(1000).slideDown(3000)
// })


//-------------hover boton terminar compra
$("#terminarCompra").on("mouseenter", function(){

    $("#terminarCompra").css("color","white").css("background","black")
})
$("#terminarCompra").on("mouseleave", function(){

    $("#terminarCompra").css("color","green").css("background","#2C272E")
})



<<<<<<< HEAD
=======



>>>>>>> 280d9b411c9427ca18d076cabf0f5b76f82dc038
//-----coordenadas para clima

let ubicacion = navigator.geolocation.getCurrentPosition( mostrarUbicacion)
let latitud=0;
let longitud=0;
function mostrarUbicacion(posicion){
    latitud = posicion.coords.latitude
    longitud = posicion.coords.longitude
    console.log(latitud)
    console.log(longitud)
     
    //------guardando coordenadas en memoria

    localStorage.setItem("claveLatitud",latitud)  
    localStorage.setItem("claveLongitud",longitud) 
}


let latitudJson=JSON.parse(localStorage.getItem("claveLatitud")) //recupero coordenadas de memoria
let longitudJson=JSON.parse(localStorage.getItem("claveLongitud"))


let clima = "http://api.openweathermap.org/data/2.5/weather?lat="+latitudJson+"&lon="+longitudJson+"&appid=237739cc475750227cf2a27a46b9fa6d";
 


    $(window).on("load", function(){

    $.get(clima, function(data){

       console.log(data)
       let maxCelcius=(data.main.temp_max)-273.15  //formula de conversion => celcius = kelvin - 273.15
       let minCelcius=(data.main.temp_min)-273.15
       let sensacion = (data.main.feels_like)-273.15
       
       
        
<<<<<<< HEAD
       $("#clima").prepend( `<div>
                               <h3>${data.name}</h3>
                               <div>
                                 <p>Max: ${parseInt(maxCelcius)}</p> 
                                 <p>Min: ${parseInt(minCelcius)}</p>
                                 <p>Sensacion: ${parseInt(sensacion)}</p>
                               </div>
                              </div>`)   
=======
       $("#verClima").prepend( `<div>
                        <h3>${data.name}</h3>
                        <p>Temperatura Max: ${parseInt(maxCelcius)}</p> 
                        <p>Temperatura Min: ${parseInt(minCelcius)}</p>
                        <p>Sensacion: ${parseInt(sensacion)}</p>
        
                        </div>`)
        

>>>>>>> 280d9b411c9427ca18d076cabf0f5b76f82dc038
    })
})


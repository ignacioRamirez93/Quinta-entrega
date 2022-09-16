let productos = [
  {
    id: 1,
    nombre: "Buzo",
    precio: 500,
    imagen: "./img/buzo.jpg",
  },
  {
    id: 2,
    nombre: "Remera",
    precio: 200,
    imagen: "./img/remera.jpg",
  },
  {
    id: 3,
    nombre: "Pantalon", 
    precio: 1000,
    imagen: "./img/pantalon.jpg",
  },
  
];

const contenedor = document.getElementById("container");
contenedor.innerHTML = "";

productos.forEach((producto, indice) => {
  let card = document.createElement("div");
  card.classList.add("card", "col-sm-12", "col-lg-3");
  let html = `
    <img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <a href="#cart" class="btn btn-danger" onClick="agregarAlCarrito(${indice})">Comprar</a>
    </div>
      `;
  card.innerHTML = html;
  contenedor.appendChild(card);
});

const agregarAlCarrito=() =>{

  
alert("agrego este producto al carrito")

}

/*  ---------------------- CARRITO EN PROCESO ---------------------------------------

let cart=[];
let modalcarrito = document.getElementById("carrito")

const agregarAlCarrito=(indice)=> {

const indiceencontrado= cart.findIndex((elemento)=>{
 return elemento.id=== productos[indice].id

})
if (indiceencontrado=== -1){
  const productoagregar =productos[indice]
  productoagregar.cantidad =1;
  cart.push(productoagregar)
  dibujarCarrito()

}else{
 cart[indiceencontrado].cantidad+=1;
 dibujarCarrito()
}

};



let total=0;

const dibujarCarrito = ()=>{

 modalcarrito.className="cart";
 modalcarrito.innerHTML="";
 if (cart.lenght > 0){
   cart.forEach((producto,indice)=>{
    total = total+ producto.precio *producto.cantidad;
    const carritocontainer= document.createElement("div");
    carritocontainer.className = "producto-carrito";
    carritocontainer.innerHTML=`
    <img class="carrito-img" src="${producto.imagen}"/>
    <div class="producto-details">
    ${producto.nombre}
    </div>
    <div class="product-details"> cantidad:${producto.cantidad}</div>
    <div class="product-details"> precio:${producto.precio}</div>
    <div class="product-details"> subtotal: $${ producto.precio + producto.cantidad}</div>
    <button class = "btn btn-info" id="remove-product" onclick="removeproduct"(${indice})"> eliminar producto </button> 
    `;
    modalcarrito.appendChild(carritocontainer);
  
  })

 }

}*/
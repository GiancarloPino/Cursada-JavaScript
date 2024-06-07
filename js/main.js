const container = document.getElementById("contenedor");
const btnProducto = document.getElementById("boton-producto");
const btnCarrito = document.getElementById("boton-carrito");
const btnBorrar = document.getElementById("boton-borrar-carrito");
const btnPagar = document.getElementById("boton-pagar");

let arrayProducto = [];

// pagar los productos en el carrito
function pagar(elCarrito) {
    let sumaPrecios = elCarrito.reduce((acumulador, el) => acumulador += el.price, 0);
    
    if (sumaPrecios) {
        Swal.fire(`El total a pagar por sus productos es: ${sumaPrecios}`);
    } else {
        Swal.fire(`Usted aún no agregó nada a su carrito :(`);
    }
}

// una alerta cuando se agrega un producto al carrito
function alertaToasty() {
    Toastify({
        text: "Agregado correctamente al carrito",        
        duration: 3000
    }).showToast();
}

// botón de borrar el carrito
btnBorrar.addEventListener("click", function() {
    Swal.fire({
        title: "¿Estás seguro que quieres borrar tu carrito?",
        text: "No podrás recuperar tu carrito actual, ¿estás seguro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, borrar"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            Swal.fire({
                title: "Borrado!",
                text: "Borraste tu carrito :(",
                icon: "success"
            });
            location.reload();
        }
    });    
});

const fetchProductos = fetch("https://fakestoreapi.com/products"); // recibiendo los productos de la API

const carrito = JSON.parse(localStorage.getItem("carritoStorage")) || [];

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    const itemCarrito = {
        title: producto.title,
        price: producto.price,
        foto: producto.image,
    };
    carrito.push(itemCarrito);
    localStorage.setItem('carritoStorage', JSON.stringify(carrito)); // Guardar el carrito actualizado
    console.log(carrito); // Verificar el carrito en la consola
}

// Función para mostrar el carrito
function mostrarCarrito(carrito) {
    container.innerHTML = "";
    carrito.forEach(itemCarrito => { // Iterar sobre el arreglo carrito
        const tarjetas = document.createElement('div');
        tarjetas.className = "tarjeta";
        container.appendChild(tarjetas);
        
        const img = document.createElement('img');
        img.className = "product-imagen";
        img.src = itemCarrito.foto; // Acceder a la propiedad foto de cada itemCarrito
        
        const divTarjeta = document.createElement('div');
        divTarjeta.className = "product-detalle";
        
        const h2Titulo = document.createElement('h2');
        h2Titulo.className = "product-titulo";
        h2Titulo.innerText = itemCarrito.title; // Acceder a la propiedad title de cada itemCarrito
        
        const pDescripcion = document.createElement('p');
        pDescripcion.className = "product-descripcion";
        pDescripcion.innerText = "Actualmente en tu carrito"; // Acceder a la propiedad description de cada itemCarrito
        
        const pPrecio = document.createElement('p');
        pPrecio.className = "product-precio";
        pPrecio.innerText = "$ " + itemCarrito.price; // Acceder a la propiedad price de cada itemCarrito
        
        container.appendChild(tarjetas);
        tarjetas.appendChild(divTarjeta);
        tarjetas.appendChild(img);
        
        divTarjeta.appendChild(h2Titulo);
        divTarjeta.appendChild(pDescripcion);
        divTarjeta.appendChild(pPrecio);
    });
}

// Fetch de productos y almacenamiento en arrayProducto
fetchProductos
    .then(response => response.json())
    .then((data) => {
        arrayProducto = data; // almacenar los datos en arrayProducto
    })
    .catch((error) => {
        console.error('Error al obtener los productos:', error);
    });

btnProducto.addEventListener("click", () => {
    container.innerHTML = "";
    arrayProducto.forEach(el => {
        const tarjetas = document.createElement('div');
        tarjetas.className = "tarjeta";
        container.appendChild(tarjetas);
        
        const img = document.createElement('img');
        img.className = "product-imagen";
        img.src = el.image;
        
        const divTarjeta = document.createElement('div');
        divTarjeta.className = "product-detalle";
        
        const h2Titulo = document.createElement('h2');
        h2Titulo.className = "product-titulo";
        h2Titulo.innerText = el.title;
        
        const pDescripcion = document.createElement('p');
        pDescripcion.className = "product-descripcion";
        pDescripcion.innerText = el.description;
        
        const pPrecio = document.createElement('p');
        pPrecio.className = "product-precio";
        pPrecio.innerText = "$ " + el.price;
        
        const boton = document.createElement('button');
        boton.className = "boton";
        boton.innerText = "Agregar al carrito";

        boton.addEventListener('click', () => {
            alertaToasty();
            agregarAlCarrito(el);
        });
        
        container.appendChild(tarjetas);
        tarjetas.appendChild(divTarjeta);
        tarjetas.appendChild(img);
        tarjetas.appendChild(boton);
        
        divTarjeta.appendChild(h2Titulo);
        divTarjeta.appendChild(pDescripcion);
        divTarjeta.appendChild(pPrecio);
    });
});

btnCarrito.addEventListener("click", () => {
    mostrarCarrito(carrito); // pasa el carrito como argumento
});

btnPagar.addEventListener("click", () => {
    pagar(carrito); // pasa el carrito como argumento
});

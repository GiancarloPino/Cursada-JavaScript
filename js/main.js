function calcularDescuento(precio) {
  const descuentos = [
    { rango: 200, porcentaje: 0.15 },
    { rango: 100, porcentaje: 0.1 },
    { rango: 50, porcentaje: 0.05 },
  ];

  for (let i = 0; i < descuentos.length; i++) {
    if (precio >= descuentos[i].rango) {
      return precio * descuentos[i].porcentaje;
    }
  }
  return 0;
}
//iniciando funcion
function mostrarProductosConDescuento(event) {
  event.preventDefault();  // que no se actualice

  let formulario = event.target;
  let nombreProducto = formulario.children[0].value; //recibiendo por imput
  let precioProducto = parseInt(formulario.children[1].value); //recibiendo por input y transformando a numero

  let productos = JSON.parse(localStorage.getItem('productos')) || []; //funcion or, nota: agregar mas func orden superior
  const hrInicio = { minuto: new Date().getMinutes(), segundo: new Date().getSeconds() };
  const xHoraInicio = hrInicio.minuto * 60 + hrInicio.segundo;

  let descuento = calcularDescuento(precioProducto);
  let precioFinal = precioProducto - descuento;

  productos.push({
    nombre: nombreProducto,
    precio: precioProducto,
    descuento: descuento,
    precioFinal: precioFinal
  });

  localStorage.setItem('productos', JSON.stringify(productos));

  const hrFin = { minuto: new Date().getMinutes(), segundo: new Date().getSeconds() };
  const xHoraFin = hrFin.minuto * 60 + hrFin.segundo;
  const sumaPrecios = productos.reduce((acumulador, el) => acumulador += el.precioFinal, 0);
  const sumaDescuentos = productos.reduce((acumulador, el) => acumulador += el.descuento, 0);

  let listaProductos = "";
  productos.forEach(producto => {
    listaProductos += `Producto: ${producto.nombre}\nPrecio: ${producto.precio}\nDescuento: ${producto.descuento}\nA pagar: ${producto.precioFinal}\n`;
  });

  let main = document.getElementById("main");
  const parrafo = document.createElement("p");

  parrafo.innerText = `\n${listaProductos}\nTotal a pagar: ${sumaPrecios}\nUsted se ha ahorrado: ${sumaDescuentos}\nUsted solo tardo: ${(xHoraFin - xHoraInicio)} segundos!\nVuelva Pronto!!!`;

  main.appendChild(parrafo);
  
}

console.log(localStorage);
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", mostrarProductosConDescuento);
const boton2 = document.getElementById("btn-limpiar");
boton2.onclick = function() {
  localStorage.clear();
};




function calcularDescuento(precio) {
  const descuentos = [
    { rango: 50, porcentaje: 0.05 },
    { rango: 100, porcentaje: 0.1 },
    { rango: 200, porcentaje: 0.15 },
  ];

  for (let i = 0; i < descuentos.length; i++) {
    if (precio >= descuentos[i].rango) {
      return precio * descuentos[i].porcentaje;
    }
  }
  return 0;
}
/*function mostrarProductosConDescuento() {
    let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos a registrar: "));
  
    let total = 0;
    let listaProductos = "";
  
    for (let i = 1; i <= cantidadProductos; i++) {
      let nombreProducto = prompt("Ingrese el nombre del producto " + i +":" );
      let precioProducto = parseInt(prompt("Ingrese el precio del producto "+ i +":"));
  
      let descuento = calcularDescuento(precioProducto);
      let precioFinal = precioProducto - descuento;
  
      total += precioFinal;
      listaProductos += "Producto: " + nombreProducto + "\nPrecio: $" + precioProducto + "// Descuento: $" + descuento + "// Precio Final: $" + precioFinal + "\n";
      
    }
  
    alert("Lista de productos:\n" + listaProductos + "\nTotal a pagar: $" + total);
}

mostrarProductosConDescuento();*/

function mostrarProductosConDescuento() {
  let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos a registrar: "));
  let productos = []; 
  let total = 0;
  const hrInicio= {minuto:new Date().getMinutes(), segundo: new Date().getSeconds()};

  for (let i = 1; i <= cantidadProductos; i++) {
    let nombreProducto = prompt("Ingrese el nombre del producto " + i + ":");
    let precioProducto = parseInt(prompt("Ingrese el precio del producto " + i + ":"));

    let descuento = calcularDescuento(precioProducto);//funcion de orden superior (?)
    let precioFinal = precioProducto - descuento;

    total += precioFinal;

    productos.push({
      nombre: nombreProducto,
      precio: precioProducto,
      descuento: descuento,
      precioFinal: precioFinal
    });
  }
  const hrFin= {minuto:new Date().getMinutes(), segundo: new Date().getSeconds()};
  sumaPrecios=productos.reduce((acumulador,el)=>acumulador+=el.precio,0); //aplicando reduce
  console.log(sumaPrecios);
  console.log(productos);
  console.log(hrInicio);
  console.log(hrFin);
  console.log("te has tardado ",hrFin.minuto-hrInicio.minuto,"minutos con ",hrFin.segundo-hrInicio.segundo," segundos en realizar la operación");

  let listaProductos = "";
  productos.forEach(producto => {
    listaProductos += `Producto: ${producto.nombre} - Precio: ${producto.precio} - Descuento: ${producto.descuento}\n`;
  });

  alert(listaProductos); // Mostrar lista de productos
  alert(`Total a pagar: ${total}`); // Mostrar total a pagar
  alert(`Total descuento: ${totalDescuento}`); // Mostrar total descuento
  alert(`Tiempo de operación: ${tiempoOperacion} segundos`); // Mostrar tiempo de operación
}

mostrarProductosConDescuento();
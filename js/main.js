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

mostrarProductosConDescuento();
let descuentazo = calcularDescuento(145);

console.log(descuentazo);*/




function mostrarProductosConDescuento() {
  let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos a registrar: "));
  let productos = []; // Arreglo para almacenar los productos
  let total = 0;
  const hrInicio= {minuto:new Date().getMinutes(), segundo: new Date().getSeconds()};

  for (let i = 1; i <= cantidadProductos; i++) {
    let nombreProducto = prompt("Ingrese el nombre del producto " + i + ":");
    let precioProducto = parseInt(prompt("Ingrese el precio del producto " + i + ":"));

    let descuento = calcularDescuento(precioProducto);
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

  console.log(productos);
  console.log(hrInicio);
  console.log(hrFin);
  console.log("te has tardado ",hrFin.minuto-hrInicio.minuto,"minutos con ",hrFin.segundo-hrInicio.segundo," en realizar la operación");
}

mostrarProductosConDescuento();
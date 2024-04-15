function calcularDescuento(precio) {
    if (precio <= 50) {
      return precio * 0.05;
    } else if (precio <= 100) {
      return precio * 0.1;
    } else {
      return precio * 0.15;
    }
}

  
  function mostrarProductosConDescuento() {
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
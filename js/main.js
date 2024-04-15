function calcularDescuento(precio) {
    switch(precio){
    case (precio>0):
    if (precio <= 50) {
      return precio * 0.05;
    } else if (precio <= 100) {
      return precio * 0.1;
    } else {
      return precio * 0.15;
    }
    break;
    case (precio<=0):
        alert("El precio ingresado en incorrecto")

  } }

  
  function mostrarProductosConDescuento() {
    let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos a registrar: "));
  
    let total = 0;
    let listaProductos = "";
  
    for (let i = 1; i <= cantidadProductos; i++) {
      let nombreProducto = prompt("Ingrese el nombre del producto " + i +":" );
      let precioProducto = parseFloat(prompt("Ingrese el precio del producto "+ i +":"));
  
      let descuento = calcularDescuento(precioProducto);
      let precioFinal = precioProducto - descuento;
  
      total += precioFinal;
      listaProductos += "Producto: " + nombreProducto + ", Precio: $" + precioProducto + ", Descuento: $" + descuento.toFixed(2) + ", Precio Final: $" + precioFinal.toFixed(2) + "\n";
    }
  
    alert("Lista de productos:\n" + listaProductos + "\nTotal a pagar: $" + total.toFixed(2));
  }
  
  mostrarProductosConDescuento();
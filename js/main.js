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
function mostrarProductosConDescuento() {
  let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos a registrar: "));
  let productos = []; 
  let total = 0;
  const hrInicio= {minuto:new Date().getMinutes(), segundo: new Date().getSeconds()};
  const xHoraInicio= hrInicio.minuto*60+hrInicio.segundo;//convirtiendo los minutos a segundos

  for (let i = 1; i <= cantidadProductos; i++) {
    let nombreProducto = prompt("Ingrese el NOMBRE del producto " + i + ":");
    let precioProducto = parseInt(prompt("Ingrese el PRECIO del producto " + i + ":"));

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
  const xHoraFin= hrFin.minuto*60+hrFin.segundo;//convirtiendo los minutos a segundos
  sumaPrecios=productos.reduce((acumulador,el)=>acumulador+=el.precioFinal,0); //aplicando reduce para el total
  sumaDescuentos=productos.reduce((acumulador,el)=>acumulador+=el.descuento,0);//reduce para suma de descuentos
  let listaProductos = "";//aqui lleno el alert
  productos.forEach(producto => { //metiendo cada dato a listaProductos
    listaProductos += "Producto: "+producto.nombre +" // Precio: "+producto.precio + " // Descuento: "+producto.descuento + "// A pagar: "+producto.precioFinal+"\n";
  });

  alert(listaProductos); // mostrar lista de productos
  alert("Total a pagar: "+sumaPrecios); // mostrar total a pagar
  alert("Usted se ha ahorrado: "+sumaDescuentos); // mostrar total descuento
  alert("Usted solo tardo: "+(xHoraFin-xHoraInicio)+" segundos!.\nVuelva Pronto!!!"); // Mostrar tiempo de operación
}

mostrarProductosConDescuento();
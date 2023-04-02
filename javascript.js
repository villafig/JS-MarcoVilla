// Definimos los horarios y precios de las resrvaciones
const matutino = 100;
const vespertino = 200;
const nocturno = 500;

// Función para calcular el costo total
function calcularCostoTotal(matutino, vespertino, nocturno) {
  // Calculamos el costo total multiplicando la cantidad de cada artículo por su precio
  const costoTotal = (matutino * matutino) + (vespertino * vespertino) + (nocturno * nocturno);
  // Devolvemos el costo total redondeado a dos decimales
  return parseFloat(costoTotal.toFixed(2));
}

let deseaAgregar = true; // Variable para controlar el ciclo while

while (deseaAgregar) {
  // Preguntamos al usuario para cuántas personas será la reservación
  const cantidadDePersonasMatutino = parseInt(prompt("¿Cuántas personas serán en el horario matutino?"));
  const cantidaddePersonasVespertino = parseInt(prompt("¿Cuántos personas serán el horario vespertino?"));
  const cantidaddePersonasNocturno = parseInt(prompt("¿Cuántas personas ser'am en el horario nocturno?"));

  // Verificamos que el usuario haya ingresado una cantidad válida para cada artículo
  //if (isNaN(cantidadLlantas) || isNaN(cantidadFrenos) || isNaN(cantidadAceite) || isNaN(cantidadBujias)) {
   // alert("Debe ingresar un número para la cantidad de cada artículo.");
  //} else {
    // Calculamos el costo total utilizando la función previamente definida
    const costoTotal = calcularCostoTotal(matutino, vespertino, nocturno);
    // Mostramos el costo total al usuario
    alert(`El costo total es: $${costoTotal}`);
  }

  // Preguntamos al usuario si desea agregar más artículos
  const respuesta = prompt("¿Desea agregar más artículos? (Sí o No)").toLowerCase(); // Convertimos la respuesta a minúsculas
  deseaAgregar = respuesta === "si" || respuesta === "no"; // Cambiamos la condición para que se repita mientras la respuesta sea "si" o "sí"
  console.log('holaaa.... ', deseaAgregar)
  
  // Si el usuario desea agregar más artículos, limpiamos la consola y volvemos a comenzar el ciclo while
  //if (deseaAgregar) {

//console.clear();
  //}
//}
  

alert("Gracias por su compra. ¡Que tenga un buen día!");
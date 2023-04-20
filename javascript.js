
function Reiniciar(){
location.reload();
}

function calcular(){
let array = document.getElementById("text").value.split(/,/);

let suma = 0;


//SUMA
for(i=0;i<array.length;i++){
suma=parseInt(array[i])+suma;
}
let precioPelota = suma *3;

//RESULTADO

document.getElementById("resultado").innerHTML="El total de pelotas a usar: "+suma+"<br>"+
"El precio por bola es de:$3 <br>"+
"Tu cuenta a pagar por las pelotas es: $ "+precioPelota+"<br>"

}





// //preguntas iniciales

// let pregunta = "¿Que edad tienes tienes?";
// let pregunta2 = "¿Deseas realizar una reservación?";
// let pregunta3 = "¿En qué horario te gustaría resrevar?";
// let pregunta4 = "¿De cuántas personas es tu grupo";


// let edad = prompt("¿Qué edad tienes?");
// if (edad >= 18) {
//   let respuesta2 = prompt("¿Deseas realizar una reservación?");
//   if (respuesta2 == "ok") {
//     let respuesta3 = prompt("¿En qué horario te gustaría reservar? (matutino, vespertino, nocturno)");
//     if (respuesta3 == "matutino" || respuesta3 == "vespertino" || respuesta3 == "nocturno") {
//       let respuesta4 = prompt("¿Deseas zona de bar o restaurante? (bar, restaurante)");
//       if (respuesta4 == "bar" || respuesta4 == "restaurante") {
//         let respuesta5 = prompt("¿Cuántas personas son? (cinco, diez, veinte)");
//         if (respuesta5 == "cinco" || respuesta5 == "diez" || respuesta5 == "veinte") {
//           alert("Tu reservación se ha realizado con éxito");
//         } else {
//           alert("Escribe una de las opciones");
//         }
//       } else {
//         alert("Escribe una de las opciones");
//       }
//     } else {
//       alert("Escribe una de las opciones");
//     }
//   } else {
//     alert("No se ha realizado la reserva");
//   }
// } else {
//   alert("Lo siento, debes ser mayor de edad para poder realizar una reservación");
// }

// //Ejercicio de Precios

// //Array


// let productos = [
//   { nombre: "Matutino", precio: 100 },
//   { nombre: "Vespertino", precio: 200 },
//   { nombre: "Nocturno", precio: 300 }
// ];

// let seleccionados = [];

// //Método

// for (let i = 0; i < productos.length; i++) {
//   let respuesta = prompt(`¿Deseas el producto ${productos[i].nombre}? (S/N)`);
//   if (respuesta.toUpperCase() === "S") {
//     seleccionados.push(productos[i]);
//   }
// }

// let total = 0;

// for (let i = 0; i < seleccionados.length; i++) {
//   total += seleccionados[i].precio;
// }

// alert(`El total de tu compra es ${total} pesos`);






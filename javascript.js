//preguntas iniciales

let pregunta = "Que edad tienes tienes";
let pregunta2 ="Deseas realizar una reservación?"
let pregunta3 ="Cuántas personas consideras para la reservación?"
let pregunta4 ="Deseas zona de bar o restaurante"

console.log(pregunta);

let edad = prompt(pregunta)

if ( edad >= 18) {
    alert(pregunta2)
}  else{
    alert("Lo siento, debes ser mayor de edad para poder realizar una reservación")
}

//No encuentro un ejemplo que aplique bien con el while y for con mi página todavía.
// while
let x = 0;
  while (x <10) {
    console.log("Ciclo" + x);
    alert("Ahora X vale " + x)
    x = x +1;
  }

//for
for (let x = 0; x < 10; x++) {
  console.log("ciclofor" + x)
}


// Acá voy a desarrollar más agregando costos y realizando operaciones 

// const matutino = 100;
// const vespertino = 200;
// const nocturno = 500;

// const grupoMenorDeCincoPersonas = 300;
// const grupoMayorDeCincoPersonas = 200;
// const grupoMayorDeDiezPersonas = 100;



  // Calculamos el costo total multiplicando la cantidad de cada artículo por su precio
// const costoTotal = (matutino * grupoMenorDeCincoPersonas) || (matutino * grupoMayorDeCincoPersonas) || (matutino * grupoMayorDeDiezPersonas) || (matutino * grupoMayorDeDiezPersonas) 
// || (vespertino * grupoMayorDeDiezPersonas) || (vespertino * grupoMayorDeDiezPersonas) || (vespertino * grupoMayorDeDiezPersonas) 
// || (nocturno * grupoMayorDeDiezPersonas) || (nocturno * grupoMayorDeDiezPersonas) || (nocturno * grupoMayorDeDiezPersonas)
  
  

alert("¡Muchas gracias, hasta luego!");
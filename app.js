let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío";

function botonConsole(){
    console.log("El botón fue clicado")
}

function botonPrompt(){
    let ciudad = prompt("Mencione un nombre de una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function botonAlert(){
    alert("Yo amo JS");
}

function botonSuma(){
    let numero_1 = parseInt(prompt("Ingrese el primer número:"));
    let numero_2 = parseInt(prompt("Ingrese el segundo número:"));
    let suma = numero_1 + numero_2;

    alert(`El resultado de la suma es ${suma}`);
}
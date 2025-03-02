// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// En una reunión de amigos, se quiere realizar el sorteo del amigo secreto.


let amigo = [];                                                     
// Genera un array (listado) vacio con la variable amigo //

function agregarAmigo() { // Genera una función llamada "agregarAmigo" //                                     
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    // Genera una variable llamada "nombreAmigo" que enlaza el valor que el usuario ingresa en el input id= "amigo" de HTML //

    
    // console.log(inputAmigo);
    // console.log(amigo);

    if (!nombreAmigo) {
        alert("Por favor, ingrese un nombre");
        return;
    }
    // Si el usuario no ingresa un nombre, se mostrará un mensaje de alerta que le pide que ingrese un nombre

    amigo.push(nombreAmigo); // Agrega el nombre del amigo ingresado por el usuario al array "amigo" //
    console.log(amigo);
    inputAmigo.value = ""; // Limpia el input para que el usuario pueda ingresar otro nombre //
    inputAmigo.focus(); // Limpia el input y lo enfoca para que el usuario pueda ingresar otro nombre //
    renderizarAmigo(); // Llama a la función "renderizarAmigo" //
};






function renderizarAmigo() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    // Genera una variable llamada "listaAmigos" que enlaza el elemento con el id "listaAmigos" de HTML //
    // Limpia el contenido del elemento con el id "listaAmigos" de HTML //
    
    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    } 
    // Genera un bucle que recorre el array "amigo" y por cada elemento, crea un elemento "li" y le asigna el valor del elemento del array "amigo" //
    // Agrega el elemento "li" al elemento con el id "listaAmigos" de HTML //
};

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("No hay amigos para sortear");
        return;
        // Si el array "amigo" está vacío, se mostrará un mensaje de alerta que dice "No hay amigos para sortear" //
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)]; // Genera una variable llamada "amigoSorteado" que elige un elemento aleatorio del array "amigo" //
    let resultado = document.getElementById("resultado");                // Genera una variable llamada "resultado" que enlaza el elemento con el id "resultado" de HTML //
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;      // Agrega al elemento con el id "resultado" de HTML el texto "El amigo sorteado es: " y el valor de la variable "amigoSorteado" //

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
};  // Limpia el contenido del elemento con el id "listaAmigos" de HTML //

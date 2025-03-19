let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
    } else if (!isNaN(nombre)) {
        alert("Por favor, ingresa solo nombres y no números.");
    } else {
        amigos.push(nombre);
        inputAmigo.value = ""; // Limpiar el input
        actualizarLista();
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let ganador = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = "<li>Ganador: " + ganador + "</li>";
    } else {
        document.getElementById("resultado").innerHTML = "<li>No hay nombres en la lista.</li>";
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}


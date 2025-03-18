let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (!nombre) {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceGanador = Math.floor(Math.random() * amigos.length);
    let nombreGanador = amigos[indiceGanador];

    amigos = []; /*Desaparecer la lista de nombres de amigos*/
    actualizarLista();

    /*Mostrar solo el mensaje con el nombre del ganador*/
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p style=" font-weight: bold;">El amigo secreto sorteado es: ${nombreGanador}</p>`;
}

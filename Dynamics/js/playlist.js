let playlist = ["No te reconozco", "Mandala", "Contacto"];
let lista = document.getElementById("playlist");

//Muestra y actualiza la playlist
function renderizarPlaylist() {
    lista.innerHTML = "";
    playlist.forEach((cancion, index)=> {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${cancion}`;
        lista.appendChild(li);
    });
}


function obtenerInput() {
    return document.getElementById("nuevaCancion").value.trim();
}

function agregarFinal() {
    const cancion = obtenerInput();
    if (cancion) playlist.push(cancion);
    renderizarPlaylist();
}

function quitarFinal() {
    playlist.pop();
    renderizarPlaylist();
}

function agregarInicio() {
    const cancion = obtenerInput();
    if (cancion) playlist.unshift(cancion);
    renderizarPlaylist();
}

function quitarInicio() {
    playlist.shift();
    renderizarPlaylist();
}

function usarSplice() {
    const cancion = obtenerInput();
    const index = parseInt(document.getElementById("indiceSplice").value);
    const eliminar = parseInt(document.getElementById("cantidadEliminar").value);

    if (!isNaN(index) && !isNaN(eliminar)) {
        if(cancion) {
            playlist.splice(index, eliminar, cancion);
        } else {
            playlist.splice(index, eliminar);
        }
        renderizarPlaylist();
    }
}


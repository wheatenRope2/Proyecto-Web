let playlist = [];
let lista = document.getElementById("playlist");

const datosPlaylist = baseDatos;
const inputP = document.getElementById("playlistInput");
const listaCancionP = document.getElementById("playlist-canciones");
const listaArtistaP = document.getElementById("playlist-artistas");

function mostrarCancionesP(filtradasCancion) 
{
  listaCancionP.innerHTML = "";
  filtradasCancion.forEach(cancion => 
  {
    let lica = document.createElement("button");
    lica.id = `${cancion.nombre}`;
    lica.textContent = `${cancion.nombre}`;
    console.log(cancion);
    console.log(cancion.nombre);
    console.log(lica);
    lica.addEventListener("click", () => 
    {
        if (player && typeof player.destroy === "function") 
        {
        //    player.destroy();
        }
        player.loadVideoById(cancion.link);
        console.log(cancion.link);
    });
    listaCancionP.appendChild(lica);
  });
}

inputP.addEventListener("keyup", () => 
{
  let textoCancionP = inputP.value.toLowerCase();
  let filtradasCancionP = datosPlaylist.canciones.filter(c =>
    c.nombre.toLowerCase().includes(textoCancionP)
  );
    mostrarCancionesP(filtradasCancionP); 
});

mostrarCancionesP(datosPlaylist.canciones);


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


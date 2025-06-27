let playlist = [];
let lista = document.getElementById("playlist");

const datosPlaylist = baseDatos;
const inputP = document.getElementById("playlistInput");
const listaCancionP = document.getElementById("playlist-canciones");
const listaArtistaP = document.getElementById("playlist-artistas");

let iniciarPlaylist = document.getElementById("iniciarPlaylist");
let siguientePlaylist = document.getElementById("cancionSiguiente");
let anteriorPlaylist = document.getElementById("cancionAnterior");

function mostrarCancionesP(filtradasCancion) 
{
  listaCancionP.innerHTML = "";
  filtradasCancion.forEach(cancion => 
  {
    let lica = document.createElement("button");
    lica.nombre = `${cancion.nombre}`;
    lica.link=`${cancion.link}`;
    lica.textContent = `${cancion.nombre}`;
    lica.id = `${cancion.id}`;
    lica.addEventListener("click", () => 
    {
        agregarInicio(lica);
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

//Reproducir inicio de la Playlist
let indiceActual = 0;

function reproducirActual(){
    const cancion = playlist[indiceActual];
    player.loadVideoById(cancion.link);
}

iniciarPlaylist.addEventListener("click", ()=>{
    reproducirActual();
});

function reproducirSiguiente(){
    if (indiceActual<playlist.length-1){
        indiceActual++;
        reproducirActual();
    }
    else
        if(indiceActual>playlist.length-1){
            indiceActual=0;
            reproducirActual();
        }
}
siguientePlaylist.addEventListener("click", ()=>{
    reproducirSiguiente();
})

function reproducirAnterior(){
    if (indiceActual>0){
        indiceActual--;
        reproducirActual();
    }
    else
        if(indiceActual<0){
            indiceActual=playlist.length;
            reproducirActual();
        }
}
anteriorPlaylist.addEventListener("click", ()=>{
    reproducirAnterior();
})


//Muestra y actualiza la playlist
function renderizarPlaylist() {
    lista.innerHTML = "";
    playlist.forEach((cancion, index)=> {
        const li = document.createElement("li");
        const btnEliminar = document.createElement("button");
        btnEliminar.id=`${index}`;
        btnEliminar.textContent = "eliminar";
        btnEliminar.class = "eliminar";
        li.textContent = `${index + 1}. ${cancion.nombre}`;
        lista.appendChild(li);
        lista.appendChild(btnEliminar);
        btnEliminar.addEventListener("click", ()=>{
            eliminarCancion(btnEliminar.id)
        })

    });
}

function eliminarCancion(btnEliminar){
    playlist.splice(btnEliminar, 1);
    renderizarPlaylist();
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

function agregarInicio(lica) {
    const id = lica.id;
    const cancion = datosPlaylist.canciones.find(x=>x.id==id);
    if (cancion) playlist.push(cancion);
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


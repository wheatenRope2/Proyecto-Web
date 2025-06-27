let playlist = [];
let lista = document.getElementById("playlist");

const datosPlaylist = baseDatos;
const inputP = document.getElementById("playlistInput");
const listaCancionP = document.getElementById("playlist-canciones");
const listaArtistaP = document.getElementById("playlist-artistas");

let iniciarPlaylist = document.getElementById("iniciarPlaylist");
let siguientePlaylist = document.getElementById("cancionSiguiente");
let anteriorPlaylist = document.getElementById("cancionAnterior");
let shuffleBtn = document.getElementById("shuffle");
let deleteBtn = document.getElementById("eliminarPlaylist");

function mostrarCancionesP(filtradasCancion) 
{
  listaCancionP.innerHTML = "";
  filtradasCancion.forEach(cancion => 
  {
    let lica = document.createElement("button");
    lica.className="resultado";
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
  if(textoCancionP.trim()===""){
    listaCancionP.style.display="none";
  }
  if (textoCancionP.trim()!=""){
    listaCancionP.style.display="flex";
  }
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
        btnEliminar.textContent = "-";
        btnEliminar.className = "eliminar";
        li.textContent = `${index + 1}. ${cancion.nombre}`;
        lista.appendChild(li);
        lista.appendChild(btnEliminar);
        btnEliminar.addEventListener("click", ()=>{
            eliminarCancion(btnEliminar.id)
        })

    });
}

//Modo aleatoreo
function shuffle(){
    for(let i = playlist.length-1; i>0; i--){
        const x = Math.floor(Math.random()*(i+1));
        [playlist[i], playlist[x]]=[playlist[x], playlist[i]];
    }
    renderizarPlaylist();
}
shuffleBtn.addEventListener("click", ()=>{
    shuffle();
})

//Eliminar una canción
function eliminarCancion(btnEliminar){
    playlist.splice(btnEliminar, 1);
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

//Agregar una canción al inicio
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

//Eliminar arreglo completo

function borrarTodo(){
    playlist=[];
    renderizarPlaylist();
}

deleteBtn.addEventListener("click", ()=>{
    borrarTodo();
})


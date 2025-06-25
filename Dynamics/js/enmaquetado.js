let contenedorInicio = document.getElementById("contenedorInicio");
let contenedorPlaylist = document.getElementById("contenedorPlaylist");
let fondo = document.querySelector(".fondo");

let botonInicio = document.getElementById("botonInicio")
botonInicio.addEventListener("click", ()=>{
    fondo.style.backgroundImage = "url('../Statics/FondoInicio.jpg')";

    contenedorInicio.style.display = "block";
    contenedorPlaylist.style.display = "none";
    contenedorAjustes.style.display = "none";
    contenedorCreditos.style.display = "none";
});


let botonPlaylist = document.getElementById("botonPlaylist").addEventListener("click", ()=>{
    fondo.style.backgroundImage = "url('../Statics/FondoPlaylist.jpg')";

    contenedorInicio.style.display = "none";
    contenedorPlaylist.style.display = "block";
    contenedorAjustes.style.display = "none";
    contenedorCreditos.style.display = "none";
});

let contenedorAjustes = document.getElementById("contenedorBusqueda")
document.getElementById("ajustes").addEventListener("click", ()=>{
    contenedorInicio.style.display = "none";
    contenedorPlaylist.style.display = "none";
    contenedorAjustes.style.display = "block";
    contenedorCreditos.style.display = "none";
    
});

let contenedorCreditos = document.getElementById("contenedorCreditos")
document.getElementById("creditos").addEventListener("click", ()=>{
    contenedorInicio.style.display = "none";
    contenedorPlaylist.style.display = "none";
    contenedorAjustes.style.display = "none";
    contenedorCreditos.style.display = "block";
    
});

//añadir Playlist
document.getElementById("agregarPlaylist").addEventListener("click",()=>{
    let nombreTarea = document.createElement("input");
    nombreTarea.type = "text";
    nombreTarea.placeholder = "Nombre de la nueva playlist";
    nombreTarea.classList.add("nuevaPlaylist");
    document.getElementById("aparicionPlaylist").appendChild(nombreTarea);

});

document.getElementById("eliminarPlaylist").addEventListener("click",()=>{
    let playlists = document.querySelectorAll(".nuevaPlaylist");
    if (playlists.length > 0) {
        playlists[playlists.length - 1].remove();
    } else {
        alert("No hay playlists para eliminar.");
    }
});
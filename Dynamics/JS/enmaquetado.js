
let contenedorInicio = document.getElementById("contenedorInicio");
let contenedorPlaylist = document.getElementById("contenedorPlaylist");
let contenedorBusqueda = document.getElementById("contenedorBuscador");
let contenedorCreditos = document.getElementById("contenedorCreditos");
let pantallaInicio = document.getElementById("pantallaInicio");
let pantallaPlaylist = document.getElementById("pantallaPlaylist");
let pantallaBuscador = document.getElementById("pantallaBuscador");
let pantallaCreditos = document.getElementById("pantallaCreditos");

let botonInicio = document.getElementById("botonInicio")
botonInicio.addEventListener("click", ()=>{
    contenedorInicio.style.display = "flex";
    pantallaInicio.style.display = "flex";
    contenedorPlaylist.style.display = "none";
    pantallaPlaylist.style.display = "none";
    contenedorBusqueda.style.display = "none";
    pantallaBuscador.style.display = "none";
    contenedorCreditos.style.display = "none";
    pantallaCreditos.style.display = "none";
});


let botonPlaylist = document.getElementById("botonPlaylist").addEventListener("click", ()=>{
    contenedorInicio.style.display = "none";
    pantallaInicio.style.display = "none";
    contenedorPlaylist.style.display = "flex";
    pantallaPlaylist.style.display = "flex";
    contenedorBusqueda.style.display = "none";
    pantallaBuscador.style.display = "none";
    contenedorCreditos.style.display = "none";
    pantallaCreditos.style.display = "none";
});

let botonBuscador = document.getElementById("busqueda").addEventListener("click", ()=>{
    contenedorInicio.style.display = "none";
    pantallaInicio.style.display = "none";
    contenedorPlaylist.style.display = "none";
    pantallaPlaylist.style.display = "none";
    contenedorBusqueda.style.display = "flex";
    pantallaBuscador.style.display = "flex";
    contenedorCreditos.style.display = "none";
    pantallaCreditos.style.display = "none";
    
});

let botonCreditos = document.getElementById("creditos").addEventListener("click", ()=>{
    contenedorInicio.style.display = "none";
    pantallaInicio.style.display = "none";
    contenedorPlaylist.style.display = "none";
    pantallaPlaylist.style.display = "none";
    contenedorBusqueda.style.display = "none";
    pantallaBuscador.style.display = "none";
    contenedorCreditos.style.display = "flex";
    pantallaCreditos.style.display = "flex";
    
});
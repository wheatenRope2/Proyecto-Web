let contenedorInicio = document.getElementById("conenetorInicio")

document.getElementById("botonInicio").addEventListener("click", ()=>{
    contenedorInicio.style.display = "block";
    contenedorPlaylist.style.display = "none";
    contenedorMix.style.display = "none";
    contenedorAjustes.style.display = "none";
    contenedorCreditos.style.display = "none";
});

let contenedorPlaylist = document.getElementById("contenedorPlaylist")
document.getElementById("botonPlaylist").addEventListener("click", ()=>{
    contenedorInicio.style.display = "none";
    contenedorPlaylist.style.display = "block";
    contenedorMix.style.display = "none";
    contenedorAjustes.style.display = "none";
    contenedorCreditos.style.display = "none";
    
});

let contenedorMix = document.getElementById("contenedorMimix")
document.getElementById("botonMimix").addEventListener("click", ()=>{
    contenedorInicio.style.display = "none";
    contenedorPlaylist.style.display = "none";
    contenedorMix.style.display = "block";
    contenedorAjustes.style.display = "none";
    contenedorCreditos.style.display = "none";
    
});

let contenedorAjustes = document.getElementById("contenedorAjustes")
document.getElementById("ajustes").addEventListener("click", ()=>{
    contenedorInicio.style.display = "none";
    contenedorPlaylist.style.display = "none";
    contenedorMix.style.display = "none";
    contenedorAjustes.style.display = "block";
    contenedorCreditos.style.display = "none";
    
});

let contenedorCreditos = document.getElementById("contenedorCreditos")
document.getElementById("creditos").addEventListener("click", ()=>{
    contenedorInicio.style.display = "none";
    contenedorPlaylist.style.display = "none";
    contenedorMix.style.display = "none";
    contenedorAjustes.style.display = "none";
    contenedorCreditos.style.display = "block";
    
});

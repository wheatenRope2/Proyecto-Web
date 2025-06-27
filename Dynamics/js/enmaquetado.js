
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

const cuadros = document.querySelectorAll(".cuadro-cancion");
let indexCentro = 0;

function actualizarCarrusel(){
    cuadros.forEach((cuadro, i) => {
        cuadro.style.zIndex = "0";
        cuadro.style.opacity = "0";
        cuadro.style.transform = "translateX(-50%) scale(0)";
    });

    const total = cuadros.length;
    const mostrar = 3;

    for(let offset = -mostrar; offset <= mostrar; offset++){
        let idx = (indexCentro + offset + total) % total;
        let cuadro = cuadros[idx];

        let scale = 1 - Math.abs(offset) * 0.2;
        let opacity = 1 - Math.abs(offset) * 0.3;
        let translateX = offset * 100;

        cuadro.style.transform = `translate(-50%, -50%) translateX(${offset * 100}%) scale(${scale})`;
        cuadro.style.opacity = opacity;
        cuadro.style.zIndex = 5 - Math.abs(offset);
    }
}

function moverCarrusel(direccion){
    indexCentro = (indexCentro + direccion + cuadros.length) % cuadros.length;
    actualizarCarrusel();
}

document.getElementById("btnIzq").addEventListener("click", () => moverCarrusel(-1));
document.getElementById("btnDer").addEventListener("click", () => moverCarrusel(1));

actualizarCarrusel();
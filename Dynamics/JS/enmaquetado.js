
let contenedorInicio = document.getElementById("contenedorInicio");
let contenedorPlaylist = document.getElementById("contenedorPlaylist");
let contenedorBusqueda = document.getElementById("contenedorBuscador");
let contenedorCreditos = document.getElementById("contenedorCreditos");
let pantallaInicio = document.getElementById("pantallaInicio");
let pantallaPlaylist = document.getElementById("pantallaPlaylist");
let pantallaBuscador = document.getElementById("pantallaBuscador");
let pantallaCreditos = document.getElementById("pantallaCreditos");
let btnCanciones = document.getElementById("listaCanciones");
let btnArtistas = document.getElementById("listaArtistas");
let contenedorArt = document.getElementById("contenedorART");
let musicContainer = document.getElementById("musicContainer");

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

btnCanciones.addEventListener("click", ()=>{
    musicContainer.style.display="flex";
    contenedorArt.style.display="none";
    console.log("presionado");
})

btnArtistas.addEventListener("click", ()=>{
    musicContainer.style.display="none";
    contenedorArt.style.display="flex";
    console.log("presionado");
})


function setupCarrusel(btnIzqId, btnDerId, carruselId, claseCuadro){
    const cuadros = document.querySelectorAll(`#${carruselId} .${claseCuadro}`);
    let indexCentro = 0;

    function actualizarCarrusel(){
        cuadros.forEach((cuadro) => {
            cuadro.style.zIndex = "0";
            cuadro.style.opacity = "0";
            cuadro.style.transform = "translate(-50%, -50%) scale(0)";
        });

        const total = cuadros.length;
        const mostrar = 4;

        for(let offset = -mostrar; offset <= mostrar; offset++){
            let idx = (indexCentro + offset +total) % total;
            let cuadro = cuadros[idx];

            let scale = 1 - Math.abs(offset) * 0.2;
            let opacity = 1 - Math.abs(offset) * 0.3;

            cuadro.style.transform = `translate(-50%, -50%) translateX(${offset * 100}%) scale(${scale})`;
            cuadro.style.opacity = opacity;
            cuadro.style.zIndex = 5 - Math.abs(offset);
        }
    }

    function moverCarrusel(direccion){
        indexCentro = (indexCentro + direccion + cuadros.length) % cuadros.length;
        actualizarCarrusel();
    }

    document.getElementById(btnIzqId).addEventListener("click", () => moverCarrusel(-1));
    document.getElementById(btnDerId).addEventListener("click", () => moverCarrusel(1));

    actualizarCarrusel();
}
//Carruel con imagenes y funcional
let ElementosCarrusel = [];
let contenedor = document.getElementById("carruselCanciones");

for (let i = 0; i <= 9; i++) 
{
    ElementosCarrusel[i] = "c" + Math.floor(Math.random() * 50);

    let cuad = document.createElement("div");
    cuad.className = "cuadro-cancion";
    cuad.id = ElementosCarrusel[i];

    let cancion = baseDatos.canciones.find(c => c.id === cuad.id);

    if (cancion) 
        {
        let imagec = document.createElement("img");
        imagec.src = cancion.imagen;
        cuad.appendChild(imagec);

        cuad.addEventListener("click", () => 
        {
            player.loadVideoById(cancion.link);
        });

        contenedor.appendChild(cuad);
        console.log(cancion.link);
    }
}
setupCarrusel("btnIzq", "btnDer", "carruselCanciones", "cuadro-cancion");
setupCarrusel("btnIzqArtistas", "btnDerArtistas", "carruselArtistas", "cuadro-artistas");
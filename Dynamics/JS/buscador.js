
const input = document.getElementById("buscador");
const listaCancion = document.getElementById("lista-canciones");
const listaArtista = document.getElementById("lista-artistas");
const datosBuscador = baseDatos;

function mostrarCanciones(filtradasCancion) 
{
  listaCancion.innerHTML = "";
  filtradasCancion.forEach(cancion => 
  {
    
    let butc = document.createElement("button");
    butc.id = `${cancion.nombre}`;
    let image = document.createElement("img");
    image.src = `${cancion.imagen}`;
    butc.textContent = `${cancion.nombre}`;
    listaCancion.appendChild(butc);
    butc.appendChild(image);
    butc.addEventListener("click", () => 
    {
        player.loadVideoById(cancion.link);
    });
  });
}
function mostrarArtistas(filtradosArtista) 
{
  listaArtista.innerHTML = "";

  filtradosArtista.forEach(artista => 
  {
    let buta = document.createElement("button");
    buta.id = `${artista.artista}`;
    buta.textContent = `${artista.artista}`;
    let imagea = document.createElement("img");
    imagea.src = `${artista.imagen}`;
    listaArtista.appendChild(buta);
    buta.appendChild(imagea);
    buta.addEventListener("click", () => 
    {
      console.log(`${artista.id}`);
    });
  });
}
input.addEventListener("keyup", () => 
{
  let textoCancion = input.value.toLowerCase();
  let filtradasCancion = datosBuscador.canciones.filter(c =>
    c.nombre.toLowerCase().includes(textoCancion)
  );
    mostrarCanciones(filtradasCancion);
  let textoArtista = input.value.toLowerCase();
  let filtradasArtista = datosBuscador.artistas.filter(c =>
    c.artista.toLowerCase().includes(textoArtista)
  );
  mostrarArtistas(filtradasArtista); 
});

mostrarCanciones(datosBuscador.canciones);
mostrarArtistas(datosBuscador.artistas);


let player;
let duration = 0;
let lastVolume = 100;
let previousVolume;
let updateInterval;

const seekBar = document.getElementById("seekBar");
const volumeSlider = document.getElementById("volumeSlider");
const playPauseBtn = document.getElementById("playPausebtn");
const muteBtn = document.getElementById("muteBtn");

const vidDuration = document.getElementById("duration");
const currentTimeSpan = document.getElementById("currentTime");
let currentVolume

function onPlayerReady(event) {
    player.loadVideoById(datosBuscador.canciones[0].link);
    duration = player.getDuration();
    player.mute(); // empieza en mute para evitar bloqueo de autoplay
    player.playVideo();

    previousVolume = player.getVolume();
    volumeSlider.value = previousVolume;
    seekBar.max = duration;

    updateInterval = setInterval(() => {
        console.log(player.getPlayerState);
        if (player && player.getPlayerState() === YT.PlayerState.PLAYING) {
            seekBar.value = player.getCurrentTime();
        }

        // Detecta cambio externo de volumen y actualiza el slider
        currentVolume = player.getVolume();
        if (currentVolume !== previousVolume) {
            volumeSlider.value = currentVolume;
            previousVolume = currentVolume;
        }

        // Actualiza ícono del botón mute según estado
        if (player.isMuted()) {
            muteBtn.textContent = "🔇";
        } else {
            muteBtn.textContent = "🔊";
        }
    }, 1000);
}

function onPlayerStateChange(event){
    if (event.data == YT.PlayerState.PLAYING) {
        // btnPausa.innerHTML = ICON_PAUSE;
        playPauseBtn.textContent = "⏸️";
    } 
    else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
        // reproduciendo = false;
        playPauseBtn.textContent = "▶️";
        // btnPausa.innerHTML = ICON_PLAY;
    }
    if (event.data === YT.PlayerState.ENDED) {
        clearInterval(updateInterval);
    }
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        videoId: "",
        playerVars: {
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
        },
        events: {
            onReady: onPlayerReady,
            'onStateChange': onPlayerStateChange
        },
    });
}

// ▶️⏸️ Play/Pause
playPauseBtn.addEventListener("click", () => {
    let state = player.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
        player.pauseVideo();
        playPauseBtn.textContent = "▶️";
    } else {
        player.playVideo();
        playPauseBtn.textContent = "⏸️";
    }
});

// 🔊 Control de volumen con slider
volumeSlider.addEventListener("input", () => {
    const volume = parseInt(volumeSlider.value, 10);
    player.setVolume(volume);

    // Si estaba muteado y se mueve el slider, se desmutea
    if (player.isMuted() && volume > 0) {
        player.unMute();
    }

    lastVolume = volume;
    previousVolume = volume;
});

// 🔇 Mute/Unmute con botón
muteBtn.addEventListener("click", () => {
    if (player.isMuted()) {
        player.unMute();
        volumeSlider.value = lastVolume;
    } else {
        player.mute();
    }
});

// ⏩ Barra de duración (seek)
seekBar.addEventListener("input", () => {
    let seekTo = seekBar.value;
    console.log("AA")
    player.seekTo(seekTo, true);
});
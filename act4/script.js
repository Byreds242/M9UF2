const audioPlayer = document.getElementById("audio-player");
const progressBar = document.getElementById("progress-bar");
const songDisplay = document.getElementById("song-display");
const playBtn = document.getElementById("btn-play");
const volumeUp = document.getElementById("btn-subir-volumen");
const volumeDown = document.getElementById("btn-bajar-volumen");
const backBtn = document.getElementById("btn-atras");  // Botón de retroceso
const forwardBtn = document.getElementById("btn-adelante");  // Botón de avance
const speedDown = document.getElementById("btn-menos-velocidad"); // Botón de disminuir velocidad
const speedUp = document.getElementById("btn-mas-velocidad"); // Botón de aumentar velocidad
const speedText = document.getElementById("speed-text"); // Elemento que muestra la velocidad
const muteBtn = document.getElementById("btn-mute"); // Botón de mute

// Cargar y reproducir canción
function loadSong(songPath, songTitle) {
    audioPlayer.src = songPath;
    audioPlayer.play();
    songDisplay.textContent = songTitle;
    playBtn.src = "img/pause.png"; // Cambia el icono a pausa
}

// Reproducir / Pausar
playBtn.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.src = "img/pause.png";
    } else {
        audioPlayer.pause();
        playBtn.src = "img/play.png";
    }
});

// Actualizar barra de progreso
audioPlayer.addEventListener("timeupdate", () => {
    progressBar.max = audioPlayer.duration;
    progressBar.value = audioPlayer.currentTime;
});

// Cambiar posición en la canción
progressBar.addEventListener("input", () => {
    audioPlayer.currentTime = progressBar.value;
});

// Control de volumen
volumeUp.addEventListener("click", () => {
    if (audioPlayer.volume < 1) {
        audioPlayer.volume += 0.1;
    }
});

volumeDown.addEventListener("click", () => {
    if (audioPlayer.volume > 0) {
        audioPlayer.volume -= 0.1;
    }
});

// Funcionalidad de retroceso (5 segundos)
backBtn.addEventListener("click", () => {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 5);
});

// Funcionalidad de avance (5 segundos)
forwardBtn.addEventListener("click", () => {
    audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 5);
});

// Funcionalidad de disminuir velocidad
speedDown.addEventListener("click", () => {
    if (audioPlayer.playbackRate > 0.5) {
        audioPlayer.playbackRate -= 0.1;
        speedText.textContent = "x" + audioPlayer.playbackRate.toFixed(1);
    }
});

// Funcionalidad de aumentar velocidad
speedUp.addEventListener("click", () => {
    if (audioPlayer.playbackRate < 2) {
        audioPlayer.playbackRate += 0.1;
        speedText.textContent = "x" + audioPlayer.playbackRate.toFixed(1);
    }
});

// Funcionalidad de mute/unmute
muteBtn.addEventListener("click", () => {
    audioPlayer.muted = !audioPlayer.muted;
    muteBtn.src = audioPlayer.muted ? "img/mute_off.png" : "img/mute.png";
});

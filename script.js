let audioJaTocou = false;

/* ÁUDIO DA TELA INICIAL */
function tocarIntroducao(event) {
    if (event) {
        event.stopPropagation();
    }

    const audio = document.getElementById("audioIntroducao");

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;

    audio.play().catch((erro) => {
        console.log("Erro ao tocar áudio da introdução:", erro);
    });

    audioJaTocou = true;
}

/* TOCA O ÁUDIO NO PRIMEIRO CLIQUE DA PÁGINA */
function tocarAoPrimeiroClique() {
    if (audioJaTocou) return;

    const audio = document.getElementById("audioIntroducao");

    if (!audio) return;

    audio.play().catch((erro) => {
        console.log("Erro ao tocar áudio no primeiro clique:", erro);
    });

    audioJaTocou = true;
}

/* ÁUDIO DO MENU */
function tocarAudio() {
    const audio = document.getElementById("audioMenu");

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;

    audio.play().catch((erro) => {
        console.log("Erro ao tocar o áudio do menu:", erro);
    });
}

/* ATIVA O CLIQUE AUTOMÁTICO SÓ NA PÁGINA INICIAL */
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("audioIntroducao")) {
        document.addEventListener("click", tocarAoPrimeiroClique);
    }
});
function falarIntroducao() {
    const audio = new Audio("audio/digui.mp3");
    audio.play();
}

function tocarAudioServicos() {
    const audio = document.getElementById("audioServicos");

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;

    audio.play().catch((erro) => {
        console.log("Erro ao tocar o áudio de Serviços Públicos:", erro);
    });
}

function tocarAudioCelular() {
    const audio = document.getElementById("audioCelular");

    // reinicia o áudio caso já esteja tocando
    audio.pause();
    audio.currentTime = 0;

    // toca o áudio
    audio.play();
}
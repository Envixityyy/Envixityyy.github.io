var isPlaying = true

window.onload = function() {
    var bgAudio = document.getElementById("bgMusic");

    bgAudio.volume = 0.1; // Set Background Audio volume down
}

function changeImage() {
    var img = document.getElementById("ButtonImage");
    if (img.getAttribute("src") == "Useful Files/volume-up.png") {
        img.src = "Useful Files/volume-down.png";
    }
    else {
        img.src = "Useful Files/volume-up.png";
    }
}

function playPause() {
    var bgAudio = document.getElementById("bgMusic");

    if (isPlaying == true) {
        bgAudio.pause();
        isPlaying = false;
    }
    else {
        bgAudio.play();
        isPlaying = true;
    }
}

function playMeow() {
    var catAudio = document.getElementById("MeowSound");

    catAudio.play();
}
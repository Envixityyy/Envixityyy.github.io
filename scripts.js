let isPlaying = true

window.onload = function() { // Functions for after page load
    const bgmAudio = document.getElementById("bgMusic");
    const bgmIcon = document.getElementById("ButtonImage");
    let autoplay = bgmAudio.play();

    bgmAudio.volume = 0.1; // Set background volume down

    // New function goes down here!!! //

    if (autoplay !== undefined) { // Autoplay thingy
        autoplay.then(_ => {
            // Autoplay works
        }).catch(error => {
            bgmAudio.pause();
            bgmIcon.src = "Useful Files/volume-down.png"
            isPlaying = false;
        });
    }
}

function changeImage() { // Change volume image on button click
    const img = document.getElementById("ButtonImage");
    if (img.getAttribute("src") == "Useful Files/volume-up.png") {
        img.src = "Useful Files/volume-down.png";
    }
    else {
        img.src = "Useful Files/volume-up.png";
    }
}

function playPause() { // Make audio button work
    const bgmAudio = document.getElementById("bgMusic");

    if (isPlaying == true) {
        bgmAudio.pause();
        isPlaying = false;
    }
    else {
        bgmAudio.play();
        isPlaying = true;
    }
}

function playMeow() { // Play the meow sound when clicking the cat icon
    const catAudio = document.getElementById("MeowSound");

    catAudio.play();
}
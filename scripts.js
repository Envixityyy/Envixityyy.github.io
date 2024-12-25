let isPlaying = true

window.onload = function() { // Functions for after page load
    const bgAudio = document.getElementById("bgMusic");
    const autoplayIcon = document.getElementById("ButtonImage");
    let promise = bgAudio.play();

    bgAudio.volume = 0.1; // Set background volume down

    // New function goes down here!!! //

    if (promise !== undefined) { // Autoplay thingy
        promise.then(_ => {
            // Autoplay works
        }).catch(error => {
            bgAudio.pause();
            autoplayIcon.src = "Useful Files/volume-down.png"
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
    const bgAudio = document.getElementById("bgMusic");

    if (isPlaying == true) {
        bgAudio.pause();
        isPlaying = false;
    }
    else {
        bgAudio.play();
        isPlaying = true;
    }
}

function playMeow() { // Play the meow sound when clicking the cat icon
    const catAudio = document.getElementById("MeowSound");

    catAudio.play();
}
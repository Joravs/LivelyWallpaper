document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".hoverButton");
    var sound = document.getElementById("hoverSound");

    buttons.forEach(function(button) {
        button.addEventListener("mouseenter", function() {
            sound.currentTime = 0; // Reset playback position
            sound.play();
        });
    });
});


function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
}

/**
 * Launchers buttons click
 */
document.getElementById('steam').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/S');
});

/**
 * Games buttons click
 */

document.getElementById('a').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/a');
});
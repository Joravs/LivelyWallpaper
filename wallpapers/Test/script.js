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

document.getElementById('egl').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/EGL');
});

document.getElementById('netm').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/NETM');
});

document.getElementById('rc').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/RC');
});

document.getElementById('rgl').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/RGL');
});

document.getElementById('uc').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/UC');
});

document.getElementById('asm').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/ASM');
});

document.getElementById('mve').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/MVE');
});

document.getElementById('suyu').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/Suyu');
});

document.getElementById('obs').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/OBS');
});
/**
 * Games buttons click
 */

document.getElementById('a').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/a');
});

document.getElementById('al').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/AL');
});

document.getElementById('au').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/AU');
});

document.getElementById('b3d').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/B3D');
});

document.getElementById('bbt').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/BBT');
});

document.getElementById('cs2').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/CS2');
});

document.getElementById('dbd').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/DBD');
});

document.getElementById('f').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/F');
});

document.getElementById('fg').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/FG');
});

document.getElementById('gg').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/GG');
});

document.getElementById('gi').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/GI');
});

document.getElementById('gtav').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/GTAV');
});

document.getElementById('lol').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/LOL');
});

document.getElementById('m').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/M');
});

document.getElementById('o').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/O');
});

document.getElementById('oac').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/OAC');
});

document.getElementById('oh').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/OH');
});

document.getElementById('p').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/P');
});

document.getElementById('ph').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/Ph');
});

document.getElementById('ppc').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/PPC');
});

document.getElementById('re2').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/RE2');
});

document.getElementById('rs').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/RS');
});

document.getElementById('sla').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/SLA');
});

document.getElementById('smt').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/SMT');
});

document.getElementById('v').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/V');
});

document.getElementById('xd').addEventListener('click', function() {
    fetchData('http://localhost:13597/run/XD');
});
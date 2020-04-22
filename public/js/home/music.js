var musicPlaying = 0;

function playAnimation() {
    $('#cap').css("animation", "headmove 2s linear both infinite");
    $('#guitarguyhd').css("animation", "headmove 2s linear both infinite");
    $('#guitarguyhnd').css("animation", "handmove 2s linear both infinite");
    $('#cap').css("animation", "headmove 2s linear both infinite");
    $('#guitarguyhd').css("animation", "headmove 2s linear both infinite");
    $('#guitarguyhnd').css("animation", "handmove 2s linear both infinite");

    $ferris = $(".ferris-wheel--core");
    if ($ferris.css('-webkit-animation-play-state') == 'paused') ferrisControl();
    animateText();
}

function stopAnimation() {
    $('#cap').css("animation", "none");
    $('#guitarguyhd').css("animation", "none");
    $('#guitarguyhnd').css("animation", "none");
    $('#cap').css("-webkit-animation", "none");
    $('#guitarguyhd').css("-webkit-animation", "none");
    $('#guitarguyhnd').css("-webkit-animation", "none");

    $ferris = $(".ferris-wheel--core");
    if ($ferris.css('-webkit-animation-play-state') == 'running') ferrisControl();
    hideText();
}

function playMusic1() {
    musicPlaying = 1;
    var music1 = document.getElementById("music1");
    var music2 = document.getElementById("music2");
    music2.pause();
    music1.play();
    playAnimation();
}

function playMusic2() {
    musicPlaying = 1;
    var music1 = document.getElementById("music1");
    var music2 = document.getElementById("music2");
    music1.pause();
    music2.play();
    playAnimation();
}

function pauseMusic() {
    musicPlaying = 0;
    var music1 = document.getElementById("music1");
    var music2 = document.getElementById("music2");
    music1.pause();
    music2.pause();
    stopAnimation();
}
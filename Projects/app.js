document.querySelectorAll('.menu-btn').forEach((btn, i) => {
    btn.style.animationDelay = `${0.4 + i * 0.12}s`;
    btn.style.animation = `fadeInDown 0.6s ${0.4 + i * 0.12}s ease both`;
});

document.getElementById("btn1").addEventListener("click", function() {
    window.location.href = "Runner/index.html";
});

document.getElementById("btn2").addEventListener("click", function() {
    window.location.href = "Space Invaders/index.html";
});

document.getElementById("btn3").addEventListener("click", function() {
    window.location.href = "Tetris/index.html";
});

document.getElementById("btn4").addEventListener("click", function() {
    window.location.href = "Pong/index.html";
});

document.getElementById("btn5").addEventListener("click", function() {
    window.location.href = "Breakout/index.html";
});

document.getElementById("btn6").addEventListener("click", function() {
    window.location.href = "Platformer/index.html";
});

document.getElementById("btn7").addEventListener("click", function() {
    window.location.href = "Fighter/index.html";
});

document.getElementById("btn8").addEventListener("click", function() {
    window.location.href = "Shooter/index.html";
});

document.getElementById("btn-back").addEventListener("click", function() {
    window.location.href = "./index.html";
});






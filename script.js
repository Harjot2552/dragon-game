score = 0;
cross = true;
bgmusic = new Audio('music.mp3')
audiogo = new Audio('gameover.mp3')


setTimeout(() => {
    bgmusic.play();
}, 1000);


document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        dino = document.querySelector(".dino")
        dino.classList.add('animateDino')
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700)
    }
    if (e.keyCode == 39) {
        dino = document.querySelector(".dino")
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector(".dino")
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}
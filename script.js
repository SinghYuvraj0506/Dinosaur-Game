console.log("Welcome to the game")
let score = 0;
let cross = true;
scorecard = document.querySelector(".scorecard")
let audioelement = new Audio("Mario Castle.mp3")
let audioelement2 = new Audio("Mario End.mp3")

let a = setInterval(() => {
    audioelement.play()
    
}, audioelement.duration);

document.onkeydown = function (e) {
    console.log("keynote is " + e.keyCode)
    dino = document.querySelector('.dino')
    if (e.keyCode == 38 || e.keyCode == 32) {

        dino.classList.add("animatedino")
        setTimeout(() => {
            dino.classList.remove("animatedino")
        }, 700);

    }

    else if (e.keyCode == 39) {
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
        dino.style.left = dinox + 100 + "px";
    }

    else if (e.keyCode == 37) {
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
        dino.style.left = dinox - 100 + "px";
    }

}

setInterval(() => {
    dino = document.querySelector('.dino')
    obstacle = document.querySelector('.obstacle')
    gameOver = document.querySelector('.heading')

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"))
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"))

    let diffx = Math.abs(dx - ox)
    let diffy = Math.abs(dy - oy)

    if (diffx < 90 && diffy < 100) {
        audioelement2.play()
        audioelement.pause()
        clearInterval(a)
        gameOver.innerHTML = "<h1>GAMEOVER, Reload to PLay Again<h1>"
        obstacle.classList.remove("obstacleani")

    }
    else if (diffx < 145 && cross) {
        score += 1;
        scorecard.innerHTML = "Your Score - " + score
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(document.querySelector(".obstacleani"),null).getPropertyValue("animation-duration"))
            newdur = anidur - 0.1
            console.log(newdur)
            document.querySelector(".obstacleani").style.animationDuration= newdur + "s";
            
        }, 500);
    }
}, 10);
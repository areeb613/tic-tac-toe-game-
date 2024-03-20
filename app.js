var box1 = document.querySelector("#box-1");
var box2 = document.querySelector("#box-2");
var box3 = document.querySelector("#box-3");
var box4 = document.querySelector("#box-4");
var box5 = document.querySelector("#box-5");
var box6 = document.querySelector("#box-6");
var box7 = document.querySelector("#box-7");
var box8 = document.querySelector("#box-8");
var box9 = document.querySelector("#box-9");
var winner = document.querySelector("#winner-gif")
var Clicksound = new Audio();
Clicksound.src = "sound/Button-15.mp3"
var winningSound = new Audio();
winningSound.src = "sound/winning.mp3"
var count = 0;
function fill(control) {
    if (count % 2 === 0) {
        if (document.getElementById(control.id).innerHTML === "") {
            document.getElementById(control.id).innerHTML = "x"
            Clicksound.play()
            count++
        }
    }
    else {
        if (document.getElementById(control.id).innerHTML === "") {
            document.getElementById(control.id).innerHTML = "o"
            Clicksound.play()
            count++
        }
    }


    // start horizontally check
    // x portion
    if (box1.innerHTML === "x" && box2.innerHTML === "x" && box3.innerHTML === "x") {
        winningSound.play()
    winner.src = "sound/winner-1.gif"
    setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    else if (box4.innerHTML === "x" && box5.innerHTML === "x" && box6.innerHTML === "x") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    else if (box7.innerHTML === "x" && box8.innerHTML === "x" && box9.innerHTML === "x") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    // 0 portion
    else if (box1.innerHTML === "o" && box2.innerHTML === "o" && box3.innerHTML === "o") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    else if (box4.innerHTML === "o" && box5.innerHTML === "o" && box6.innerHTML === "o") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    else if (box7.innerHTML === "o" && box8.innerHTML === "o" && box9.innerHTML === "o") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    // end horizontally portion


    // vertically check start
    // x portion
    else if (box1.innerHTML === "x" && box4.innerHTML === "x" && box7.innerHTML === "x") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    else if (box2.innerHTML === "x" && box5.innerHTML === "x" && box8.innerHTML === "x") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    else if (box3.innerHTML === "x" && box6.innerHTML === "x" && box9.innerHTML === "x") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    // 0 portion
    else if (box1.innerHTML === "o" && box4.innerHTML === "o" && box7.innerHTML === "o") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    else if (box2.innerHTML === "o" && box5.innerHTML === "o" && box8.innerHTML === "o") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    else if (box3.innerHTML === "o" && box6.innerHTML === "o" && box9.innerHTML === "o") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    // end vertically check


    // start diagnol check
    // x portion
    else if (box1.innerHTML === "x" && box5.innerHTML === "x" && box9.innerHTML === "x") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    else if (box3.innerHTML === "x" && box5.innerHTML === "x" && box7.innerHTML === "x") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    // 0 portion
    else if (box1.innerHTML === "o" && box5.innerHTML === "o" && box9.innerHTML === "o") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }
    else if (box3.innerHTML === "o" && box5.innerHTML === "o" && box7.innerHTML === "o") {
        winningSound.play()
        winner.src = "sound/winner-1.gif"
        setTimeout(winnerHide, 3500)
        count = 0
        clear()
    }


    if (count === 9) {
        clear()
        count = 0;
    }


}
function clear() {
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
}


function winnerHide(){
    winner.src = ""
}
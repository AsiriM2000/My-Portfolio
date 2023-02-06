$(document).on('click', "#start>h1", function () {
    $(".preloader").css("display", "none")
});

let girl = document.getElementById("girl");

breathingImageNumber = 0;
breathingAnimationNumber = 0;

function breathingAnimation() {
    breathingImageNumber = breathingImageNumber + 1;
    if (breathingImageNumber == 11) {
        breathingImageNumber = 1;
    }
    girl.src = "assets/image/characters/Idle%20(" + breathingImageNumber + ").png";
}

function breathingAnimationStart() {
    breathingAnimationNumber = setInterval(breathingAnimation, 200);
}

runImageNumber = 0;
runAnimationNumber = 0;

function runAnimation() {
    runImageNumber = runImageNumber + 1;
    if (runImageNumber == 9) {
        runImageNumber = 1;
    }
    girl.src = "assets/image/characters/Run%20(" + runImageNumber + ").png";
}

function runAnimationStart() {
    runAnimationNumber = setInterval(runAnimation, 100);
    clearInterval(breathingAnimationNumber);
}

jumpImageNumber = 1;
jumpAnimationNumber = 0;
girlMarginTop = 790;

function jumpAnimation() {
    jumpImageNumber = jumpImageNumber + 1;

    if (jumpImageNumber <= 6) {
        girlMarginTop = girlMarginTop - 35;
        girl.style.marginTop = girlMarginTop + "px";
    }

    if (jumpImageNumber >= 7) {
        girlMarginTop = girlMarginTop + 35;
        girl.style.marginTop = girlMarginTop + "px";
    }

    if (jumpImageNumber == 11) {
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber=0;
        runAnimationStart();
    }

    girl.src = "assets/image/characters/Jump%20(" + jumpImageNumber + ").png"
}

function jumpAnimationStart() {
    clearInterval(breathingAnimationNumber);
    runImageNumber = 0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber = setInterval(jumpAnimation, 100);
}

function keyCheck(event) {
    var keyCode = event.which;
    if (keyCode == 13) {
        if (runAnimationNumber == 0) {
            runAnimationStart();
        }
        if (moveBackgroundAnimationId == 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100);
        }
        if (barrierAnimationId == 0) {
            barrierAnimationId = setInterval(barrierAnimation, 100);
        }
    }

    if (keyCode == 32) {
        if (jumpAnimationNumber == 0) {
            jumpAnimationStart();
        }
        if (moveBackgroundAnimationId == 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100);
        }
        if (barrierAnimationId == 0) {
            barrierAnimationId = setInterval(barrierAnimation, 100);
        }
    }

}


var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;
var score =0;

function moveBackground() {

    backgroundImagePositionX = backgroundImagePositionX - 20;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";

    score = score +1;
    document.getElementById("score").innerHTML = score;
}

barrierMarginLeft = 1540;

function barrierBox() {
    for (var i = 0; i <= 10; i++) {

        var box = document.createElement("div");
        box.className = "box";
        document.getElementById("background").appendChild(box);
        box.style.marginLeft = barrierMarginLeft + "px";
        box.id = "box" + i;

        if (i < 5) {
            barrierMarginLeft = barrierMarginLeft + 2000;
        }

        if (i > 5) {
            barrierMarginLeft = barrierMarginLeft + 1000;
        }
    }
}

var barrierAnimationId = 0;

function barrierAnimation() {
    for (var i = 0; i < 10; i++) {
        var box = document.getElementById("box" + i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 35;
        box.style.marginLeft = newMarginLeft + "px";


        if (newMarginLeft >= -120 & newMarginLeft <= 100) {
            if (girlMarginTop > 760) {
                clearInterval(barrierAnimationId);

                clearInterval(runAnimationNumber);
                runAnimationNumber = -1;

                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber = -1;

                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId = -1;

                deadAnimationNumber = setInterval(girlDeadAnimation,100);
            }
        }
    }
}

deadImageNumber = 1;
deadAnimationNumber =0;
function girlDeadAnimation(){
    deadImageNumber = deadImageNumber +1;
    if (deadImageNumber == 11){
        deadImageNumber =  10;
    }
    girl.src = "assets/image/characters/Dead%20("+deadImageNumber+").png"
}
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

runImageNumber =0;
runAnimationNumber =0;

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

function keyCheck(event) {
    var keyCode = event.which;
    if (keyCode == 13) {
        document.getElementById("gameIntru").style.display = "none";
        if (runAnimationNumber == 0) {
            runAnimationStart();
        }
    }

    if (moveBackgroundAnimationId == 0) {
        moveBackgroundAnimationId = setInterval(moveBackground, 100);
    }
}


var backgroundImagePositionX =0;
var moveBackgroundAnimationId =0;
function moveBackground(){

    backgroundImagePositionX = backgroundImagePositionX -20;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX +"px";
}



let boy = document.getElementById("boy");

idleImageNumber = 0;
idleAnimationNumber = 0;
flyImageNumber = 0;
flyAnimationNumber = 0;

function flyAnimation() {
    flyImageNumber = flyImageNumber + 1;
    if (flyImageNumber == 11) {
        flyImageNumber = 1;
    }
    boy.src = "assets/image/test/Idle%20(1)(" + idleImageNumber + ").png";
}

function flyAnimationStart() {
    flyAnimationNumber = setInterval(flyAnimation, 100);
    clearInterval(idleAnimationNumber);
}

function keyCheck(event){
    var keyCode = event.which;


}

function keyCheck(event) {
    var keyCode = event.which;
    if (keyCode == 13) {
        document.getElementById("gameIntru").style.display = "none";
        if (moveBackgroundAnimationId == 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100);
        }
    }

    function idleAnimation() {
        idleImageNumber = idleImageNumber + 1;
        if (idleImageNumber == 9) {
            idleImageNumber = 1;
        }
        boy.src = "assets/image/characters/Run%20(" + idleImageNumber + ").png";
    }

    idleAnimationNumber = setInterval(idleAnimation, 200);


}
var backgroundImagePositionX =0;
var moveBackgroundAnimationId =0;
function moveBackground(){

    backgroundImagePositionX = backgroundImagePositionX -20;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX +"px";
}



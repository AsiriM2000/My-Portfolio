let boy = document.getElementById("boy");
idleImageNumber = 0;
idleAnimationNumber = 0;

function idleAnimation() {

    idleImageNumber = idleImageNumber + 1;
    if (idleImageNumber == 3) {
        idleImageNumber = 1;
    }
    boy.src = "assets/image/test/Fly%20(" + idleImageNumber + ").png";
}

function idleAnimationStart() {
    idleAnimationNumber = setInterval(idleAnimation, 200);
}

// flyImageNumber = 0;
// flyAnimationNumber = 0;
//
// function flyAnimation() {
//     flyImageNumber = flyImageNumber + 1;
//     if (flyImageNumber == 3) {
//         flyImageNumber = 1;
//     }
//     boy.src = "assets/image/test/Fly%20(" + idleImageNumber + ").png";
// }
//
// function flyAnimationStart() {
//     flyAnimationNumber = setInterval(flyAnimation, 100);
//     clearInterval(idleAnimationNumber);
// }
//
// function keyCheck(event){
//     var keyCode = event.which;
//
//   
// }
function keyCheck(event) {
    var keyCode = event.which;
    if (keyCode == 13) {
        if (moveBackgroundAnimationId == 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100);
        }
    }
}

var backgroundImagePositionX =0;
var moveBackgroundAnimationId =0;
function moveBackground(){

    backgroundImagePositionX = backgroundImagePositionX -20;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX +"px";
}
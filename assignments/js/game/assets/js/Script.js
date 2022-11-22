$(document).on('click',"#start>h1",function (){
    $(".preloader").css("display","none")
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

jumpImageNumber =1;
jumpAnimationNumber =0;
girlMarginTop = 100;

function jumpAnimation(){
    jumpImageNumber = jumpImageNumber +1;

    if (jumpImageNumber <= 6){
        girlMarginTop = girlMarginTop -20;
        girl.style.marginTop = girlMarginTop + "px";
    }

    if (jumpImageNumber >= 7){
        girlMarginTop = girlMarginTop + 20;
        girl.style.marginTop = girlMarginTop +"px";
    }

    if (jumpImageNumber == 11){
        jumpImageNumber =1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber =0;
        runAnimationStart();
    }

    girl.src = "assets/image/characters/Jump%20("+jumpImageNumber+").png"
}

function jumpAnimationStart(){
    clearInterval(breathingAnimationNumber);
    runImageNumber =0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber = setInterval(jumpAnimation,100);
}

function keyCheck(event) {
    var keyCode = event.which;
    if (keyCode == 13) {
        if (runAnimationNumber == 0) {
            runAnimationStart();
        }
        document.getElementById("gameIntru").style.display='none';
        if (moveBackgroundAnimationId == 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100);
        }
    }

    if (keyCode == 32){
        if (jumpAnimationNumber == 0){
            jumpAnimationStart();
        }
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



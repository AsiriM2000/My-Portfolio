
let boy = document.getElementById("boy");
idleImageNumber =0;
idleAnimationNumber =0;

function idleAnimation(){

    idleImageNumber = idleImageNumber +1;
    if (idleImageNumber == 11){
        idleImageNumber =1;
    }
    boy.src = "assets/image/Idle%20("+idleImageNumber+").png";
}

function idleAnimationStart(){
    idleAnimationNumber = setInterval(idleAnimation,200);
}
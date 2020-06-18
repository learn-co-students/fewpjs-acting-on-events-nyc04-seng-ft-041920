// Your code here

document.addEventListener("keydown",function(e){
    if(e.key === "ArrowLeft"){
        moveDodgerLeft();
    }else if(e.key === "ArrowRight"){
        moveDodgerRight();
    }
});

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 12}px`;
    }
}

function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    // let clientWidth = parseInt(document.getElementById('game').clientWidth); //grab the width of the div#game

    if (left < 360) {
      dodger.style.left = `${left + 12}px`;
    }
}

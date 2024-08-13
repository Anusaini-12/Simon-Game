let gameSeq = [];
let userSeq = [];
let btnColor = ["red","green","blue","yellow"];
let h3 = document.querySelector("h3");

let start = false;
let level=0;

document.addEventListener("keypress", function(){
    if(start == false){
    console.log("Game starts.")
    levelUp();
    start = true;
    }
});

function gameFlashBtn(btnColor){
    btnColor.classList.add("gameFlash");
    
    setTimeout(function (){
        btnColor.classList.remove("gameFlash");
    },200);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `LEVEL ${level}`;   
    
    let randIdx = Math.floor(Math.random()* 3);
    let randColor = btnColor[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlashBtn(randBtn);
}


function userFlashBtn(btnColor){
    btnColor.classList.add("userFlash");
    
    setTimeout(function (){
        btnColor.classList.remove("userFlash");
    },200);
}

function checkSeq(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,800);
        }
    }
    else{
        h3.innerHTML = `Game Over! You scored <b>${level}</b><br>Press any key to start the game.`;
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(function(){
            body.style.backgroundColor = "white";
        },200);
        resetGame();
      
    }
     
}


function btnPress(){
    let btn = this;
    userFlashBtn(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
   for( btn of allBtns){
         btn.addEventListener("click", btnPress);
   }


function resetGame(){
    start =false;
    gameSeq = [];
    userSeq = [];
    // displayScore ();
    level = 0;
}

// function displayScore(){
//     h1 = document.createElement("h1");
//     h1.innerHTML = `HIGHEST SCORE = ${level}`;
//     document.querySelector("body").append(h1);
//     h1.classList.add("highestScore");
    
// }


let gameSeq= [];
let userSeq=[];


let btns=["yellow", "green", "red", "purple"];

let started = false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener("keypress", function(){
    console.log(("game started"));
    if(started == false){
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    //to flash we added this class, then we need to remove also tos top flashing
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    //to flash we added this class, then we need to remove also tos top flashing
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}
function levelUp(){
    userSeq = [];
    // level++;
    // document.querySelector("h2").innerText = `Level ${level}`;
    level++;

    h2.innerText = `Level ${level}`;

    //now button will flassh many times so make fn for it, btn will flash 2 timess when on gameSeq and again when user press it


    let randIdx= Math.floor(Math.random()*3);
    //before flashing chooce a random btn

    let randColor = btns[randIdx];

    //and that randbtn ka color class we can access, so we will know which one button we have to flash

    let randBtn = document.querySelector(`.${randColor}`);  //. will string, but randcolor variable part so use $


    gameSeq.push(randColor);
    console.log(gameSeq);








    gameFlash(randBtn);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);

    //now game wait for user to click so use event listeners
}
function btnPress(){
    console.log("btn was pressed");
    // //first detect which btn was pressed
    console.log(this);  //will give btn which is clicked so store it
    let btn =this;
    userFlash(btn);

    //we will find of color of btn and push inn userseq arr
    userColor = btn.getAttribute("id");  //and id attribut value is equal to its color
    console.log(userColor);

    userSeq.push(userColor);
    //check if match with gameseq , and we will check only last color which we clicked
    //user at every level generate new color

    checkAns(userSeq.length-1);
 
}
let allBtns =document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function checkAns(idx){
    // console.log("check answer");
    // //compare userseq and gameseq
    // if(userSeq.length == gameSeq.length){
    //     for(let i=0; i<userSeq.length; i++){
    //         if(userSeq[i]!= gameSeq[i]){
    //             return;
    //         }
    //     }
    //     levelUp();
    // }else{
    //     //if userSeq length is not equal to gameSeq length then game over
    //     alert("Game Over");
    // }
    

    //track level
    console.log(" curr level : " , level);
    //level= gameSeq.length =userseq.lenght
    // let idx= level-1;

    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same valeu");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
            // levelUp();
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to startt over.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();
    }

}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

// ai generated code for toggling round selector menu

const roundSelector = document.querySelector(".roundSelector");
const toggleBtn = document.querySelector(".roundToggle");

toggleBtn.addEventListener("click", () => {
  roundSelector.classList.toggle("open");

  const expanded = roundSelector.classList.contains("open");
  toggleBtn.setAttribute("aria-expanded", expanded);
});


//resets the game
function resetGame() {
    console.log("Resetting game...");
  // Reset scores and game state here
    gameState.userScore = 0;
    gameState.compScore = 0;
    gameState.isOver = false;
    gameState.winsNeeded = Math.ceil(gameState.maxRounds / 2);

    uScore.innerText = 0;
    cScore.innerText = 0;
    showRoundMessage("");
}


document.querySelectorAll("[data-rounds]").forEach(btn => {
    btn.addEventListener("click", () => {
    const rounds = Number(btn.dataset.rounds);
    console.log("Game rounds:", rounds);

    gameState.maxRounds = rounds;
    gameState.winsNeeded = Math.ceil(rounds / 2);
    resetGame()

    // close menu
    roundSelector.classList.remove("open");
  });
});

// my code starts here


//stores game state
const gameState={
    maxRounds: 3,
    winsNeeded:2,
    userScore: 0,
    compScore: 0,
    isOver: false
};


const choices =document.querySelectorAll('[data-move]');
let uScore=document.getElementById("uScore");
let cScore=document.getElementById("cScore");
const roundMessage=document.getElementById("roundMessage");
const gameOverlay=document.getElementById("gameOverlay");
const gameResultText=document.getElementById("gameResultText");
const restartGameBtn=document.getElementById("restartGameBtn");


function showGameOverlay(message){
    gameResultText.textContent=message;
    gameOverlay.hidden=false;
}

function showRoundMessage(message){
    roundMessage.textContent=message;
}

restartGameBtn.addEventListener('click',()=>{
    gameOverlay.hidden=true;
    showRoundMessage("");
    resetGame();
});

//generates computer choice
const compChoice=()=>{
    const choiceArray=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return choiceArray[randomIndex];
};

//fn that tells who won
function checkWinner(userChoice, computerChoice){
    if(userChoice===computerChoice){
        return "tie";
    }
    else if((userChoice==='rock' && computerChoice==='scissors') ||
            (userChoice==='paper' && computerChoice==='rock') ||
            (userChoice==='scissors' && computerChoice==='paper')){
                return "user";
            }
    else{
        return "computer";
    }
};




//fn to check if game is over
function checkGameOver(){
    if(gameState.userScore===gameState.winsNeeded){
        gameState.isOver=true;
        showGameOverlay("You win the Game!");
    }
    else if(gameState.compScore===gameState.winsNeeded){
        gameState.isOver=true;
        showGameOverlay("Computer wins the Game");
    }
};

//fn to show round message
function showRoundMessage(message){
    roundMessage.innerText=message;
}


//play area
function playGame (userChoice){
    if(gameState.isOver) return;

    console.log("User choice is: "+userChoice);
    const computerChoice= compChoice();
    console.log("Computer choice is: "+computerChoice);

    //Compare choices
    const result = checkWinner(userChoice, computerChoice);
    console.log("Result is: "+result);

    if(result==="user"){
        gameState.userScore++;
        uScore.innerText=gameState.userScore;
        showRoundMessage("You Win this Round!");

    }
    else if(result==="computer"){
        gameState.compScore++;
        cScore.innerText=gameState.compScore;
        showRoundMessage("Computer Wins this Round!");
    }
    else{
        showRoundMessage("It's a Tie!");
    }
    checkGameOver();

};

choices.forEach(choice => choice.addEventListener('click', ()=>{
    const userChoice= choice.dataset.move;
    playGame(userChoice);
}));
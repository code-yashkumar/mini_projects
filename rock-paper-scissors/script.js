let userScore=0;
let compScore=0;

const choices =document.querySelectorAll('.container');

const compChoice=()=>{
    const choiceArray=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return choiceArray[randomIndex];
};

const playGame= (userChoice)=>{
    console.log("User choice is: "+userChoice);
    //Generate computer choice
    const computerChoice= compChoice();
    console.log("Computer choice is: "+computerChoice);
};

choices.forEach(choice => choice.addEventListener('click', ()=>{
    const userChoice= choice.id;
    playGame(userChoice);
}));
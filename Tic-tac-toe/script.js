let cells=document.querySelectorAll(".cell");
let rst=document.getElementById("rst-btn");
let announce=document.querySelector(".announcement");

let turn=true; //true for X and false for O

const winComb=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

let moveCount=0;
cells.forEach((cell) => {
    cell.addEventListener("click", ()=>{
        console.log("cell clicked");
        cell.innerText=turn?"X":"O";
        turn=!turn;
        cell.disabled=true;
        checkWin();
        moveCount++;
        if(moveCount===9){
            announce.innerText="It's a Draw!";
            announce.style.display="block";
        }

    });
});

const checkWin=()=>{
    for(let pattern of winComb){
        let p1=cells[pattern[0]].innerText;
        let p2=cells[pattern[1]].innerText;
        let p3=cells[pattern[2]].innerText;
        if(p1!=="" && p1===p2 && p2===p3){
            if(!turn){
                announce.innerText="Player 1 (X) wins!";
            }
            else{
                announce.innerText="Player 2 (O) wins!";
            }
            announce.style.display="block";
        }
    }
};

rst.addEventListener("click", ()=>{
    cells.forEach((cell)=>{
        cell.innerText="";
        cell.disabled=false;
    })
    turn=true;
    moveCount=0;
    announce.style.display="none";
});
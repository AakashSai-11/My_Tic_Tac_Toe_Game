console.log("Welcome to the Tic Tac Toe");
let turn = "X";
let boxes = document.querySelectorAll(".box");
let turnText = document.getElementById("info");
gif = document.getElementById("excited-container");
let reset = document.getElementById("reset");
// result = document.getElementById("result");
// console.log(boxes[0]);
let isgameover = false;
let istied = true;
let count = 0;

// x and o alternation
function changeTurn() {
    if (turn == "X"){
        return "O";
    }
    else {
        return "X";
    }
}


// x and 0 winning conditions
function checkWin(){
    wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(
        e => {
            if((boxes[e[0]].textContent === boxes[e[1]].textContent) && (boxes[e[1]].textContent === boxes[e[2]].textContent) && (boxes[e[0]].textContent!=="")){
                // result.textContent = boxes[e[0]].textContent + 'WON';
                gif.classList.remove("d-none");
                turnText.textContent = "Congrats! " + boxes[e[0]].textContent + ' WON';
                isgameover = true;
                istied = false;
            }
        }
    )
}


// x and o turn changing logic
boxes.forEach(box =>
    {
        box.addEventListener("click", function(event){
            if(event.target.textContent === ""){
                event.target.textContent = turn;
                turn = changeTurn();
                turnText.textContent = "=> Turn for " + turn + " <=";
                checkWin();
                count = 0;
                checktie();
            }
        })
    }
)

//reset button logic
reset.addEventListener("click", function(){
    boxes.forEach(e => {
        e.textContent = "";
    })
    turn = "X";
    turnText.textContent = "=> Turn for " + turn + " <=";
    gif.classList.add("d-none");
    isgameover = false;
    istied = true;
    count = 0;
})

//match tied logic
function checktie(){
let myarr = Array.from(boxes);
    for(let e of myarr){
        if(e.textContent !== ""){
            count = count + 1;
        }
    }
    console.log(count);
    console.log(istied);
    if(count===9 && istied){
        turnText.textContent = "--Match tied , Try again once more!!--";
    }
}
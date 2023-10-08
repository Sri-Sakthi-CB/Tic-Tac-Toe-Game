var board = [];
for (var i = 1; i <=9; i++){
    board[i] = document.getElementById("B" + i.toString());
}
var alertbox = document.getElementById("alert-box");
var turn = 1;
var playSymbol = "X"
var isOver = false;
var table = document.getElementById("table");
var play = document.getElementById("play-button");
var reset = document.getElementById("reset")


function pressPlay(){
    play.style.display = "none";
    table.style.display = "block";
    reset.style.display = "block";
}

function turnPlayed(box){
    if (board[box].innerHTML !== ""){
        alertbox.innerHTML = "This box is already played";
        return;
    }
    if (turn % 2 == 0){
        playSymbol = "O";
    }
    if (isOver){
        return ;
    }
    board[box].innerHTML = playSymbol;
    var winningCondition = checkForWinners();
    if (winningCondition > 0){
        showWinner(winningCondition);
        isOver = true;
        }
    else {
        turn++;
        if (turn == 10){
            callDraw();
        }
        playSymbol = "X";
    }
}

function checkForWinners(){
    if (board[5].innerHTML === playSymbol){
        if (board[1].innerHTML === playSymbol && board[9].innerHTML === playSymbol){
            return 1;
        }
        else if (board[3].innerHTML === playSymbol && board[7].innerHTML === playSymbol){
            return 2;
        }
        else if (board[4].innerHTML === playSymbol && board[6].innerHTML === playSymbol){
            return 4;
        }
        else if (board[2].innerHTML === playSymbol && board[8].innerHTML === playSymbol){
            return 7;
        }
    }
    if (board[1].innerHTML === playSymbol){
        if (board[2].innerHTML === playSymbol && board[3].innerHTML === playSymbol){
            return 3;
        }
        if (board[4].innerHTML === playSymbol && board[7].innerHTML === playSymbol){
            return 6;
        }
    }
    if (board[9].innerHTML === playSymbol){
        if (board[7].innerHTML === playSymbol && board[8].innerHTML === playSymbol){
            return 5;
        }
        if (board[6].innerHTML === playSymbol && board[3].innerHTML === playSymbol){
            return 8;
        }
    }
    return -1;
}

function showWinner(winningCondition) {
    var turnedElements = [];
    if (winningCondition === 1){
        turnedElements = [1, 5, 9];
    }
    else if(winningCondition === 2){
        turnedElements = [3, 5, 7];
    }
    else if (winningCondition === 3){
        turnedElements = [1, 2, 3];
    }
    else if (winningCondition === 4){
        turnedElements = [4, 5, 6];
    }
    else if (winningCondition === 5){
        turnedElements = [7, 8, 9];
    }
    else if (winningCondition === 6){
        turnedElements = [1, 4, 7];
    }
    else if (winningCondition === 7){
        turnedElements = [2, 5, 8];
    }
    else if (winningCondition === 8){
        turnedElements = [3, 6, 9];
    }
    for (i of turnedElements){
        board[i].className = "winner";
    }
    alertbox.innerHTML = playSymbol + " player has Won!";
    isOver = true;
}

function callDraw(){
    alertbox.innerHTML = "The game has ended in a Draw.";
}

function reset(){
    for (var i = 1; i < board.length; i++){
        board[i].innerHTML = "";
        board[i].className = "";
    }
    alertbox.innerHTML = ""
    turn = 1;
    playSymbol = "X";
    isOver = false;
}
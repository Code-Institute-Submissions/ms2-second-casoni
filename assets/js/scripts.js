function firstMove() {
    document.turn = "a";
    showGameMsg( document.turn + " starts");
}

function showGameMsg(message) {
    document.getElementById("game-msg").innerHTML = message;
}

function nextMove(cell){
    cell.innerHTML = document.turn;
}


//theme-switcher

// gameboard object which has the board (an array) as well as the X's and O's (probably)
// a controller that controls the flow of the game (switching between different players for now)
let turnEnded = false;
let gameEnded = false;


const gameBoard = (function() {
    const arr = [];
    // array indexes from 0 to 8, meaning 9 slots or a 3x3 grid.
    for (i = 0; i < 9; i++) {
        arr[i] = '';
    }
    return arr;
  })();
const gameController =  (function() {
    // how does this work???
    // what methods would a gameController object have...
    // switchPlayer - switch between X's and Y's. 
    // check if the game is over by checking if the 3 rows-columns / diagonals rule has been fulfilled
    
    // i feel like I'm writing this completely wrong.

    const checkState = (gameBoard) => {
        if (gameBoard[0] == gameBoard[1] && gameBoard[1] == gameBoard[2] ) {
            // this is a placeholder check. I'll implement a more advanced logic system sometime in the future.
            console.log("Game has ended!");
            console.log(gameBoard[0] + " has won!");
            gameEnded = true;
        }
    }
    const endGame = (gameEnded) => {
        if (gameEnded == true) {
            alert("Game Ended!");
        }
    }
    const takeInput = () => {
        let input = prompt("Where would you like to place your symbol?")
        if (gameBoard[input] != '') {
            console.log("Cannot place there.");
        } else {
            gameBoard[input] = "X"
            console.log(gameBoard);
        }
        turnEnded = true;
    }
    // TO-DO: function to determine the player Turns. For the sake of simplicity I'll only do one player right now.  

    return { checkState, endGame, takeInput, gameEnded, turnEnded}
})();

// start the game
while (gameEnded != true) {
    gameController.takeInput();
    // check if the input ends the game
    gameController.checkState(gameBoard);
}



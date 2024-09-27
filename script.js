// gameboard object which has the board (an array) as well as the X's and O's (probably)
// a controller that controls the flow of the game (switching between different players for now)

const gameBoard = (function() {
    const arr = [];
    // array indexes from 0 to 8, meaning 9 slots or a 3x3 grid.
    for (i = 0; i < 9; i++) {
        arr[i] = '';
    }
    return arr;
  })();
const gameController =  (function(input) {
    // how does this work???
    // what methods would a gameController object have...
    // switchPlayer - switch between X's and Y's. 
    // check if the game is over by checking if the 3 rows-columns / diagonals rule has been fulfilled
    
    // i feel like I'm writing this completely wrong.


    let gameEnded = false;
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
    // TO-DO: function to determine the player Turns. For the sake of simplicity I'll only do one player right now. 


    // a function that takes the current player's input and checks if it can be placed (i.e no duplicates)
    if (gameBoard[input] != '') {
        alert("Cannot place here. Spot already occupied!");
    } else {
        gameBoard[input] = 'X'; // swap this X out later for CurrentPlayerSymbol
    }
    

    return { checkState, endGame, takeInput, gameEnded}
})
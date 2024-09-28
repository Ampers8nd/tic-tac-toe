// gameboard object which has the board (an array) as well as the X's and O's (probably)
// a controller that controls the flow of the game (switching between different players for now)
let turnEnded = false;
let gameEnded = false;
let filledCells = 0;

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

    const checkState = (gameBoard) => {
        const winConditions = [
            [0, 1, 2], // Row 1
            [3, 4, 5], // Row 2
            [6, 7, 8], // Row 3
            [0, 3, 6], // Column 1
            [1, 4, 7], // Column 2
            [2, 5, 8], // Column 3
            [0, 4, 8], // Diagonal 1
            [2, 4, 6]  // Diagonal 2
        ];
    
        // Loop through each win condition
        for (let condition of winConditions) {
            const [a, b, c] = condition;
            
            // Check if grid[a], grid[b], and grid[c] are equal and not empty
            if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
                return grid[a]; // Return the winner ("X" or "O")
            }
        }
    
        // If no winner, return null
        return null;
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
    // TO-DO: function to determine the player turns.
    // how about: X always starts? Then for every even number that filledCells takes on, X will go. Vice versa for O
    

    return { checkState, endGame, takeInput, gameEnded, turnEnded, checkWin}
})();

// start the game
while (gameEnded != true) {
    gameController.takeInput();
    // check if the input ends the game
    gameController.checkState(gameBoard);
}



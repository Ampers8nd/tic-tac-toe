let gameEnded = false;
let filledCells = 0;
let firstPlayer = 'X', secondPlayer = 'O';

const gameBoard = (function() {
    const arr = [];
    // array indexes from 0 to 8, meaning 9 slots or a 3x3.
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

        if (filledCells == 9) {
            gameEnded = true;
        }
    
        // Loop through each win condition
        for (let condition of winConditions) {
            const [a, b, c] = condition;
            
            // Check if gameBoard[a], gameBoard[b], and gameBoard[c] are equal and not empty
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                gameEnded = true;
                alert(gameBoard[a] + " has won!");
            }
        }
    }
    const endGame = (gameEnded) => {
        if (gameEnded == true) {
            alert("Game Ended!");
        }
    }
    const takeInput = () => {
        let input = prompt("Where would you like to place your symbol?")
        let player;
        if (filledCells % 2 == 0 || filledCells == 0) {
            player = firstPlayer;
        } else if (filledCells % 2 == 1 && filledCells != 0) {
            player = secondPlayer;
        } 

        if (gameBoard[input] != '') {
            console.log("Cannot place there.");
        } else {
            gameBoard[input] = player;
            console.log(gameBoard);
        }

        // if (input == exit) {
        //     gameEnded = true;
        // }
        filledCells++;

    }

    return { checkState, endGame, takeInput, gameEnded}
})();

// start the game
while (gameEnded != true) {
    gameController.takeInput();
    // check if the input ends the game
    gameController.checkState(gameBoard);
}



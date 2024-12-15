import { useState } from "react";

export const TicTacToe = () => {
  // State to keep track of the board (an array of 9 values: 'X', 'O', or null)
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));

  // State to track the current player ('X' or 'O')
  const [currentPlayer, setCurrentPlayer] = useState<string>("X");

  // State to track the winner ('X' or 'O'), or null if no winner
  const [winner, setWinner] = useState<string | null>(null);

  // Function to calculate if there is a winner
  const calculateWinner = (board: (string | null)[]): string | null => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winner ('X' or 'O')
      }
    }
    return null; // No winner yet
  };

  // Function to check if the game ends in a draw (no null values left on the board)
  const checkForDraw = (board: (string | null)[]): boolean => {
    return board.every((cell) => cell !== null); // Check if all cells are filled
  };

  // Function to handle a cell click event
  const handleCellClick = (index: number) => {
    if (board[index] || winner) return; // Ignore if cell is already filled or game has ended

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;

    setBoard(updatedBoard); // Update the state with the new board
    const gameWinner = calculateWinner(updatedBoard); // Check for a winner

    if (gameWinner) {
      setWinner(gameWinner);
    } else if (checkForDraw(updatedBoard)) {
      setWinner("Draw"); // If no winner and board is full, set a draw
    } else {
      // Switch to the next player
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  // Function to reset the game state
  const resetGame = () => {
    setBoard(Array(9).fill(null)); // Clear the board
    setCurrentPlayer("X"); // Reset to player 'X'
    setWinner(null); // No winner at the start
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tic Tac Toe</h1>

      {/* Display the winner or draw status */}
      {winner ? (
        <h2>{winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`}</h2>
      ) : (
        <h2>Next Player: {currentPlayer}</h2>
      )}

      {/* Grid display for the Tic Tac Toe board */}
      <div
        style={{
          display: "grid", // Use grid for the board layout
          gridTemplateColumns: "repeat(3, 60px)", // 3 columns for the grid
          gap: "5px", // Space between cells
          margin: "0 auto", // Center the grid
          justifyContent: "center", // Ensure cells are centered
          width: "200px", // Fixed width for the grid
        }}
      >
        {/* Create a button for each cell */}
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleCellClick(index)} // Handle cell click
            style={{
              width: "60px", // Set width and height for the cells
              height: "60px",
              fontSize: "24px", // Make the text bigger
              fontWeight: "bold", // Bold text for X/O
              cursor: "pointer", // Change cursor to pointer on hover
            }}
          >
            {cell} {/* Display the 'X', 'O', or null */}
          </button>
        ))}
      </div>

      {/* Reset game button */}
      <button
        onClick={resetGame} // Call resetGame when clicked
        style={{
          marginTop: "20px",
          padding: "10px",
          cursor: "pointer", // Change cursor to pointer on hover
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

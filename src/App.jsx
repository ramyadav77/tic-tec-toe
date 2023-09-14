import React, { useState } from 'react'; // Import React and useState from React library

// Create a functional component named TicTacToe
function TicTacToe() {
  // Define the initial state for the game
  const [board, setBoard] = useState(Array(9).fill(null)); // Create a 1D array to represent the game board
  const [xIsNext, setXIsNext] = useState(true); // Initialize the first player as 'X'

  // Function to calculate the winner of the game
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return the winner ('X' or 'O')
      }
    }
    return null; // Return null if there's no winner yet
  };

  // Function to handle a click on a square
  const handleClick = (i) => {
    const squares = [...board]; // Create a copy of the board array
    if (calculateWinner(squares) || squares[i]) {
      return; // If there's a winner or the square is already filled, do nothing
    }
    squares[i] = xIsNext ? 'X' : 'O'; // Fill the square with 'X' or 'O' based on the current player
    setBoard(squares); // Update the board with the new square
    setXIsNext(!xIsNext); // Toggle the current player
  };

  // Function to render a square
  const renderSquare = (i) => {
    return (
      <button className="square" onClick={() => handleClick(i)}>
        {board[i]}
      </button>
    );
  };

  // Determine the game status
  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  // Return the game board with squares and status
  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default TicTacToe; // Export the TicTacToe componen
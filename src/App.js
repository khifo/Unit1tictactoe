import { useState } from 'react';
import './App.css';
import Square from "./Square";
const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
const [player, setPlayer] = useState(true);
function App() {
  const propVariable = 'This is a prop'
  return (
    <div className="App">
        <div className="container">
        <div className="square" onClick={handleClick}>{props.squareValue === "O" ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" /> : props.squareValue}</div>
            {squares.map((val, index) => {
                return (
                    <Square
                        setSquares={setSquares}
                        index={index}
                        squareValue={val}
                        squares={squares}
                        player={player}
                        setPlayer={setPlayer}
                    />
                );
            })}
        </div>
    </div>
);
const handleClick = () => {
  setSquares(["", "", "", "", "", "", "", "", ""])
  setPlayer(true);
  <button onClick={handleClick}>Reset</button>;
const handleClick = () => {
  if (!props.squareValue) {
      if (props.player) {
          props.squares.splice(props.index, 1, "X");
          props.setSquares(props.squares);
          props.setPlayer(!props.player);
      } else {
          props.squares.splice(props.index, 1, "O");
          props.setSquares(props.squares);
          props.setPlayer(!props.player);
      }
  }
};
  console.log(props.squares, props.player)

}}

function calculateWinner(arr) {
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
      if (
          arr[a] &&
          arr[a] === arr[b] &&
          arr[a] === arr[c]
      ) {
          return `${arr[a]} won!`;
      }
  }
  return "Who will win?";
}
<span>{calculateWinner(squares)}</span>

export default App;

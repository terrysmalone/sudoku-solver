import React, { useState } from "react";
import "./Styles/App.css";
import { Grid } from "./components/Grid";

function App() {
  const [squares, setSquares] = useState<(number | undefined)[]>(
    Array(9).fill(undefined),
  );

  const handleSquareClick = (index: number) => {
    const newSquares = [...squares];

    if (squares[index] === undefined) {
      newSquares[index] = 1;
    } else if (squares[index] === 9) {
      newSquares[index] = undefined;
    } else {
      // @ts-ignore
      newSquares[index]++;
    }

    setSquares(newSquares);
  };

  return (
    <div>
      <Grid squares={squares} onSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;

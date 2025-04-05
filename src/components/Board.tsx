import { Grid } from "./Grid";
import "../Styles/Board.css";

type BoardProps = {
  grids: (number | undefined)[][];
};

export const Board = ({ grids }: BoardProps) => {
  const handleClick = (gridIndex: number, squareIndex: number) => {
    console.log("gridIndex: ", gridIndex);
    console.log("squareIndex: ", squareIndex);
    // const newSquares = [...squares];
    // if (squares[index] === undefined) {
    //   newSquares[index] = 1;
    // } else if (squares[index] === 9) {
    //   newSquares[index] = undefined;
    // } else {
    // @ts-ignore
    //   newSquares[index]++;
    //  }
    //  setSquares(newSquares);
  };

  return (
    <div className="board">
      {grids.map((value, gridIndex) => (
        <div data-testid="board-item" key={gridIndex}>
          <Grid
            squares={value}
            onSquareClick={(squareIndex) => handleClick(gridIndex, squareIndex)}
          />
        </div>
      ))}
    </div>
  );
};

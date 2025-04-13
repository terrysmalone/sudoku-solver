import { Grid } from "./Grid";
import "../Styles/Board.css";

type BoardProps = {
  grids: (number | undefined)[][];
  onSquareClick: (gridIndex: number, squareIndex: number) => void;
};

export function Board({ grids, onSquareClick }: BoardProps) {
  return (
    <div className="board">
      {grids.map((value, gridIndex) => (
        <div data-testid="board-item" key={gridIndex}>
          <Grid
            squares={value}
            onSquareClick={(squareIndex) =>
              onSquareClick(gridIndex, squareIndex)
            }
          />
        </div>
      ))}
    </div>
  );
}

import { Grid } from "./Grid";
import "../Styles/Board.css";
import { SudokuSquare } from "../types/SudokuSquare";

type BoardProps = {
  grids: SudokuSquare[][];
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

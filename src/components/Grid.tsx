import { Square } from "./Square";
import "../styles/Grid.css";
import { SudokuSquare } from "../types/SudokuSquare";

type GridProps = {
  squares: SudokuSquare[];
  onSquareClick: (squareIndex: number) => void;
};

export function Grid({ squares, onSquareClick }: GridProps) {
  return (
    <div className="grid">
      {squares.map((square, squareIndex) => (
        <div data-testid="grid-item" key={squareIndex}>
          <Square
            value={getStringValue(square.value)}
            onSquareClick={() => onSquareClick(squareIndex)}
            disabled={square.isFixed}
          />
        </div>
      ))}
    </div>
  );
}

function getStringValue(value: number | undefined): string {
  if (value === undefined) {
    return "";
  } else {
    return value.toString();
  }
}

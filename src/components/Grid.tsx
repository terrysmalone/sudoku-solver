import { Square } from "./Square";
import "../Styles/Grid.css";

type GridProps = {
  squares: (number | undefined)[];
  onSquareClick: (squareIndex: number) => void;
};

export function Grid({ squares, onSquareClick }: GridProps) {
  return (
    <div className="grid">
      {squares.map((value, squareIndex) => (
        <div data-testid="grid-item" key={squareIndex}>
          <Square
            value={getStringValue(value)}
            onSquareClick={() => onSquareClick(squareIndex)}
            disabled={!isNaN(Number(value))}
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

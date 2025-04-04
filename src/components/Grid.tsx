import { Square } from "./Square";
import "./Grid.css";

type GridProps = {
  squares: (number | undefined)[];
  onSquareClick: (index: number) => void;
};

export const Grid = ({ squares, onSquareClick }: GridProps) => {
  return (
    <div className="grid">
      {squares.map((value, index) => (
        <div data-testid="grid-item" key={index}>
          <Square
            value={getStringValue(value)}
            onSquareClick={() => onSquareClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

function getStringValue(value: number | undefined): string {
  if (value === undefined) {
    return "";
  } else {
    return value.toString();
  }
}

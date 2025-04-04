import { Square } from "./Square";
import "./Grid.css";

type GridProps = {
  squares: (number | undefined)[];
};

export const Grid = ({ squares }: GridProps) => {
  return (
    <div className="grid">
      {squares.map((value, index) => (
        <div data-testid="grid-item" key={index}>
          <Square value={getStringValue(value)} onSquareClick={() => {}} />
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

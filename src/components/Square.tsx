import { MouseEventHandler } from "react";
import "../Styles/Square.css";

type SquareProps = {
  value: string;
  onSquareClick: MouseEventHandler;
};

export const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button data-testid="square" className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

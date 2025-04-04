import { MouseEventHandler } from "react";
import "./Square.css";

type SquareProps = {
  value: string;
  onSquareClick: MouseEventHandler;
};

export const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

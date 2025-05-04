import { MouseEventHandler } from "react";
import "../Styles/Square.css";

type SquareProps = {
  value: string;
  onSquareClick: MouseEventHandler;
  disabled?: boolean;
};

export function Square({
  value,
  onSquareClick,
  disabled = false,
}: SquareProps) {
  return (
    <button
      data-testid="square"
      className="square"
      onClick={onSquareClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

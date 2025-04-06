import { MouseEventHandler, useRef } from "react";
import "../Styles/Square.css";

type SquareProps = {
  value: string;
  onSquareClick: MouseEventHandler;
  disabled?: boolean;
};

export const Square = ({
  value,
  onSquareClick,
  disabled = false,
}: SquareProps) => {
  const initialDisabled = useRef(disabled);

  return (
    <button
      data-testid="square"
      className="square"
      onClick={onSquareClick}
      disabled={initialDisabled.current}
    >
      {value}
    </button>
  );
};

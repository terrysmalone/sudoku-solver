import {MouseEventHandler} from "react";

type SquareProps = {
    value: string;
    onSquareClick: MouseEventHandler
};

export const Square = ({value, onSquareClick}: SquareProps) => {
    return(
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
};
import "@testing-library/react";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Board } from "./Board";
import { SudokuSquare } from "../types/SudokuSquare";
import { getEmptyGrid, getFilledGrid } from "../test-utils/SudukoSquareBuilder";

test("Empty squares should render", () => {
  const grids: SudokuSquare[][] = getEmptyGrid();

  render(<Board grids={grids} onSquareClick={() => {}}></Board>);

  const items = screen.getAllByTestId("grid-item");

  expect(items).toHaveLength(81);

  for (const item of items) {
    const test = item.textContent;
    expect(!isNaN(Number(test))).toBe(true);
  }
});

test("Correct squares render", () => {
  const grids: SudokuSquare[][] = getFilledGrid(
    Array.from({ length: 9 }, (_, i) => Array.from({ length: 9 }, () => i + 1)),
  );

  render(<Board grids={grids} onSquareClick={() => {}}></Board>);

  const items = screen.getAllByTestId("grid-item");

  expect(items).toHaveLength(81);

  let current: number = 1;
  let counter: number = 0;

  for (const item of items) {
    const test = item.textContent;

    if (counter === 9) {
      counter = 0;
      current++;
    }
    expect(Number(test)).toEqual(current);
    counter++;
  }
});

test.each([
  [0, 0, 0],
  [5, 0, 5],
  [32, 3, 5],
  [80, 8, 8],
])(
  "Correct square is registered for click at %s",
  (clickSquare, expectedGrid, expectedSquare) => {
    const grids: SudokuSquare[][] = getEmptyGrid();
    const handleClick = jest.fn();

    render(<Board grids={grids} onSquareClick={handleClick}></Board>);

    const squareElements = screen.getAllByTestId("square");
    fireEvent.click(squareElements[clickSquare]);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(expectedGrid, expectedSquare);
  },
);

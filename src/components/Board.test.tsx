import "@testing-library/react";
import { fireEvent, render, screen } from "@testing-library/react";
import React, { useState } from "react";
import { Board } from "./Board";

test("Empty squares should render", () => {
  const grids: (number | undefined)[][] = new Array(9).fill(
    new Array(9).fill(undefined),
  );
  render(<Board grids={grids} onSquareClick={() => {}}></Board>);

  const items = screen.getAllByTestId("grid-item");

  expect(items).toHaveLength(81);

  for (const item of items) {
    const test = item.textContent;
    expect(!isNaN(Number(test))).toBe(true);
  }
});

test("Correct squares render", () => {
  const grids: (number | undefined)[][] = [
    Array(9).fill(1),
    Array(9).fill(2),
    Array(9).fill(3),
    Array(9).fill(4),
    Array(9).fill(5),
    Array(9).fill(6),
    Array(9).fill(7),
    Array(9).fill(8),
    Array(9).fill(9),
  ];

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
    const grids: (number | undefined)[][] = new Array(9).fill(
      new Array(9).fill(undefined),
    );
    const handleClick = jest.fn();

    render(<Board grids={grids} onSquareClick={handleClick}></Board>);

    const squareElements = screen.getAllByTestId("square");
    fireEvent.click(squareElements[clickSquare]);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(expectedGrid, expectedSquare);
  },
);

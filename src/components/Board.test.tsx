import "@testing-library/react";
import { render, screen } from "@testing-library/react";
import React from "react";
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

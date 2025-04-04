import { render, screen } from "@testing-library/react";
import { Grid } from "./Grid";

test("Empty squares should render", () => {
  const squares: (number | undefined)[] = new Array(9).fill(undefined);
  render(<Grid squares={squares} onSquareClick={() => {}}></Grid>);

  const items = screen.getAllByTestId("grid-item");

  expect(items).toHaveLength(9);

  for (const item of items) {
    const test = item.textContent;
    expect(!isNaN(Number(test))).toBe(true);
  }
});

test("numbered squares should render", () => {
  const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  render(<Grid squares={squares} onSquareClick={() => {}}></Grid>);

  const items = screen.getAllByTestId("grid-item");

  expect(items).toHaveLength(9);

  let counter = 0;
  for (const item of items) {
    const test = item.textContent;
    expect(Number(test)).toEqual(squares[counter]);
    counter++;
  }
});

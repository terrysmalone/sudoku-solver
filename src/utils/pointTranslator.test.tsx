import "@testing-library/react";
import { gridToColumn, gridToRow } from "./pointTranslator";

test.each([
  [0, 0, 0],
  [3, 8, 5],
  [4, 7, 5],
  [8, 8, 8],
])(
  "Can get row from grid: %s and square %s",
  (gridIndex: number, squareIndex: number, expectedRow: number) => {
    expect(gridToRow(gridIndex, squareIndex)).toBe(expectedRow);
  },
);

test.each([
  [0, 0, 0],
  [3, 8, 2],
  [4, 7, 4],
  [8, 8, 8],
])(
  "Can get row from grid: %s and square %s",
  (gridIndex: number, squareIndex: number, expectedColumn: number) => {
    expect(gridToColumn(gridIndex, squareIndex)).toBe(expectedColumn);
  },
);

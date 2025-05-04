import "@testing-library/react";
import { exportedForTesting } from "./completed";
import { SudokuSquare } from "../types/SudokuSquare";
import { getSudokuSquareGrid } from "../test-utils/sudukoSquareBuilder";

const { isArrayComplete } = exportedForTesting;

test.each([0, 3, 8, 10])(
  "Wrong size array should throw error for %s",
  (arraySize: number) => {
    const array: SudokuSquare[] = new Array(arraySize);

    const t = () => {
      isArrayComplete(array);
    };

    expect(t).toThrow(RangeError);
    expect(t).toThrow(`Array should have 9 elements. It has ${arraySize}`);
  },
);

test.each([
  [99, [1, 2, 3, 4, 5, 6, 7, 8, 99]],
  [0, [1, 2, 3, 0, 5, 6, 7, 8, 9]],
  [-1, [1, 2, 3, 4, 5, 6, -1, 8, 9]],
  [1000, [1000, 2, 3, 0, 5, 6, 7, 8, 9]],
])(
  "Arrays with invalid numbers should throw error for %s",
  (invalidNumber: number, array: (number | undefined)[]) => {
    const t = () => {
      isArrayComplete(getSudokuSquareGrid(array));
    };

    expect(t).toThrow(RangeError);
    expect(t).toThrow(
      `Array should only contain numbers 1-9. It contains ${invalidNumber}`,
    );
  },
);

test("Array with undefined should return false", () => {
  const array: (number | undefined)[] = [1, 2, 3, 4, 5, 6, undefined, 8, 9];
  const result: boolean = isArrayComplete(getSudokuSquareGrid(array));
  expect(result).toBe(false);
});

test.each([
  [[1, 2, 3, 4, 5, 1, 7, 8, 9]],
  [[1, 2, 3, 4, 5, 6, 6, 8, 9]],
  [[8, 8, 8, 8, 8, 8, 8, 8, 8]],
])(
  "Arrays with duplicates should return false",
  (array: (number | undefined)[]) => {
    const result: boolean = isArrayComplete(getSudokuSquareGrid(array));
    expect(result).toBe(false);
  },
);

test.each([
  [[1, 2, 3, 4, 5, 6, 7, 8, 9]],
  [[9, 8, 7, 6, 5, 4, 3, 2, 1]],
  [[2, 6, 5, 3, 9, 8, 4, 7, 1]],
])(
  "Array with correct numbers should return true for %s",
  (array: (number | undefined)[]) => {
    const result: boolean = isArrayComplete(getSudokuSquareGrid(array));
    expect(result).toBe(true);
  },
);

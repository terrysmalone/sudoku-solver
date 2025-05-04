import puzzles from "./../data/puzzles.json";
import { SudokuSquare } from "../types/SudokuSquare";

export function getPuzzleCount(): number {
  return puzzles.length;
}

export function getPuzzle(index: number): SudokuSquare[][] {
  const grid: SudokuSquare[][] = puzzles[index].puzzle.map<SudokuSquare[]>(
    (row) =>
      row.map<SudokuSquare>((cell) => ({
        value: cell === 0 ? undefined : cell,
        isFixed: cell !== 0,
      })),
  );

  return grid;
}

import puzzles from "./../data/puzzles.json";

export function getPuzzleCount(): number {
  return puzzles.length;
}

export function getPuzzle(index: number): (number | undefined)[][] {
  const grid = puzzles[index].puzzle.map((row) =>
    row.map((cell) => (cell === 0 ? undefined : cell)),
  );

  return grid;
}

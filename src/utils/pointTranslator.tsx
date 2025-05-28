export function gridToRow(gridIndex: number, squareIndex: number): number {
  return Math.floor(gridIndex / 3) * 3 + Math.floor(squareIndex / 3);
}

export function gridToColumn(gridIndex: number, squareIndex: number): number {
  return Math.floor(gridIndex % 3) * 3 + Math.floor(squareIndex % 3);
}

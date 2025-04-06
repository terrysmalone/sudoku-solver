export const populateTestGrid = (
  startNumber: number,
): (number | undefined)[] => {
  let squares: (number | undefined)[] = [];

  for (let i = 0; i < 9; i++) {
    if (startNumber > 9) {
      startNumber = 1;
    }
    squares.push(startNumber);

    startNumber++;
  }

  return squares;
};

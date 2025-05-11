import { render, screen } from "@testing-library/react";
import { Game } from "./Game";

test("Clear button renders", () => {
  render(<Game />);

  const clearButton = screen.getByRole("button", { name: "Clear" });
  expect(clearButton).toBeInTheDocument();
});

// TODO: I need to split out puzzle logic so that Game creates a Puzzle that takes a SudokuSquare[][].
//       That way I can test more of the logic on clearing/solving etc

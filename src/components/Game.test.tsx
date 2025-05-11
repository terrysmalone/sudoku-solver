import { render, screen } from "@testing-library/react";
import { Game } from "./Game";

test("Clear button renders", () => {
  render(<Game />);

  const clearButton = screen.getByRole("button", { name: "Clear" });
  expect(clearButton).toBeInTheDocument();
});

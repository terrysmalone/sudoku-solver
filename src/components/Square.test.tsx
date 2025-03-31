import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Square } from "./Square";

test("Square should render correctly", () => {
  render(<Square value={"1"} onSquareClick={() => {}} />);

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("1");
});

test("Should call onSquareClick when clicked", () => {
  const handleClick = jest.fn();
  render(<Square value={""} onSquareClick={handleClick}></Square>);

  const button = screen.getByRole("button");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

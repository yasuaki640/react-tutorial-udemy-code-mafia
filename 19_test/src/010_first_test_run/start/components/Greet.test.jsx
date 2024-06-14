import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

it("should have h1 tag", () => {
  render(<Greet />);
  const h1El = screen.getByText("こんにちは");
  expect(h1El).toBeInTheDocument();
});

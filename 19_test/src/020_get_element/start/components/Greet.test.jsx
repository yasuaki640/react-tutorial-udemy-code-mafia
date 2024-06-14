import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

it("should have h1 tag", () => {
  const { debug } = render(<Greet />);

  const radioEl = screen.getByRole("radio");
  debug(radioEl);
  expect(radioEl).toBeInTheDocument();
});

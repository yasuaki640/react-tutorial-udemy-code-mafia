import { render, screen } from "@testing-library/react";
import { it } from "vitest";
import Greet from "./Greet";

it("should have h1 tag", () => {
  const { debug, container } = render(<Greet />);

  // const radioEl = screen.getByRole("radio");
  // debug(radioEl);
  // expect(radioEl).toBeInTheDocument();

  // const imgEl = screen.getByRole("img");
  // screen.debug(imgEl);
  // const imgEl = screen.getByAltText("React Logo");
  // debug(imgEl);

  // getByRole heading は h1 ~ h6を包括して取れる
  const h2El = container.querySelector("h2");
});

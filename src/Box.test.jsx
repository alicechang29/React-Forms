import { test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box.jsx";

test("renders without crashing", function () {
  render(<Box />);
});

test("has attributes", function () {
  const { container, debug } = render(
    <Box
      backgroundColor="red"
      width={50}
      height={100} />);
  debug(container);

  //TODO: what does toHaveStyle do?
  //expect(container).toHaveStyle("background-color: rgba(0, 0, 0, 0)");
  expect(container.querySelector("div")
    .getAttribute("style"))
    .toBe("background-color: red; width: 50px; height: 100px");

});
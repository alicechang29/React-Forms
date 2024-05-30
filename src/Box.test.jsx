import { test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box.jsx";

test("renders without crashing", function () {
  render(<Box />);
});

test("has attributes", function () {
  const { container } = render(
    <Box
      backgroundColor="red"
      width="50px"
      height="100px" />);

  expect(container.attributes).toContain([backgroundColor, width, height]);

});
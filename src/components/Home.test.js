import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

describe("Home page", () => {
  it("Renders correct heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading").textContent).toMatch("Home");
  });
});
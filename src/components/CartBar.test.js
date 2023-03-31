import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartBar from "./CartBar";

describe("Cartbar", () => {
  it("Renders correct amount", () => {
    render(<CartBar amount={0} />);
    expect(screen.getByText("Items in cart: 0").textContent).toMatch("Items in cart: 0")
  });
  it("Renders the checkout button", () => {
    render(<CartBar amount={0} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  })
});
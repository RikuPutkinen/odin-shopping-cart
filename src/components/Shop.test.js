import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Shop from "./Shop";
import shopItems from "../shopItems";

describe("Shop", () => {
  it("Render the correct heading", () => {
    render(<Shop shopItems={shopItems} />);
    expect(screen.getByRole("heading").textContent).toMatch("Shop");
  });
  it("Renders the correct amount of children", () => {
    render(<Shop shopItems={shopItems} />);
    expect(screen.getAllByRole("listitem").length).toEqual(5);
  });
  it("Renders correct amount in the cartbar after adding items to cart", async () => {
    const shopItem = [{
      id: '0',
      title: 'Keyboard'
    }];
    const user = userEvent.setup();
    render(<Shop shopItems={shopItem} />);

    await userEvent.clear(screen.getByRole("spinbutton"));
    await userEvent.type(screen.getByRole("spinbutton"), "2");
    await userEvent.click(screen.getByText("Add to Cart"));

    expect(screen.getByText("Items in cart: 2").textContent).toMatch("Items in cart: 2");

  });
});
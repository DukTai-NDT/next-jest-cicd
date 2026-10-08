/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", async () => {
  const component = await Page({
    params: Promise.resolve({ slug: "Test" }),
  });

  render(component);

  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("HoleTex should be in the document", async () => {
  const component = await Page({
    params: Promise.resolve({ slug: "Test" }),
  });

  render(component);

  expect(screen.getByText("HoldeTex")).toBeInTheDocument();
});
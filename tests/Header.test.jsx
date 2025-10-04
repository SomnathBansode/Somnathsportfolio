/* eslint-env vitest */
/* global describe, it, expect */
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";

describe("Header", () => {
  it("renders nav links", () => {
    render(<Header userName="Test User" />);
    expect(screen.getAllByText(/Home/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/About/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Projects/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThanOrEqual(1);
  });
});

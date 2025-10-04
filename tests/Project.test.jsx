/* eslint-env vitest */
/* global describe, it, expect */
import React from "react";
import { render, screen } from "@testing-library/react";
import Project from "../src/components/Project";

describe("Project list", () => {
  it("renders project headings", () => {
    render(<Project />);
    expect(screen.getAllByText(/My Projects/i).length).toBeGreaterThanOrEqual(
      1
    );
  });
});

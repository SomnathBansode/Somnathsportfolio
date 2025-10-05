// Setup file for Vitest + Testing Library
import "@testing-library/jest-dom";
import React from "react";

// JSDOM doesn't implement IntersectionObserver; provide a lightweight mock
class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Use window for jsdom environment
window.IntersectionObserver =
  window.IntersectionObserver || MockIntersectionObserver;

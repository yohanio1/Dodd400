import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("should render footer text correctly", () => {
    render(<Footer />);
    expect(screen.getByText("Inicio")).toBeInTheDocument();
  });
});

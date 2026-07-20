import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { expect } from "vitest";
import ContactSection from "./ContactSection";

describe("ContactSection", () => {
  it("should render ContactSection correctly", () => {
    render(<ContactSection />);
    expect(screen.getByText("ContactSection")).toBeInTheDocument();
  });
});
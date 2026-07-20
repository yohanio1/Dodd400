import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import AdvantagesSection from "./AdvantagesSection";
import { expect } from "vitest";

describe("AdvantagesSection", () => {
  it("should render AdvantagesSection correctly", () => {
    render(<AdvantagesSection />);
    expect(screen.getByText("AdvantagesSection")).toBeInTheDocument();
  });
});
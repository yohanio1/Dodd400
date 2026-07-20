import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import LoginForm from "./LoginForm";
import { expect } from "vitest";

describe("LoginForm", () => {
  it("should render LoginForm correctly", () => {
    render(<LoginForm />);
    expect(screen.getByText("LoginForm")).toBeInTheDocument();
  });
});

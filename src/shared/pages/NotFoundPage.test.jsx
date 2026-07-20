import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { NotFoundPage } from "./NotFoundPage"

describe("NotFoundPage", () => {
    it("should render NotFoundPage with not found message", () => {
        render(<NotFoundPage />)
        expect(screen.getByText("La página que buscas no existe.")).toBeInTheDocument()
    })
})
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  it("show label 'MyButton' when pass it as children", () => {
    const expectedText = "MyButton";
    render(<Button>{expectedText}</Button>);
    const buttonElement = screen.getByText(expectedText);
    expect(buttonElement).toBeInTheDocument();
  });

  it("called a callback function when pass it into prop", () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>MyButton</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockOnClick).toBeCalled();
  });
});

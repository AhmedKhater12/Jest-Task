import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

test("Increments on button click", () => {
  render(<Counter />);
  expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Increment/i));
  expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
});


// test("Increments on button click", () => {
//     render(<Counter />);
//     const counterText = screen.getByText(/Counter: 0/i);
//     expect(counterText).toBeInTheDocument();
//     fireEvent.click(screen.getByText(/Increment/i));
//     expect(counterText).toHaveTextContent("Counter: 1");
//   });

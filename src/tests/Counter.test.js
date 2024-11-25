// import necessary react testing library helpers here
import { render, screen, fireEvent, getByTestID } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);

  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);

  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent('-1');
});

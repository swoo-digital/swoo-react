import { render, screen } from '@testing-library/react';
import App from './App';

test('Render Counter App', () => {
  render(<App />);
  const counterApp = screen.getByTestId('counterApp')
  expect(counterApp).toBeInTheDocument();
});

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store'

test('renders decrement button', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText('-1');
  expect(linkElement).toBeInTheDocument();
});

test('renders increment button', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText('+1');
  expect(linkElement).toBeInTheDocument();
});

test('renders counter text', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText('0');
  expect(linkElement).toBeInTheDocument();
});

describe('App component', () => {
  test('increments count by 1 when the increment button is clicked', async () => {
    render(<Provider store={store}><App /></Provider>);
    const countComponent = screen.getByText('0');
    fireEvent.click(screen.getByText('+1'));
    await waitFor(() => countComponent)
    expect(countComponent).toHaveTextContent('1')
  });

  test('decrements count by 1 when the decrement button is clicked', async () => {
    render(<Provider store={store}><App /></Provider>);
    const countComponent = screen.getByText('1');
    fireEvent.click(screen.getByText('-1'));
    await waitFor(() => countComponent)
    expect(countComponent).toHaveTextContent('0')
  });
});

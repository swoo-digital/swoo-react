import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders increment and decrement buttons', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText("+1")).toBeInTheDocument();
  expect(getByText("-1")).toBeInTheDocument();
});

test('click on increment/decrement should increment/decrement counter by 1', async () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const increment = getByText("+1");
  const decrement = getByText("-1");

  await userEvent.click(increment);
  await userEvent.click(increment);
  await userEvent.click(increment);

  expect(getByText("3")).toBeInTheDocument();
  
  await userEvent.click(decrement);

  expect(getByText("2")).toBeInTheDocument();

});

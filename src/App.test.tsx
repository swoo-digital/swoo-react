import React from 'react'
import { render } from './utils/test'
import { fireEvent, screen } from '@testing-library/react'
import App from './App'

test('renders increase button', () => {
  render(<App />)
  const increaseButton = screen.getByTestId('increaseButton')
  expect(increaseButton).toBeInTheDocument()
})

test('renders decrease button', () => {
  render(<App />)
  const decreaseButton = screen.getByTestId('decreaseButton')
  expect(decreaseButton).toBeInTheDocument()
})

test('renders initial counter number', () => {
  render(<App />)
  const counterContainer = screen.getByTestId('counterContainer')
  expect(counterContainer).toBeInTheDocument()
})

test('click increase button', () => {
  render(<App />)
  const increaseButton = screen.getByTestId('increaseButton')
  fireEvent(
    increaseButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  )

  const counterContainer = screen.getByTestId('counterContainer')
  expect(counterContainer).toHaveTextContent('1')
})

test('click decrease button', () => {
  render(<App />)
  const decreaseButton = screen.getByTestId('decreaseButton')
  fireEvent(
    decreaseButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  )
  const counterContainer = screen.getByTestId('counterContainer')
  expect(counterContainer).toHaveTextContent('0')
})

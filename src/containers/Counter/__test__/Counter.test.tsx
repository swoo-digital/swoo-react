import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../App';

describe("Test Counter Component", () => {

  test("Render with Counter Up button", async () => {
    const { findByTestId } = render(<App />)
    const counterUpButton = await findByTestId("counterUp")
    expect(counterUpButton).toHaveTextContent("1")
  })

  test("Render with Counter Down button", async () => {
    const { findByTestId } = render(<App />)
    const counterDownButton = await findByTestId("counterDown")
    expect(counterDownButton).toHaveTextContent("-1")
  })

  test("Render with zero view Count", async () => {
    const { findByTestId } = render(<App />)
    const counterView = await findByTestId("counter")
    expect(counterView).toHaveTextContent('0')
  })

  test("Click on Counter Up Button", async () => {
    const { findByTestId } = render(<App />)
    const counterUpButton = await findByTestId("counterUp")
    userEvent.click(counterUpButton)
    const counterView = await findByTestId("counter")
    expect(counterView).toHaveTextContent('1')
  })

  test("Click on Counter Down Button", async () => {
    const { findByTestId } = render(<App />)
    const counterDownButton = await findByTestId("counterDown")
    userEvent.click(counterDownButton)
    const counterView = await findByTestId("counter")
    expect(counterView).toHaveTextContent('0')
  })

})

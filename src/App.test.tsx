import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { createStore } from "./store";

describe("App", () => {
  it("default count state", () => {
    render(
      <Provider store={createStore()}>
        <App />
      </Provider>
    );
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("0");
  });

  it("can increment", () => {
    render(
      <Provider store={createStore()}>
        <App />
      </Provider>
    );
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("0");

    const btn = screen.getByText("+1");
    fireEvent.click(btn);

    expect(count).toHaveTextContent("1");
  });

  it("can decrement", () => {
    render(
      <Provider store={createStore()}>
        <App />
      </Provider>
    );
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("0");
    const btn = screen.getByText("-1");
    fireEvent.click(btn);
    expect(count).toHaveTextContent("-1");
  });
});

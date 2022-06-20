import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../store'
import App from '../App'

const AllTheProviders: FC<{ children: React.ReactNode }> = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

import './App.css';
import Counter from './containers/Counter';
import { Provider } from 'react-redux'
import { store } from './store';
import { ThemeProvider } from 'styled-components';
import theme from './themes';
import { useState } from 'react';
import ThemeControllers from './components/ThemeControllers';
import { sizeTypes, variantTypes } from './utils/types';
import Select from './components/Select';

const sizes = [
  {
    title: "Small",
    value: "small"
  },
  {
    title: "Medium",
    value: "medium"
  },
  {
    title: "Large",
    value: "large"
  }
]

const variants = [
  {
    title: "Primary",
    value: "primary"
  },
  {
    title: "Secondary",
    value: "secondary"
  }
]

function App() {
  const [size, setSize] = useState<sizeTypes>("medium")
  const [variant, setVariant] = useState<variantTypes>("primary")

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ThemeControllers variant={variant}  >
          <Select
            onChange={e => setSize(e.target.value as sizeTypes)}
            value={size}
            options={sizes}
          />
          <Select
            onChange={e => setVariant(e.target.value as variantTypes)}
            value={variant}
            options={variants}
          />
        </ThemeControllers>
        <Counter size={size} variant={variant} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

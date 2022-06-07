import './App.css';
import Counter from './containers/Counter';
import { Provider } from 'react-redux'
import { store } from './store';
import { ThemeProvider } from 'styled-components'
import theme from './themes/Main'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Counter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

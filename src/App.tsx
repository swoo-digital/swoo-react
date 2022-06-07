import React from 'react';
import './App.css';
import Counter from './components/Box';
import { Provider } from 'react-redux';
import store from './redux/state'

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Counter />
      </div>
    </Provider>
  );
}

export default App;

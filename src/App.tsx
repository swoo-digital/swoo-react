import React from 'react';
import AppContainer from './components/AppContainer';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <AppContainer>
      <Counter />
    </AppContainer>
  );
}

export default App;

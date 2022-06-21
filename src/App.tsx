import React from 'react';
import AppContainer from './components/AppContainer';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <AppContainer bg="blue">
      <Counter />
    </AppContainer>
  );
}

export default App;

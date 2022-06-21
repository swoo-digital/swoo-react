import BoxContainer from './components/BoxContainer';
import styled from "styled-components";


function App() {
  return (
    <AppContainer>
      <BoxContainer /> 
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export default App;

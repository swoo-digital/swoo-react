import styled from "styled-components/macro";
import { color, ColorProps  } from 'styled-system'

const AppContainer = styled.div<ColorProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;

  ${color}
`;

export default AppContainer;

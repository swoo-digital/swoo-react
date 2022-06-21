import styled from "styled-components/macro";
import { color, ColorProps  } from 'styled-system'

const Count = styled.div<ColorProps>`
  text-align: center;
  font-size: 64px;
  font-weight: 700;

  ${color}
`;

export default Count;

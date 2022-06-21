import styled from "styled-components/macro";
import { color, ColorProps  } from 'styled-system'

const CounterBtn = styled.div<ColorProps>`
  padding: 16px;
  border-radius: 24px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;

  ${color}
`;

export default CounterBtn;

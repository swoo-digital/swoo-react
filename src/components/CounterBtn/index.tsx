import styled from "styled-components/macro";
import { color } from 'styled-system'

const CounterBtn = styled.div`
  padding: 16px;
  border-radius: 24px;
  text-align: center;
  background-color: white;
  font-size: 24px;
  font-weight: 700;
  color: black;
  cursor: pointer;
  user-select: none;

  ${color}
`;

export default CounterBtn;

import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../features/store';


const DisplayCounter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  return (
    <DisplayCounterText>{count}</DisplayCounterText>
  )
}

const DisplayCounterText = styled.h1`
  color: #89D5BB;
  font-size: 6rem;
`;

export default DisplayCounter;
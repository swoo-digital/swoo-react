import styled from "styled-components";
import { decrement, increment } from "./store/counterSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const decreaseCount = () => {
    dispatch(decrement());
  };

  const increaseCount = () => {
    dispatch(increment());
  };
  return (
    <MainContainer>
      <CountButton onClick={decreaseCount}>-1</CountButton>
      <CounterDisplay data-testid="count">{count}</CounterDisplay>
      <CountButton onClick={increaseCount}>+1</CountButton>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #004761;
`;

const CounterDisplay = styled.div`
  color: #8cd6bd;
  font-weight: bold;
  font-size: 64px;
  line-height: 1.2;
  color: #8cd6bd;
  margin-bottom: 104px;
`;

const CountButton = styled.button`
  padding: 16px 69px;
  margin-bottom: 104px;
  width: auto;
  height: auto;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
  outline: none;
  border: none;
`;

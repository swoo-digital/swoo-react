import Box from "../../components/Box";
import Button from "../../components/Button";
import { decrement, increment, selectCount } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { CountView } from "./Counter.style";

export default function Counter() {

  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  const counterUp = () => {
    dispatch(increment())
  }

  const counterDown = () => {
    dispatch(decrement())
  }

  return (
    <Box data-testid="counterApp" >
      <Button testId="counterDown" onClick={counterDown} title="-1" />
      <CountView data-testid="counter">{count}</CountView>
      <Button testId="counterUp" onClick={counterUp} title="1" />
    </Box>
  )
  
}

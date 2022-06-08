import Box from "../../components/Box";
import Button from "../../components/Button";
import { decrement, increment, selectCount } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { CountView } from "./Counter.style";
import { FC } from "react"; 
import { sizeTypes, variantTypes } from "../../utils/types";

interface CounterProps {
  variant?: variantTypes,
  size?: sizeTypes
}

const Counter: FC<CounterProps> = ({ variant = "primary", size = "medium" }) => {

  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  const counterUp = () => {
    dispatch(increment())
  }

  const counterDown = () => {
    dispatch(decrement())
  }

  return (
    <Box variant={variant} data-testid="counterApp" >
      <Button
        size={size}
        variant={variant}
        testId="counterDown"
        onClick={counterDown}
        title="-1"
      />
      <CountView
        size={size}
        variant={variant}
        data-testid="counter"
      >
        {count}
      </CountView>
      <Button
        size={size}
        variant={variant}
        testId="counterUp"
        onClick={counterUp}
        title="1"
      />
    </Box>
  )

}
export default Counter

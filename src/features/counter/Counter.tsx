import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';
import CounterContainer from '../../components/CounterContainer';
import Count from '../../components/Count';
import CounterBtn from '../../components/CounterBtn';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();


  return (
    <CounterContainer>
        <CounterBtn 
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -1
        </CounterBtn>
        <Count >{count}</Count>
        <CounterBtn
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +1
        </CounterBtn>
    </CounterContainer>
  );
}

import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();


  return (
    <div>
      <div  >
        <button 
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <span >{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
      </div>

    </div>
  );
}

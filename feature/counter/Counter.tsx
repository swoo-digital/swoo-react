import React from 'react';


export function Counter() {

  return (
    <div>
      <div >
        <button
          aria-label="Decrement value"
        >
          -1
        </button>
        <span >5</span>
        <button
          aria-label="Increment value"
        >
          +1
        </button>
      </div>
    </div>
  );
}

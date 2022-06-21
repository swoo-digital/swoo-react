import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Exporting the type of counter
export interface CounterState {
  value: number
}

// InitialState of counter
const initialState: CounterState = {
  value: 0,
}

// Logic of an app
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: { value: number }) => {
      state.value += 1;
    },
    decrement: (state: { value: number }) => {
      state.value -= 1;
    },
    incrementByAmount: (state: { value: number }, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;
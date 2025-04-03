import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',//used in debugging and react dev tools
  initialState,
  reducers: {//fix name
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount5:(state,action) => { 
        state.value += Number(action.payload);
    }
  },
})

export const { increment, decrement, incrementByAmount5 } = counterSlice.actions//fix name

export default counterSlice.reducer
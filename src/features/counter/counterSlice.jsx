import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByTwo:(state)=>{
        state.value += 2
    },
    decrementByTwo :(state)=>{
        state.value-= 2
    }
  }
});
export const { increment, decrement ,incrementByTwo ,decrementByTwo } = counterSlice.actions;
export default counterSlice.reducer;

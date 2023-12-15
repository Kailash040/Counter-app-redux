import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByTwo,
  decrementByTwo,
} from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  // console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByTwo())}>
          Increment By Two
        </button>
        <button onClick={() => dispatch(decrementByTwo())}>
          Decrement By Two
        </button>
      </div>
    </div>
  );
}

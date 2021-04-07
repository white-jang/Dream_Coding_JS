import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      {/* 함수를 호출하는 게 아니라 (onIncrease()) 함수 이름을 써줘야 함 */}
      {/* 함수를 호출하듯이 하면 렌더링될 때 호출되버림... */}
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;

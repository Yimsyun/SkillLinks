import { useState } from "react";
export default function Counter() {
  const [counter, setCounter] = useState(0);

  return <div>{counter}</div>;
}

// class 컴포넌트에서는 render 함수가 있었다.
// 함수형 컴포넌트는 class형 컴포넌트의 render 함수랑 매우 비슷하다

// rerendering이 되는 경우
// 1. props가 변경되거나
// 2. state가 변경되거나

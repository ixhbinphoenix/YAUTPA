import { useState } from "react";
import Counter from "../Counter";
import "./index.scss";

export default function Countdown() {
  let [num, setNum] = useState(10);

  return (
    <div className="countdown">
      <Counter number={num}></Counter>
      <button onClick={() => setNum(num - 1)}>-</button>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
}

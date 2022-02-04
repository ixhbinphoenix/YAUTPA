import { useEffect, useState } from "react";
import "./index.scss";

export default function Clock() {
  const [time, setTime] = useState("");

  const getTime = (): string => {
    const expandTime = (num: number): string => {
      return num < 10 ? "0" + num.toString() : num.toString();
    };
    const date = new Date();
    return `${expandTime(date.getHours())}:${expandTime(
      date.getMinutes()
    )}:${expandTime(date.getSeconds())}`;
  };

  useEffect(() => {
    setTime(getTime());
    const timer = setTimeout(() => setTime(getTime()), 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div id="clock">
      <p>{time}</p>
    </div>
  );
}

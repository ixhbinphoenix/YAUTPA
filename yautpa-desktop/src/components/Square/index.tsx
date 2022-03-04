import "./index.scss";
import { useState, useEffect } from "react";

export default function Square() {
  const [left, setLeft] = useState("48vw");
  const [top, setTop] = useState("48vh");
  const [color, setColor] = useState("#00D100");
  const [counter, addCounter] = useState(0);
  const [speed, setSpeed] = useState(0)
  const [currentSpeed, setCurrentSpeed] = useState(0)
  const [timer, setTimer] = useState(0)
  
  setTimeout(() => {
    setCurrentSpeed(Math.round((speed/timer) * 100)/100)
    setTimer(timer + 1)
  }, 1000)

  function pickPos(): void {
    setSpeed(speed + 1);
    setLeft(
      (Math.floor(Math.random() * (9 - 0 + 1) + 0) * 10).toString() + "%"
    );
    setTop((Math.floor(Math.random() * (9 - 0 + 1) + 0) * 10).toString() + "%");
    addCounter(counter + 1);
  }

  const changeContrast = () => {
    if (color == "#00D100") {
      setColor("#0320fc");
    } else {
      setColor("#00D100");
    }
  };

  const squareStyle = {
    backgroundColor: color,
    height: "100px",
    top: top,
    left: left,
    position: "absolute",
    width: "100px",
    zIndex: "auto"
  } as React.CSSProperties;

  return (
    <div className="game">
      <h1 className="comps">Click the square</h1>
      <p className="comps">{counter}</p>
      <p className="comps" onClick={() => changeContrast()}>
        Click here to change contrast
      </p>
      <div
        className="square"
        onClick={() => pickPos()}
        style={squareStyle}
      ></div>
      <p className="comps">Your speed is {currentSpeed} hits per second</p>
    </div>
  );
}

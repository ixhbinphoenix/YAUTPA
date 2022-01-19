import { useEffect, useState } from "react";
import "./index.scss";

interface IProps {
    number: number
}

export default function Counter(props: IProps) {
    const [num, setNum] = useState(props.number);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setNum(props.number)
    }, [props.number])

    useEffect(() => {
        const timer = setTimeout(() => {
            setNum(num - 1)
        }, 1000)

        if (!toggle) {
            clearTimeout(timer)
        }

        return () => clearTimeout(timer) 
    }, [num, toggle])

    return (
        <div key={props.number} className="counter">
            <p>{num}</p>
            <button onClick={() => setToggle(!toggle)}>{toggle ? "Stop" : "Start"}</button>
            <button onClick={() => {
                setToggle(false);
                setNum(props.number);
            }}>Reset</button>
        </div>
    )
}
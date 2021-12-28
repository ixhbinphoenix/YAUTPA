import { useState } from "react";
import "./index.scss";

export default function Clock() {
    const [time, setTime] = useState("");

    const getTime = (): string => {
        const expandTime = (num: number): string => {
            return (num < 10) ? ("0" + num.toString()) : num.toString()
        }
        const date = new Date();
        return `${expandTime(date.getHours())}:${expandTime(date.getMinutes())}:${expandTime(date.getSeconds())}`
    }

    setInterval(() => setTime(getTime()), 1000)

    return (
        <div id="clock">
            <p>
                {time}
            </p>
        </div>
    )
}
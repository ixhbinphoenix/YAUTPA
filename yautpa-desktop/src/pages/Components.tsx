import Clock from "../components/Clock";
import Comp from "../components/Comp";
import Countdown from "../components/Countdown";


export default function Components() {
    return (
        <div className="Components">
            <h1>Components</h1>
            <p>While we learn some React, look at some cool components we made</p>
            <Comp title="Clock" subtitle="I love big Clocks">
                <Clock></Clock>
            </Comp>
            <Comp title="Countdown" subtitle="Look mom, I can count from ${Number.MIN_SAFE_INTEGER} to ${Number.MAX_SAFE_INTEGER}!">
                <Countdown></Countdown>
            </Comp>
        </div>
    )
}
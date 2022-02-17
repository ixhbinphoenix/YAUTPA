import Clock from "../components/Clock";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <h1>YAUTPA</h1>
      <p>
        Hey uhh... so this is a bit awkward, we're not at all ready yet. So in
        the meantime, look at this Clock
      </p>
      <Clock></Clock>
      <Link to="/components">Psst... wanna look at some components?</Link>
    </div>
  );
}

import { Link } from "react-router-dom";

export function Home() {
    return (
    <div>
      <h1>Tamo na home!</h1>
      <Link to="/resources"><button> resources</button></Link>
      </div>
    );
  }
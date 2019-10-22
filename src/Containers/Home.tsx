import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Disc Golf App</h1>
      <Link to="/newGame">New Game</Link>
    </div>
  );
};

export default Home;

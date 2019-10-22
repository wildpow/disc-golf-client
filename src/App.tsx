import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Profile from "./Containers/Profile";
import NewGame from "./Containers/NewGame";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Disc Golf App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/newGame">New Game</Link>
          </nav>
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/newGame" component={NewGame} />
      </div>
    </Router>
  );
};

export default App;

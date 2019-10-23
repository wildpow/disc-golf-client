import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Profile from "./Containers/Profile";
import NewGame from "./Containers/NewGame";
import axios from "axios";
const App: React.FC = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://aw-disc-golf.herokuapp.com/course", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Content-Type": "application/json"
        }
      });
      setData(res.data);
    };
    fetchData();
  }, []);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/newGame">New Game</Link>
          </nav>
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/newGame" component={NewGame} />
        <div>
          {data === undefined ? (
            <h1>Heroku is booting up</h1>
          ) : (
            <h1>Heroku is active</h1>
          )}
          <h2></h2>
        </div>
      </div>
    </Router>
  );
};

export default App;

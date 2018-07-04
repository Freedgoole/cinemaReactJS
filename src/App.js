import React  from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./img/logo.svg";

import "./App.css";
import MoviesList from "./components/MoviesList";
import MovieDetal from "./components/MovieDetal";


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route exact={true} path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetal}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

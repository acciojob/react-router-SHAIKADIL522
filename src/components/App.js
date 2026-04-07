import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import Home from "./Home";
import About from "./AboutPage";
import Navigation from "./Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Do not remove the main div */}
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
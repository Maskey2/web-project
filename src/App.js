import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Hobbies from './components/Hobbies'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Work from './components/Work'
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/dashboard">  <Dashboard />    </Route>
        <Route path="/work">  <Work />    </Route>
        <Route path="/portfolio">  <Portfolio />    </Route>
        <Route path="/hobbies">  <Hobbies />    </Route>
        <Route path="/skills">  <Skills />    </Route>
          <Route path="/about">  <About />    </Route>
          <Route path="/contact">  <Contact />    </Route>
          <Route path="/">  <Home />  </Route>
        </Switch>
      </div>
    </Router>
  );
}






import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';



function App() {
  return (
    <>
    <Router basename="/react-portfolio">
      <Navbar />
      <Switch>
        <Route exact path="/"  component={Home} ></Route>
        <Route exact path="/about-me"  component={AboutMe} ></Route>
        <Route exact path="/portfolio" component={Portfolio} ></Route>
        <Route exact path="/contact" component={Contact} ></Route>
        <Route exact path="/resume" component={Resume} ></Route>
      </Switch>
    </Router>
   </>
  );
}

export default App;

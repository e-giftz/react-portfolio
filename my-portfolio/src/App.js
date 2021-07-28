import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component= {AboutMe} />
        <Route path="/portfolio" component= {Portfolio} />
        <Route path="/contact" component= {Contact} />
      </Switch>
    </Router>
   </>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Router basename="/react-portfolio">
        <div className="app">
          <Navbar />
          <div className="sections"> 
            <Switch>
              <Route exact path="/" component={Home} ></Route>
              <Route exact path="/about" component={About} ></Route>
              <Route exact path="/skills" component={Skills} ></Route>
              <Route exact path="/portfolio" component={Portfolio} ></Route>
              <Route exact path="/resume" component={Resume} ></Route>
              <Route exact path="/contact" component={Contact} ></Route>
            </Switch>
          </div>
          <Footer />
        </div> 
      </Router>
   </>
  );
}

export default App;
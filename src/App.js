import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/layouts/Header';
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import Services from './views/Services';
import ContactUs from './views/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

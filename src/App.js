import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";

function App() {
  return (
    <Router>
    <NavBar />
    <Route exact path="/" component={ Home } />
    <Route exact path="/about" component={ About } />
    </Router>
  );
}

export default App;

import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './pages/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
      
    </div>
  );
}

export default App;

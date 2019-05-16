import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import login from './Components/LogIn';
import Friends from './Components/Friends';
import './App.css';
import PrivateRoute from './PrivateRoute';

function App() {
    return (
      <Router>
      <div className="App">
        <nav>
          <Link to ='/'>LogIn</Link>
          <Link to ='/friends'>Friends</Link>
        </nav>
        <Route exact path ='/' component = {login}/>
        <PrivateRoute exact path ='/friends' component = {Friends}/>
    </div>
    </Router>
    );
  }
export default App;

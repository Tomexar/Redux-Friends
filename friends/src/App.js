import React from 'react';
import {Route} from 'react-router-dom';
import logIn from './Components/logIn';
import Friends from './Components/Friends';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Hello
        <Route exact path ='/' component = {logIn}/>
        <Route path ='/friends' component = {Friends}/>
    </div>
    );
  }
}
export default App;

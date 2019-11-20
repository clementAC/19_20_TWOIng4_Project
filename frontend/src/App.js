import React, { Component } from 'react';
import './App.css';
import Navigateur from './navigateur';
import Dashboard from './dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
render(){
  return(
    <div className = "container"> 
      <div className = "row">
        <Navigateur className ="navigateur col-2"/>
        <Dashboard className = "dashboard col-lg-10"/>
      </div>
    </div>
  )
}


}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigateur from './navigateur';
import Dashboard from './dashboard';

class App extends Component{
render(){
  return(
    <div className = "page"> 
    <Navigateur/>
    <Dashboard/>
    </div>
  )
}


}

export default App;

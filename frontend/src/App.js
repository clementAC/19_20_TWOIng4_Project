import React, { Component } from 'react';
import './App.css';
import Navigateur from './navigateur';
import Dashboard from './dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
render(){
  return(
    <div className = "container-fluid" style={{
      backgroundColor: '#FC0C0C0',
      width: '100%',
      height: '200%'
    }}> 
      <div className = "row">
        <Navigateur className ="navigateur col-md-2"/>
        <Dashboard className = "dashboard col-md-10 "/>
      </div>
    </div>
  )
}


}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className = "dashboard" >
                <p>Je suis dans le Dashboard</p>
            </div>
        )
    }
}
export default Dashboard;
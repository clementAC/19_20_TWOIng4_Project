import React, { Component } from 'react';
import './App.css';
import Compteur from './compteur';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className="dashboard">
                <p>Je suis dans le Dashboard qui est vraiment un projeet d'info d qualite</p>
                <Compteur/>
            </div>
        )
    }
}
export default Dashboard;
import React, { Component } from 'react';
import './App.css';
import Dashboard from './dashboard';

class Navigateur extends React.Component{


    constructor(props){
        super(props);
        this.state={
            accueil : "actif"
        };

    }

    click_accueil = () => { 
        console.log("TRIGGERR");
        this.setState({accueil:"actif"});
    }

    click_admin = () => {
        this.setState({accueil:null});
    }

    render(){
        console.log("this.state", this.state.accueil);
       if(this.state.accueil==="actif"){
        return(
            <div className="container">
            <div className="row justify-content-center">
            <nav className = "navbar navbar-fixed-top navbar-default" >
            <ul className="nav navbar-nav">
                <li>
                    <button className = "accueil" onClick={this.click_accueil}>Accueil </button> 
                </li>
                <li>
                    <button className = "admin" onClick={this.click_admin}>Admin </button>
                </li>                
            </ul>
            </nav>
            </div>
            <div className = "row justify-content-center">
            <Dashboard />
            </div>    
            </div>
        )
       }
       else if(this.state.accueil===null){
           return(
        <div className="container">
        <div className="row justify-content-center">
        <nav className = "navbar navbar-fixed-top navbar-default" >
        <ul className="nav navbar-nav">
            <li>
                <button className = "accueil" onClick={this.click_accueil}>Accueil </button> 
            </li>
            <li>
                <button className = "admin" onClick={this.click_admin}>Admin </button>
            </li>                
        </ul>
        </nav>
        </div>
        <div className = "row justify-content-center">
        <p>Nous sommes dans la page admin</p>
        </div>    
        </div>
           )
       }
    }
}
export default Navigateur;
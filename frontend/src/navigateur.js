import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Navigateur extends React.Component{
    constructor(props){
        super(props);
        this.state={
            accueil : "actif",
            admin : null
        };

    }
    render(){
        return(
            <div className = "navigateur" >
                <button className = "accueil">Accueil </button>
                <button className = "admin">Admin </button>
            </div>
        )
    }
}
export default Navigateur;
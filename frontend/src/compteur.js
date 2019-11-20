import React, { Component } from 'react';
import './App.css';

class Compteur extends React.Component{
    constructor(props){
        super(props);
        this.state={
            max:100,
            actu:54
        };
    }
    render(){
        return(
            <div className="compteur">
                <meter min="0" low="90" optimum="130" max="200" value="130"></meter>
            </div>
        )
    }

}

export default Compteur;
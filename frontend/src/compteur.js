import React, { Component } from 'react';
import './App.css';
import SemiCircleProgressBar from "react-progressbar-semicircle";

class Compteur extends React.Component{
    constructor(props){
        super(props);
        this.state={
            max:100,
            actu:46,
            color: "#F0B20D"
        };
    }

    coloriage(){

        const {tier} = (this.state.max);
        const {dtier} = (this.state.max)*2/3;
        const red =  "#F00808";
        const green = "#F38E315";
        const orange = "#F0B20D";

        if(this.state.actu <= tier)
        {
            this.setState({color:red});
        }
        else if (this.state.actu >= dtier){
            this.setState({color: green});
        }
        else {
            this.setState({color: orange});
        }
    }

    render(){

        return (
        <div className="compteur">
            <button className="actu_compteur" onClick={this.coloriage}>Actualiser</button>
            <SemiCircleProgressBar percentage={this.state.actu} background="#C0C0C0" stroke={this.state.color} strokeWidth="18" showPercentValue />
        </div>
        );
    }

}

export default Compteur;
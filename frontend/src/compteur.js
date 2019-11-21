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

        const red =  "#F00808";
        const green = "#F38E315";
        const orange = "#F0B20D";

        if(this.actu <= 33)
        {
            this.setState({color:red});
        }
        else if (this.state.actu >= 66){
            this.setState({color: green});
        }
        else {
            this.setState({color: orange});
        }
    }

    render(){

        return (
        <div className="compteur">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-6">
                        <button className="actu_compteur" onClick={this.coloriage}>Actualiser</button>
                        <SemiCircleProgressBar percentage={this.state.actu} background="#C0C0C0" stroke={this.state.color} strokeWidth="18" showPercentValue />
                    </div>
                    <div className="col-6">
                        <h3 className="text-center">Aujourd'hui,</h3>
                        <h1 className="text-center">3H30</h1>
                        <h3 className="text-center"> d'écoute</h3>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}

export default Compteur;
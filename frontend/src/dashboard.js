import React, { Component } from 'react';
import './App.css';
import Compteur from './compteur';
import Camembert from './camembert';
import Histogramme from './histogramme';
import Graphe from './graphe';


class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className="dashboard">
                <div className="container-fluid">

                    <div className="row">
                    <h1 className="col-12 text-center">Dashboard</h1> 
                    </div>
                    <div className="row justify-content-md-center">
        
                        <Compteur className="col-12"/> <br></br> 
                      
                    </div>
                    <div className="row">
                        <Camembert className="col-4"/> 
                        <Histogramme className="col-4"/> 
                        <Graphe className="col-4"/>
                    </div>

                </div>
            </div>
        )
    }
}
export default Dashboard;
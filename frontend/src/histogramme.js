import React, { Component } from 'react';
import './App.css';
import Chart from "react-apexcharts";

class Histogramme extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            series: [{
                name: 'Nombre écoute',
                data: [130,120 ,30 ,60 ,120,100,200 ]
              }],

            options: {
                labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi','Vendredi','Samedi','Dimanche'],
                chart: {
                width: 300
                },
                legend: {
                position: 'bottom'
                }
            }    
        };
    }

    render(){
        
        return(
            <div className="camembert">
                <h4 className="text-center">Répartition des écoutes</h4>
                <h4 className="text-center">de la semaine</h4> <br></br>
                <Chart options={this.state.options} labels={this.state.labels} series={this.state.series} type="bar" />
            </div>
        )
    }

}

export default Histogramme;
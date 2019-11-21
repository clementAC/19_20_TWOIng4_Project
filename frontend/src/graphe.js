import React, { Component } from 'react';
import './App.css';
import Chart from "react-apexcharts";

class Graphe extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            series: [{
                name: "Nombre de nouveaux abonnements",
                data: [1300,1200 ,300 ,600 ,1200,1000,2000,1400,1250,2030,1900,1741]
              }],

            options: {
                labels: ['Janvier', 'Février', 'Mars', 'Avril','Mai','Juin','Juillet', 'Aout','Septembre','Octobre', 'Novembre','Décembre'],
                chart: {
                    
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
                <h4 className="text-center">Nouveaux abonnement</h4>
                <h4 className="text-center">de l'année</h4> 
                <Chart options={this.state.options} labels={this.state.labels} series={this.state.series} type="line" width="450" />
            </div>
        )
    }

}

export default Graphe;
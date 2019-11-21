import React, { Component } from 'react';
import './App.css';
import Chart from "react-apexcharts";

class Camembert extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options: {
                labels: ['Jazz', 'Pop', 'Rnb', 'Blues','Rap'],
                chart: {
                width: 60
                },
                legend: {
                position: 'bottom'
                },
            },
           
            series: [201, 434, 345, 230, 850]
                 
        };
    }

    render(){
        const total = this.state.series[0] + this.state.series[1] +this.state.series[2] +this.state.series[3] +this.state.series[4] ;
        return(
            <div className="camembert">
                <h4 className="text-center">Répartition des genres de</h4>
                <h4 className="text-center">musiques écoutées</h4> <br></br>

                <Chart options={this.state.options} labels={this.state.labels} series={this.state.series} type="donut" />
                <p className="text-center">Total : {total} écoutes</p>
            </div>
        )
    }

}

export default Camembert;
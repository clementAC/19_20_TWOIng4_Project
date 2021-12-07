import React from 'react';
import "../index.js";
import axios from 'axios';
import {Row, Col} from 'react-bootstrap';

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}

export default class AfficheTemperature extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            name : props.name,
            valeurT : 0,
            uniteT :"C",
            url : 'https://api.smartthings.com/v1/devices/'+ props.id +'/components/main/capabilities/temperatureMeasurement/status'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    

    componentsDiMount(){
        
        var config = {
            method: 'get',
            url: this.state.url,
            headers: { 
                'Authorization': 'Bearer 41f76958-9ad9-4291-85b0-dd741c65794a'
            }
        };
    
        axios(config)
        .then(response => {
            this.setState(state => (
                {
                    valeurT : response.data.temperature.value,
                    uniteT : response.data.temperature.unit,
                }
            ));
        });
        sleep(100);
        
    }

    handleClick(){
        var config = {
            method: 'get',
            url: this.url,
            headers: { 
                'Authorization': 'Bearer 41f76958-9ad9-4291-85b0-dd741c65794a'
            }
        };
    
        axios(config)
        .then(response =>{
            this.setState(state => ({
                valeurT : response.data.temperature.value,
                uniteT : response.data.temperature.unit
            }));
        });
    }

    render() {
        
        this.componentsDiMount();

        return(
            
            <div>
                <Row lg md xs ="1" className="titreT">
                    {this.state.name}
                </Row>
                <Row lg md xs ="1">
                    <Col xs md lg="8" className="temperature">{this.state.valeurT}</Col>
                    <Col xs md lg="4" className="degres">°{this.state.uniteT}</Col>
                </Row>
            </div>
            
        )
    }
}
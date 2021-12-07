import React from 'react';
import "../index.js";
import axios from 'axios';
import { Row, Col} from 'react-bootstrap';
import imgOff from '../img/screenOff.png';
import imgOn from '../img/screenOn.png';

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}

export default class AfficheEcran extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name : props.name,
            switch : "Off",
            img : imgOff,
            url : 'https://api.smartthings.com/v1/devices/'+ props.id +'/components/main/capabilities/switch/status',
            time : 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    

    componentsDiMount() {
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
                    switch : response.data.switch.value,
                }
            ));
        });
        sleep(100);
    }

    handleClick(){
        var config = {
            method: 'get',
            url: this.state.url,
            headers: { 
                'Authorization': 'Bearer 41f76958-9ad9-4291-85b0-dd741c65794a'
            }
        };
    
        axios(config)
        .then(response =>{
            this.setState(state => ({
                switch : response.data.switch.value,
            }));
        });
    }

    render() {
        
        this.componentsDiMount();
        

        if (this.state.switch==="on"){
            this.state.img = imgOn;
        }
        else{
            this.state.img = imgOff;
        }


        return(
            
            <div className="widgetcourt">
                <Row>
                    <Col xs md lg="8" className="lightName">
                        <p>{this.state.name}</p>
                    </Col>
                    <Col xs md lg="4" className="lightStatue">
                        <button className="boutonLight"><img src = {this.state.img} alt="All"/></button>
                    </Col>
                </Row>
            </div>
            
        )
    }
}
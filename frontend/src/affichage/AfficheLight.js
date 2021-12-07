import React from 'react';
import "../index.js";
import axios from 'axios';
import { Row, Col} from 'react-bootstrap';
import imgOff from '../img/lightOff.png';
import imgOn from '../img/lightOn.png';
import RulesReturn from '../components/RulesReturn.js';

export default class AfficheLight extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name : props.name,
            switch : "Off",
            img : imgOff,
            url : 'https://api.smartthings.com/v1/devices/'+ props.id +'/components/main/capabilities/switch/status',
            id : props.id,
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
    }

    handleClick(){
        let url = new RulesReturn(this.state.id, this.state.switch);
        const urlT = url.returnRulesID;
        
        var config = {
            method: 'post',
            url: 'https://api.smartthings.com/rules/execute/'+ urlT +'?locationId=9f29e8d1-a97e-41ec-b62f-645eab2980a6',
            headers: { 
                'Authorization': 'Bearer bda5ce2c-6f5f-43f0-9d5a-287df823b0cc'
            }
            };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
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
                        {this.state.name}
                    </Col>
                    <Col xs md lg="4" className="lightStatue">
                        <button className="boutonLight" onClick = {this.handleClick}><img src = {this.state.img} alt="All"/></button>
                    </Col>
                </Row>
            </div>
            
        )
    }
}
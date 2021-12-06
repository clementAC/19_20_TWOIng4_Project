import React from 'react';
import "../index.js";
import axios from 'axios';
import { Row, Col} from 'react-bootstrap';
import imgOff from '../img/lightOff.png';
import imgOn from '../img/lightOn.png';

// function sleep(milliseconds) {
//     var start = new Date().getTime();
//     for (var i = 0; i < 1e7; i++) {
//       if ((new Date().getTime() - start) > milliseconds){
//         break;
//       }
//     }
// }

export default class AfficheLight extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name : props.name,
            switch : "Off",
            img : imgOff,
            url : 'https://api.smartthings.com/v1/devices/'+ props.id +'/components/main/capabilities/switch/status',
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
                        {this.state.name}
                    </Col>
                    <Col xs md lg="4" className="lightStatue">
                        <button className="boutonLight"><img src = {this.state.img} alt="All"/></button>
                    </Col>
                </Row>
            </div>
            
        )
    }
}
import React from 'react';
import "../index.js";
import axios from 'axios';
import { Row, Col} from 'react-bootstrap';
import imgMAllumer from '../img/imgMAllumer.png';
import imgMEteind from '../img/imgMEteind.png';
import imgRentrer from '../img/imgRentrer.png';
import imgSortie from '../img/imgSortie.png';
import imgSoiree from '../img/imgSoiree.png';
import imgDormir from '../img/imgDormir.png';
import imgSoleil from '../img/imgSoleil.png';
import imgCinema from '../img/imgCinema.png';

function attribueImg(number){
    switch(number){
        case "1":
            return (imgMAllumer);
        case "2":
            return (imgMEteind);
        case "3":
            return (imgRentrer);
        case "4":
            return (imgSortie);
        case "5":
            return (imgSoiree);
        case "6":
            return (imgDormir);
        case "7":
            return (imgSoleil);
        case "8":
            return (imgCinema);
    }
}


export default class AfficheScene extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name : props.name,
            idScene : props.id,
            img : attribueImg(props.number),
        }
        this.handleClick = this.handleClick.bind(this);
    }
 

    handleClick(){
    //     var config = {
    //         method: 'get',
    //         url: this.state.url,
    //         headers: { 
    //             'Authorization': 'Bearer 41f76958-9ad9-4291-85b0-dd741c65794a'
    //         }
    //     };
    
    //     axios(config)
    //     .then(response =>{
    //         this.setState(state => ({
    //             valeurT : response.data.switch.value,
    //         }));
    //     });
    }

    render() {

        return(
            
            <div className="widgetcourt">
                <Row>
                    <Col xs md lg="8" className="sceneName">
                        <img src = {this.state.img} alt="All"/>
                        {this.state.name}
                    </Col>
                    <Col xs md lg="4" className="lightStatue">
                        <button className="boutonLight"></button>
                    </Col>
                </Row>
            </div>
            
        )
    }
}
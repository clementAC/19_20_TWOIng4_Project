import React from 'react';
//import axios from 'axios';
import "../index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import AfficheTemperature from '../affichage/AfficheTemperature.js';

const SectionMaison = () => {
    
    // const [temperatureCuisine, setCusiine]= useState([]);
    // const [temperatureSalon, setSalon]= useState([]);
    // const [temperatureSalleDeBain, setSalleDeBain]= useState([]);

    // useEffect(() => {
    //     var configCuisine = {
    //     method: 'get',
    //     url: 'https://api.smartthings.com/v1/devices/f95f3581-f986-4670-ac63-94c6c0656d56/components/main/capabilities/temperatureMeasurement/status',
    //     headers: { 
    //         'Authorization': 'Bearer 41f76958-9ad9-4291-85b0-dd741c65794a'
    //     }
    //     };

    //     axios(configCuisine)
    //     .then(function (response) {
    //         setCusiine(JSON.stringify(response.data.temperature.value));
    //     })
    //     .catch(function (error) {
    //     console.log(error);
        
    //     });
    // }, []);

    // useEffect(() => {
    //     var configSalleDeBain = {
    //     method: 'get',
    //     url: 'https://api.smartthings.com/v1/devices/f589a3be-bf05-4aac-a152-440b3cc2fc0e/components/main/capabilities/temperatureMeasurement/status',
    //     headers: { 
    //         'Authorization': 'Bearer 41f76958-9ad9-4291-85b0-dd741c65794a'
    //     }
    //     };

    //     axios(configSalleDeBain)
    //     .then(function (response) {
    //         setSalleDeBain(JSON.stringify(response.data.temperature.value));
    //     })
    //     .catch(function (error) {
    //     console.log(error);
    //     });
    // }, []);
    
    
    // setSalon(temperatureCuisine+0.2);
    
    
    let temperatureC = <AfficheTemperature id="f95f3581-f986-4670-ac63-94c6c0656d56" name="Cuisine"/>;
    let temperatureS = <AfficheTemperature id="f589a3be-bf05-4aac-a152-440b3cc2fc0e" name="Salle de bain"/>;
    let temperatureSalon = <AfficheTemperature id="f95f3581-f986-4670-ac63-94c6c0656d56" name="Salon"/>;
    
    return (
        
        <Container className="widgetTemperature">
            <Row lg md xs ="4">
                <Col xs ="12" md lg="4">{temperatureC}</Col>
                <Col xs ="12" md lg="4">{temperatureSalon}</Col>
                <Col xs ="12" md lg="4">{temperatureS}</Col>
            </Row>
        </Container>
    );
};

export default SectionMaison;
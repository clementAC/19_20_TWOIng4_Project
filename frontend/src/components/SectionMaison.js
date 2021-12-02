import React from 'react';
import "../index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

const SectionMaison = () => {
    return (
        <Container>
            <Row lg md xs ="4" className="widget">
                <Col xs ="12" md lg="4">TU MET LE SYST7ME DE SECURITER LA</Col>
                <Col xs ="12" md lg="8">TU MET LA METEO LA</Col>
            </Row>
        </Container>
    );
};

export default SectionMaison;
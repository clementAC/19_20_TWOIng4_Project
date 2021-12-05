import React from 'react';
import "../index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import WidgetAppareilsLong from './WidgetAppareilsLong';
import WidgetAppareilsCourt from './WidgetAppareilsCourt';
import RequestTemperature from '../request/RequestTemperature.js';

const SectionAppareils = () => {
    return (
        <Container>
            <Row lg md xs ="4">
                <Col xs ="12" md lg="6">
                    <WidgetAppareilsLong/>
                </Col>
                <Col xs ="12" md lg="3">
                    <RequestTemperature/>
                </Col>
                <Col xs ="12" md lg="3">
                    <WidgetAppareilsCourt/>
                </Col>
            </Row>
            <Row lg md xs ="1">
                <Col xs ="12" md lg="6">
                    <WidgetAppareilsLong/>
                </Col>
                <Col xs ="12" md lg="3">
                    <WidgetAppareilsCourt/>
                </Col>
                <Col xs ="12" md lg="3">
                    <WidgetAppareilsCourt/>
                </Col>
            </Row>
        </Container>
    );
};

export default SectionAppareils;
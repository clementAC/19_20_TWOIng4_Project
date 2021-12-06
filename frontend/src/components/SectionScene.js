import React from 'react';
import "../index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import WidgetScene from './WidgetScene';
import AfficheScene from '../affichage/AfficheScene.js';

let ledSalleDeBain = <AfficheScene id="1aebb681-ef85-4d11-9e81-de61498e9e9e" name="Bonjour" number="1"/>

const SectionScene = () => {
    return (
        <Container>
            <Row lg md xs ="4">
                <Col xs ="12" md lg="4">
                    {ledSalleDeBain}
                </Col>
                <Col xs ="12" md lg="4">
                    <WidgetScene/>
                </Col>
                <Col xs ="12" md lg="4">
                    <WidgetScene/>
                </Col>
            </Row>
            <Row lg md xs ="1">
                <Col xs ="12" md lg="4">
                    <WidgetScene/>
                </Col>
                <Col xs ="12" md lg="4">
                    <WidgetScene/>
                </Col>
                <Col xs ="12" md lg="4">
                    <WidgetScene/>
                </Col>
            </Row>
            <Row lg md xs ="1">
                <Col xs ="12" md lg="4">
                    <WidgetScene/>
                </Col>
                <Col xs ="12" md lg="4">
                    <WidgetScene/>
                </Col>
                <Col xs ="12" md lg="4">
                    <WidgetScene/>
                </Col>
            </Row>
        </Container>
    );
};

export default SectionScene;
import React from 'react';
import "../index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import WidgetScene from './WidgetScene';

const SectionScene = () => {
    return (
        <Container>
            <Row lg md xs ="4">
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
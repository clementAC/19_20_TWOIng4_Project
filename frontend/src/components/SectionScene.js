import React from 'react';
import "../index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import WidgetScene from './WidgetScene';
import AfficheScene from '../affichage/AfficheScene.js';

let sceneBonjour = <AfficheScene id="bbefac96-c764-4ab7-b246-1335580c6ebe" name="Bonjour" number="1"/>
let sceneCine = <AfficheScene id="d13fa28e-8194-4288-95fe-57b1377d6539" name="Cinéma" number="8"/>
let sceneFilm = <AfficheScene id="48a5d487-fdf7-4af9-a7eb-21d3e0c01a0e" name="Film" number="8"/>
let sceneModeNuit = <AfficheScene id="960755c1-f7dd-4bf2-a894-48484019f6c5" name="Mode nuit" number="6"/>
let sceneDormir = <AfficheScene id="44be8e15-5448-4591-8c4b-deafa969dab8" name="Dormir" number="6"/>
let sceneSoiree = <AfficheScene id="d9849a74-c757-4f81-ab9d-3d3cdee04bbd" name="Soirée" number="5"/>
let sceneRentrer = <AfficheScene id="d3ebf150-9148-43b2-a15e-81706346460a" name="Rentrer à la maison" number="3"/>
let sceneSortir = <AfficheScene id="97fb6f35-e9c5-4773-a746-fd78a591e849" name="Partir de la maison" number="4"/>
let sceneTravail = <AfficheScene id="9396b75a-737d-439d-abad-12aac81b49d7" name="Travail" number="9"/>

const SectionScene = () => {
    return (
        <Container>
            <Row lg md xs ="4">
                <Col xs ="12" md lg="4">
                    {sceneBonjour}
                </Col>
                <Col xs ="12" md lg="4">
                    {sceneCine}
                </Col>
                <Col xs ="12" md lg="4">
                    {sceneFilm}
                </Col>
            </Row>
            <Row lg md xs ="1">
                <Col xs ="12" md lg="4">
                    {sceneSoiree}
                </Col>
                <Col xs ="12" md lg="4">
                    {sceneModeNuit}
                </Col>
                <Col xs ="12" md lg="4">
                    {sceneDormir}
                </Col>
            </Row>
            <Row lg md xs ="1">
                <Col xs ="12" md lg="4">
                    {sceneTravail}
                </Col>
                <Col xs ="12" md lg="4">
                    {sceneRentrer}
                </Col>
                <Col xs ="12" md lg="4">
                    {sceneSortir}
                </Col>
            </Row>
        </Container>
    );
};

export default SectionScene;
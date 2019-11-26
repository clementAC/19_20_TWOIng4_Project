import React from "react";
import './App.css';
import maison_big from './img/maison_big.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class User extends React.Component{

    constructor(props){
        super(props);
            }

    render(){
        return (
            <div>
                <Card style={{ width: '21rem' }} id = "User">
                    <InputGroup className="mb-3" id = "Search">
                        <InputGroup.Prepend>
                            <InputGroup.Text>User ID</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl />
                    </InputGroup>
                    <Card.Img variant="top" src={maison_big} roundedCircle />
                    <Card.Body>
                        <Card.Title>Jacques Rossard</Card.Title>
                        <Card.Text>
                            ID : 5ddba05efc13ae6c9000006b<br></br>
                            Maison : big<br></br>
                            Localisation : argentina<br></br>
                            Nombre d'habitant : 2
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default User;
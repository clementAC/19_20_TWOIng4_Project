import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';

class UserSensors extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Card style={{ width: '40rem' }}>
                    <DropdownButton id="dropdown-basic-button" title="Location">
                        <Dropdown.Item href="#/action-1">Bathroom</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Bedroom</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Entrance</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Livingroom</Dropdown.Item>
                    </DropdownButton>
                    <Card.Body>
                        <Card.Title>Sensors</Card.Title>
                        <Card.Text>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ID</th>
                                    <th>Type</th>
                                    <th>Creation Date</th>
                                    <th>Value</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>5ddba05efc13ae6c9000006b</td>
                                    <td>humidity</td>
                                    <td>2019-08-20</td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default UserSensors;
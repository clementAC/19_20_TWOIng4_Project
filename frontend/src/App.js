import React from 'react';
import './App.css';
import './css/formStyle.css'
import Form from './Components/FormSensor.js'
import User from './Components/User.js';
import UserSensors from './Components/UserSensors.js';


//routage pour switcher entre les deux pages
//TODO: npm install react-router-dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserBarChart from "./Components/UserBarChart";
import UserStackedAreaChart from "./Components/UserStackedAreaChart";
import UserPieChart from "./Components/UserPieChart";
import Nav from 'react-bootstrap/Nav'



//page d'accueil
const HomePage = () =>
    <body>
        <div className="wrapper">
            <div id={"side_bar"}>
                <User></User>
                <UserSensors></UserSensors>

            </div>
            <div id={"main_part"}>
                <UserBarChart></UserBarChart>
                <UserStackedAreaChart></UserStackedAreaChart>
                <UserPieChart></UserPieChart>
            </div>
        </div>
    </body>;

//page formulaire
const FormPage = () =>
    <div className="App">
        <Form/>
    </div>;



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:'React'
        };
    }

    render(){
        return (
            <Router>
                <div>
                    <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/form" eventKey="link-1">Form</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Route exact path="/home" component={HomePage} />
                    <Route path="/form" component={FormPage} />
                </div>
            </Router>
        );
    }
}

export default App;
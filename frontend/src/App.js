import React from 'react';
import './App.css';
import './css/formStyle.css'
import Form from './Components/Form.js'
import User from './Components/User.js';
import UserSensors from './Components/UserSensors.js';

//routage pour switcher entre les deux pages
//TODO: npm install react-router-dom
import { Component } from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav = () => (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Form</Link></li>
        </ul>
    </div>
);

//page d'accueil
const HomePage = () =>
    <body>
        <div className="wrapper">
            <aside>
                <User></User>
                <UserSensors></UserSensors>
            </aside>
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
                {/* Router component can have only 1 child. We'll use a simple
          div element for this example. */}
                <div>
                    <Nav />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/form" component={FormPage} />
                </div>
            </Router>
        );
    }



}

export default App;
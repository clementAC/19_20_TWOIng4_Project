import React from 'react'
import {Link} from "react-router-dom";
import FormDipayUser from './FormDisplayUser'
import FormDisplaySensor from './FormDisplaySensor'
import { Route } from 'react-router-dom';
import form_image from "../img/form_image.png";


const Nav = () => (
    <div>
        <ul>
            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                <li className="nav-item">
                    <Link to="/form/user" className="nav-link active"id="home-tab" data-toggle="tab" href="#User" role="tab"
                          aria-controls="home" aria-selected="true">User</Link>
                </li>
                <li className="nav-item" className="nav-link ">
                    <Link to="/form/user" className="nav-link active"id="home-tab" data-toggle="tab" href="#Sensor" role="tab"
                          aria-controls="home" aria-selected="true">Sensor</Link>
                </li>
            </ul>
        </ul>
    </div>
);


//formukaire d'ajout user
const Forme_user = () =>
    <body>
        <FormDipayUser/>
    </body>;

//formulaire d'ajout sensor
const Form_sensor = () =>
    <body>
        <FormDisplaySensor/>
    </body>;


    //TODO: mettre en place un gestionnaire des deux onglets sur le formulaire

function Form(props){
    return(
        <div className="container register">




            <div className="row">
                <div className="col-md-3 register-left">

                    <img src={form_image} alt="" className={"form-image"}/>
                    <h3>Welcome</h3>
                    <p>Here you can add data like users or sensors</p>
                </div>

                <div className="col-md-9 register-right">
                    {/* <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                               aria-controls="home" aria-selected="true">User</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                               aria-controls="profile" aria-selected="false">Sensor</a>
                        </li>
                    </ul>*/}

                    <Nav/>
                    <Route path="/form/user" component={Forme_user} />
                    <Route path="/form/sensor" component={Form_sensor} />
                </div>
            </div>
        </div>
    )
}

export default Form


import React from 'react'
import form_image from "../img/form_image.png";


class FormSensor extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src={form_image} alt="" className={"form-image"}/>
                        <h3>Welcome</h3>
                        <p>Here you can add data like users or sensors</p>
                    </div>
                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="sensor-tab" data-toggle="tab" href="#Sensor" role="tab"
                                   aria-controls="sensor" aria-selected="true">Sensor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="user-tab" data-toggle="tab" href="#User" role="tab"
                                   aria-controls="user" aria-selected="false">User</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="sensor" role="tabpanel"
                                 aria-labelledby="home-tab">
                                <h3 className="register-heading">Create a sensor</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="date" className="form-control"
                                                   placeholder="Creation date *"
                                                   value=""/>
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-control" placeholder="User Id *"
                                                   value=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option className="hidden" selected disabled>Location *</option>
                                                <option>Bathroom</option>
                                                <option>Bedroom</option>
                                                <option>Kitchen</option>
                                            </select>
                                        </div>
                                        <input type="submit" className="btnRegister" value="Send to database"/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show active" id="user" role="tabpanel"
                                 aria-labelledby="home-tab">
                                <h3 className="register-heading">Create an user</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="number" className="form-control"
                                                   placeholder="Number of person.s in house *"
                                                   value=""/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Country *"
                                                   value=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option className="hidden" selected disabled>House size *</option>
                                                <option>Small</option>
                                                <option>Medium</option>
                                                <option>Large</option>
                                            </select>
                                        </div>
                                        <input type="submit" className="btnRegister" value="Send to database"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FormSensor;
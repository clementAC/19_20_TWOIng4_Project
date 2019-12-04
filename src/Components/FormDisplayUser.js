import React from 'react'
// import fortmStyle from '../css/formStyle.css'
import form_image from "../img/form_image.png"


    //TODO: mettre en place un gestionnaire des deux onglets sur le formulaire
class FormDisplayUser extends React.Component{

    constructor(props){
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
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                   aria-controls="home" aria-selected="true">User</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                   aria-controls="profile" aria-selected="false">Sensor</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel"
                                 aria-labelledby="home-tab">
                                <h3 className="register-heading">Create an user</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control"
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
                                        <input type="submit" className="btnRegister" value="Register"/>
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

export default FormDisplayUser;

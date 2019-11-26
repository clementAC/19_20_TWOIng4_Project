import React from 'react';
import './App.css';
import User from './User.js';
import UserSensors from './UserSensors.js';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <body>
            <div class = "wrapper">
                <aside>
                    <User></User>
                    <UserSensors></UserSensors>
                </aside>
            </div>
            </body>
        );
    }
}

export default App;
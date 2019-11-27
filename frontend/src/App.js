import React from 'react';
import './App.css';
import './css/formStyle.css'
import Form from './Components/Form.js'
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <Form/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
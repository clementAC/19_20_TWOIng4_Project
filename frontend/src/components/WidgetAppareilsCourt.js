import React from 'react';
import "../index.js";
import 'bootstrap/dist/css/bootstrap.min.css';


const WidgetAppareilsCourt = ({temperature}) => {
    
    console.log(temperature);

    //document.getElementById("value").innerHTML = temperature;
    return (
        <div className="widgetcourt">
            <div className="valeurT">
            </div>
        </div>
    );
};

export default WidgetAppareilsCourt;
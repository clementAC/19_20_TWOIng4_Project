import React, {useState, useEffect} from 'react';
import axios from 'axios';
import WidgetAppareilsCourt from '../components/WidgetAppareilsCourt';

const RequestTemperature = () => {
    
    const [temperature, setData]= useState([]);

    useEffect(() => {
        var config = {
        method: 'get',
        url: 'https://api.smartthings.com/v1/devices/f95f3581-f986-4670-ac63-94c6c0656d56/components/main/capabilities/temperatureMeasurement/status',
        headers: { 
            'Authorization': 'Bearer 41f76958-9ad9-4291-85b0-dd741c65794a'
        }
        };

        axios(config)
        .then(function (response) {
            setData(JSON.stringify(response.data.temperature.value));
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
    }, []);

    return (
        <div>
            <WidgetAppareilsCourt temperature={temperature}/>
        </div>
    );
};

export default RequestTemperature;
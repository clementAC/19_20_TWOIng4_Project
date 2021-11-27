import React, { useState, useEffect} from 'react';
import axios from 'axios';

const Favoris = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.smartthings.com/v1/devices', {
        headers : { 
            'Authorization': 'Bearer 41f76958-9ad9-4291-85b0-dd741c65794a'
          }
        }).then((res) => setData(res.data));
        
        console.log(data);
    }, []);
    
    
    return (
        <div className="favoris">
            <ul className="liste-apareil">
                {data.map((items) => (
                    <li>{items.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Favoris;
import React, { useState, useEffect} from 'react';
import axios from 'axios';

const Test = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.smartthings.com/v1/devices', {
        headers : { 
            'Authorization': 'Bearer 41f76958-9ad9-4291-85b0-dd741c65794a'
          }
        }).then((res) => setData(res.data));
        
        console.log(data);
    }, []);
    
    const {items} = data;

    // var tableau = items.map( obj => {
    //     var robj ={};
    //     robj[obj.name] = obj.label;
    //     return robj;
    // });
    
    return (
        <div className="favoris">
            
        </div>
    );
};

export default Test;
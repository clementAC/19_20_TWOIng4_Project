

const fetchSearch = async() => {
    temperatures = await fetch(`https://api.smartthings.com/v1/devices/f95f3581-f986-4670-ac63-94c6c0656d56/components/main/capabilities/temperatureMeasurement/status`)
    .then(res => res.json())
    .then(res => res.temperatures)
    console.log(temperatures);
}

const affichage = async() => {
    await fetchSearch(`https://api.smartthings.com/v1/devices/f95f3581-f986-4670-ac63-94c6c0656d56/components/main/capabilities/temperatureMeasurement/status`);
    
    results.innerHTML = (
        temperatures.map(temperature => (
            console.log(temperature.value)        
        ))           
    );
};

fetchSearch();
//affichage();



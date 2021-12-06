import React from 'react';
import {Row, Container} from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SectionMaison from '../components/SectionMaison';
import SectionAppareils from '../components/SectionAppareils';import SectionTemperature from '../components/SectionTemperature';
import SectionScene from '../components/SectionScene';
import imgTemp from '../img/temperature.png';


const Home =() =>{
    return (
        <div className="home">
            <Navigation />
            <Container>
                <Row lg md xs ="4" className="titre">Maison</Row>
                <SectionMaison/>
                {/* <Row lg md xs ="4" className="titre"><img src={imgTemp} alt="ImageTemps" className="imgTemp"/>Température</Row> */}
                <SectionTemperature/>
                <Row lg md xs ="4" className="titre">Favoris</Row>
                <SectionAppareils/>
                <Row lg md xs ="4" className="titre">Scènes</Row>
                <SectionScene/>
            </Container>
            <Footer/>

            
            
        </div>);
}
export default Home;
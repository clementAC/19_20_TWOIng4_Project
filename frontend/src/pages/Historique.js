import React from 'react';
import {Row, Container} from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ComponentsHistorique from '../components/ComponentsHistorique';


const Historique =() =>{
    return (
        <div className="historique">
            <Navigation />
            <Row lg md xs ="4" className="sectionPrincipal"><h1 className="titrePrincipal">Historique</h1></Row>
            <Container>
                
                <ComponentsHistorique/>
            </Container>
            <Footer/>
            
        </div>);
}
export default Historique;
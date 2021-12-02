import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import notfound from '../elements/notfound.gif';

const Error = () => {
    return (
        <div className="error">
            <Navigation />
            <img className="imgerror" src={notfound} alt="Not found"/>
            <h1>Error. La page n'a pas été trouvé</h1>
            <Footer/>
        </div>
    );
};

export default Error;
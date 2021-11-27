import React from 'react';
import Navigation from '../components/Navigation';

const Error = () => {
    return (
        <div className="error">
            <Navigation />
            <h1>Erreur. La page que vous demandez n'existe pas</h1>
        </div>
    );
};

export default Error;
import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="background">
        <div className="error-container">
            <h1>404</h1>
            <p>This page does not excist</p>
            <a href="/">Go Back to Home</a>
        </div>
        </div>
    );
}

export default NotFound;
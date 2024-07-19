import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <>
            <nav>
                <ul className="navBar1">
                    <li className="appName">
                        MTG Deckmaster
                    </li>
                </ul>
                <ul className="navBar2">
                    <li className="button1">
                        Search your card
                    </li>
                    <li className="button1">
                        Sign in
                    </li>
                    <li className="button1">
                        Sign up
                    </li>
                    <li className="button1">
                        Profile
                    </li>
                    <li className="button1">
                        Log out
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar;
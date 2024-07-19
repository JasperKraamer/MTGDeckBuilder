import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        MTG Deck Builder
                    </li>
                </ul>
                <ul>
                    <li>
                        Search your card
                    </li>
                    <li>
                        Sign in
                    </li>
                    <li>
                        Sign up
                    </li>
                    <li>
                        Profile
                    </li>
                    <li>
                        Log out
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar;
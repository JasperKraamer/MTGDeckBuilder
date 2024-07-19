import './NavigationBar.css';
import {NavLink} from "react-router-dom";

function NavigationBar() {
    return (
        <>
            <nav>
                <ul className="navBar1">
                    <li>
                        <NavLink to="/" className="appName">Deck Builder MTG</NavLink>
                    </li>
                </ul>
                <ul className="navBar2">
                    <li>
                        <NavLink to="/search" className="button1">Search</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup" className="button1">Sign up</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signin" className="button1">Sign in</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className="button1">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="button1">Log out</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar;
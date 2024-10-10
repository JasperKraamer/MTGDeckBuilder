import './NavigationBar.css';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

function NavigationBar() {
    const { user, logout } = useAuth();

    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate('/signin');
    };

    return (
        <>
            <nav>
                <ul className="navBar1">
                    <li>
                        <NavLink to="/" className="appName">Deck Builder MTG</NavLink>
                    </li>
                </ul>

                { user ? (
                    <ul className="navBar2">
                        <li>
                            <NavLink to="/search" className="button1">Search</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" className="button1">Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="button1" onClick={handleLogout}>Log out</NavLink>
                        </li>
                    </ul>
                ) : (
                    <ul className="navBar2">
                        <li>
                            <NavLink to="/signup" className="button1">Sign up</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signin" className="button1">Sign in</NavLink>
                        </li>
                    </ul>
                ) }
            </nav>
        </>
    )
}

export default NavigationBar;
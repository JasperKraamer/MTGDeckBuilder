import './SignIn.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../../api.js';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await authenticateUser(username, password);
            localStorage.setItem('token', response.jwt);
            setPassword('');
            navigate('/profile');
        } catch (error) {
            alert('Login failed: ' + (error.message || 'Please check your credentials.'));
            setPassword('');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="background">
            <div className="form-container">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>

                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;

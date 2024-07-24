import './SignUp.css'
function SignUp() {
    return (
        <div className="background">
            <div className="form-container">
                <h2>Register</h2>
                <form>
                    <label>Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username" required/>

                    <label>Email</label>
                    <input type="email" id="email" name="email" required/>

                    <label>Password</label>
                    <input type="password" id="password" name="password" required/>

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
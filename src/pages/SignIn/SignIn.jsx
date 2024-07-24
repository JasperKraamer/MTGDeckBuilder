import'./SignIn.css'

function SignIn() {
    return (
        <div className="background">
            <div className="form-container">
                <h2>Log In</h2>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required/>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;
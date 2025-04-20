import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import "./login.css"

const Login = () => {
    return (
        <div className="login">
            <div className="title">
                <h1>Bubble Dash</h1>
                <p>Layanan laundry cepat & tranparan!</p>
            </div>
            <div className="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required></input>
                        <FaUser className="icons" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required></input>
                        <FaLock className="icons"/>
                    </div>
                    <div className="remember-forget">
                        <label>
                            <input type="checkbox" name="remember" value="remember-me" />
                            Remember me 
                        </label>
                        <a href="#"> Forgot Password?</a>
                    </div>
                    <button type="sumbit">Login</button>
                    <div className="register-link">
                        <p>
                            Don't Have Account? 
                            <a href="#"> Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
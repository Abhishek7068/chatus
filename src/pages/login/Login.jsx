import "./login.css";
import { Link } from "react-router-dom";


const Login = () => {
    return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1 className="headingLoginhello">Hello World.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                    alias totam numquam ipsa exercitationem dignissimos, error nam,
                    consequatur.
                </p>
                <span className="spanLogin">Don't you have an account?</span>
                <Link to="/register">
                    <button className="Registerbtnlogin">Register</button>
                </Link>
            </div>
            <div className="right">
                <h1 className="headingLogin">Login</h1>
                <form className="formlogin">
                    <input className="usernameinput" type="text" placeholder="Username" />
                    <input className="passwordinput" type="password" placeholder="Password" />
                    <button className="Loginbtnlogin">Login</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Login;
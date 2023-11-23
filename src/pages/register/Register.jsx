import "./register.css";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="register">
      <div className="cardregister">
        <div className="left">
          <h1 className="headingLoginhello">Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span className="spanLogin">Do you have an account?</span>
          <Link to="/login">
            <button className="Loginbtnregister">Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form className="formlogin">
            <input className="usernameinput" type="text" placeholder="Username" />
            <input className="useremail"type="email" placeholder="Email" />
            <input className="passwordinput" type="password" placeholder="Password" />
            <input className="name" type="text" placeholder="Name" />
            <button className="Registerbtnregister">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
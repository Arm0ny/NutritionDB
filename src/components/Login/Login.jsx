import { useState, useContext } from "react";
import "./Login.css";
import Axios from "axios";
import { UserContext } from "../../Context/UserContext";
import {Link, useNavigate} from 'react-router-dom'

const Login = (props) => {
  const { username, setUsername } = useContext(UserContext);
  const { password, setPassword } = useContext(UserContext);
  const { setUUID } = useContext(UserContext);
  const { isLogged, setLogged } = useContext(UserContext);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleClick = async (event) => {
    event.preventDefault();
    const result = await Axios.post("http://localhost:3009/login", {
      username,
      password,
    });
    if (result.data.hasOwnProperty("error")) {
      setError(result.data.error);
    } else {
      setError("");
      setUUID(result.data.uuid);
      await props.setAuth(true);
      navigate("/");
    }
  };

  return (
    <form className="login">
      <div>
        <label htmlFor="username">username</label>
        <input
          id="username"
          type="text"
          placeholder="Jhonn123"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleClick} disabled={!username || !password}>
        Login
      </button>
      <p>Don't have an Account? <Link to='/register'>Register Now</Link> </p>
      <p
        className={error && password ? "login__error" : "login__error--hidden"}
      >
        {error}
      </p>
    </form>
  );
};
export default Login;

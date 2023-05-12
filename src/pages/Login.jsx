import { Link } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";
import "./styles/login.css";

const Login = () => {
  const { loginUser } = useAuthentication();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };
    loginUser(data);
  };

  return (
    <div className="login__container">
      <form className="login__form" onSubmit={handleLogin}>
        <h2 className="login__title">
          Welcome! Enter your email and password to continue
        </h2>
        <div className="login__email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="login__pass">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button className="login__btn">Login</button>
        <p className="login__singup">
          Don't have an account?{" "}
          <Link className="singup" to={"/register"}>
            Sing up!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

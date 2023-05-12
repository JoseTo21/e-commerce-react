import "./styles/header.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to={"/"}>e-commerce</Link>
      </h1>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="list__item">
            <Link to="/login">Login</Link>
          </li>
          <li className="list__item">
            <Link to="/register">Register</Link>
          </li>

          <li className="list__item">
            <Link to="/purchases">Purcharses</Link>
          </li>
          <li className="list__item">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;

import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link className="nav__link" to="/">
              Home
            </Link>
          </li>
          <li className="nav__list-item">
            <Link className="nav__link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav__list-item">
            <Link className="nav__link" to="/about-us">
              About Us
            </Link>
          </li>
          <li className="nav__list-item">
            <Link className="nav__link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

import logo from "../../assets/logo.png";
import bg from "../../assets/background.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import LoginContext from "../../Context/LoginContext";
import { Dropdown } from "react-bootstrap";
import Avatar from "react-avatar"; // Usa una libreria come react-avatar
import ResponsiveAppBar from "../NavbarMobile/NavbarMobile";

const background = bg;

const Navbar = (props) => {
  const { search, setSearch, showSearch } = props;
  const navigate = useNavigate();
  const { user, logout } = useContext(LoginContext);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
  };
  
  window.addEventListener('resize', handleResize);
  
  return () => {
      window.removeEventListener('resize', handleResize);
  };
  }, []);

  


  return width < 1000 ? (
    <ResponsiveAppBar />
  ) : (
    <nav
      className="navbar col-12"
      style={{ backgroundImage: `url(${background})` }}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand col-sm-12 col-md-3 col-lg-1">
        <a className="image-item" href="/">
          <figure className="image">
            <img className="image-inside" src={logo} alt="logo sito" />
          </figure>
        </a>
      </div>

      <div className="navbar-menu col-sm-12 col-md-6 col-lg-6 justify-content-center">
        <li className="nav-link text-white">
          <a href="/">Home</a>
        </li>

        <li className="nav-link text-white">
          <a href="/expansions">Espansioni</a>
        </li>

        <li className="nav-link text-white">
          <a href="/lore">Lore</a>
        </li>

        {/* BARRA DI RICERCA */}
        {showSearch && (
          <input
            type="search"
            className="input form-control form-control-dark"
            placeholder="Cerca una carta..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search"
          />
        )}
      </div>

      {user ? (
        <Dropdown>
          <Dropdown.Toggle className="username-dropdown">
            <div className="user-info">
              <Avatar src={"assets/Avatar/" + user.img} name={user.username} size="60" round={true} />{" "}
              {/* Aggiungi avatar */}
              <span className="username-text">{user.username}</span>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-custom">
            <Dropdown.Item href="/profile">Il mio profilo</Dropdown.Item>
            <Dropdown.Item onClick={logout}>Esci</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <div className="navbar-end col-sm-12 col-md-3 col-lg-1">
          <div className="navbar-item">
            <button
              type="button"
              onClick={() => navigate("/login")}
              class="btn left "
            >
              Accedi
            </button>

            <button
              type="button"
              onClick={() => navigate("/register")}
              class="btn right "
            >
              Registrati
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

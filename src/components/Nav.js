import "../assets/styles/Nav.css";
import { Link } from "react-router-dom";
import { useUser } from '../context/UserContext';

function Nav(props) {
  const {user} = useUser();

    return (
        <nav className={`navbar ${props.isActive? "open" : ""}`}>
            <ul className="navbar-list">
                <li className="navbar-list-item">
                    <Link to="/" className="navbar-list-item-link">Home</Link>
                </li>
                <li className="navbar-list-item">
                    <Link to="/about" className="navbar-list-item-link">About</Link>
                </li>
                <li className="navbar-list-item">
                    <Link to="/menu" className="navbar-list-item-link">Menu</Link>
                </li>
                <li className="navbar-list-item">
                    <Link to="/reservations" className="navbar-list-item-link">Reservations</Link>
                </li>
                <li className="navbar-list-item">
                    <Link to="/order-online" className="navbar-list-item-link">Order Online</Link>
                </li>
                <li className="navbar-list-item">
                    <Link to="/login" className="navbar-list-item-link">{user==null ? 'Login' : user.name}</Link>
                </li>
            </ul>
      </nav>
    );
}

export default Nav;
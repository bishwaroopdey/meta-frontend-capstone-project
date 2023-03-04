import "../assets/styles/Nav.css"

function Nav(props) {
    return (
        <nav className={`navbar ${props.isActive? "open" : ""}`}>
            <ul className="navbar-list">
                <li className="navbar-list-item">
                    <a href="" className="navbar-list-item-link">Home</a>
                </li>
                <li className="navbar-list-item">
                    <a href="" className="navbar-list-item-link">About</a>
                </li>
                <li className="navbar-list-item">
                    <a href="" className="navbar-list-item-link">Menu</a>
                </li>
                <li className="navbar-list-item">
                    <a href="" className="navbar-list-item-link">Reservations</a>
                </li>
                <li className="navbar-list-item">
                    <a href="" className="navbar-list-item-link">Order Online</a>
                </li>
                <li className="navbar-list-item">
                    <a href="" className="navbar-list-item-link">Login</a>
                </li>
            </ul>
      </nav>
    );
}

export default Nav;
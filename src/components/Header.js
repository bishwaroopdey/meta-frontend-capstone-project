import Nav from "./Nav";
import primaryLogo from "../assets/images/primary logo.png";

function Header() {
    return (
      <header className="header">
        <img src={primaryLogo} alt="" className="primary-logo"/>
        <Nav/>
      </header>
    );
  }

export default Header;
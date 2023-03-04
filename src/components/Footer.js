import secondaryLogo from "../assets/images/secondary logo.png";
import "../assets/styles/Footer.css"
function Footer() {
    return (
      <footer className="footer">
        <img src={secondaryLogo} alt="secondary-logo" className="footer_items secondaryLogo" />
        <div className="footer_items quickLinks">
            <ul className="footerList">
                <li className="footerListItems">Quick Links</li>
                <li className="footerListItems">
                    <a href="" className="footerLinks">Home</a>
                </li>
                <li className="footerListItems">
                    <a href="" className="footerLinks">About</a>
                </li>
                <li className="footerListItems">
                    <a href="" className="footerLinks">Menu</a>
                </li>
                <li className="footerListItems">
                    <a href="" className="footerLinks">Reservations</a>
                </li>
                <li className="footerListItems">
                    <a href="" className="footerLinks">Order Online</a>
                </li>
                <li className="footerListItems">
                    <a href="" className="footerLinks">Login</a>
                </li>
            </ul>
        </div>
        <div className="footer_items contact">
            <ul className="footerList">
                <li className="footerListItems">Contact</li>
                <li className="footerListItems">
                    <a href="" className="footerLinks">Address</a>
                </li>
                <li className="footerListItems">
                    <a href="" className="footerLinks">Phone</a>
                </li>
                <li className="footerListItems">
                    <a href="" className="footerLinks">Email</a>
                </li>
            </ul>
        </div>
        <div className="footer_items socialMediaLinks">
            <ul className="footerList">
                <li className="footerListItems">Social</li>
                <li className="footerListItems">
                    <a href="" className="footerLinks">Facebook</a>
                </li>
                <li className="footerListItems">
                    <a href="" className="footerLinks">Instagram</a>
                </li>
                <li className="footerListItems">
                    <a href="" className="footerLinks">Twitter</a>
                </li>
            </ul>
        </div>
      </footer>
    );
}

export default Footer;
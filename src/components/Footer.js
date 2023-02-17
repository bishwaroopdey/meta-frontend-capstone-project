import secondaryLogo from "../assets/images/secondary logo.png";
function Footer() {
    return (
      <footer className="footer">
        <img src={secondaryLogo} alt="secondary-logo" className="secondaryLogo" height={100}/>
        <div className="quickLinks">
            <ul className="footerList">
                <li className="footerListItems">Quick Links</li>
                <li><a href="" className="footerLinks">Home</a></li>
                <li><a href="" className="footerLinks">About</a></li>
                <li><a href="" className="footerLinks">Menu</a></li>
                <li><a href="" className="footerLinks">Reservations</a></li>
                <li><a href="" className="footerLinks">Order Online</a></li>
                <li><a href="" className="footerLinks">Login</a></li>
            </ul>
        </div>
        <div className="contact">
            <ul className="footerList">
                <li className="footerListItems">Contact</li>
                <li><a href="" className="footerLinks">Address</a></li>
                <li><a href="" className="footerLinks">Phone</a></li>
                <li><a href="" className="footerLinks">Email</a></li>
            </ul>
        </div>
        <div className="socialMediaLinks">
            <ul className="footerList">
                <li className="footerListItems">Social</li>
                <li><a href="" className="footerLinks">Facebook</a></li>
                <li><a href="" className="footerLinks">Instagram</a></li>
                <li><a href="" className="footerLinks">Twitter</a></li>
            </ul>
        </div>
      </footer>
    );
}

export default Footer;
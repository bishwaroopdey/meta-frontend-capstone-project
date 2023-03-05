import "../assets/styles/Hero.css";
import heroImage from "../assets/images/hero_image.png";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <div className="heroDetails">
                <h1 className="heroTitle">Little Lemon</h1>
                <h3 className="heroCaption">Chicago</h3>
                <p className="heroDescription">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <Link to="/reservations" className="reserveATableButton">Reserve a table</Link>
            </div>
            <div>
                <img src={heroImage} alt="hero" className="heroImage" />
            </div>
        </section>
    );
  }

export default Hero;
import "./Footer.css";
import footerbg1 from "../../assets/PanelFooter.png";

const Footer = () => {
return (
    <footer>
    <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
    </div>

    <ul className="social_icon col-sm-6 col-md-6 col-lg-4">
        <li id="fb">
        <a href="https://it-it.facebook.com/">
            <ion-icon name="logo-facebook"></ion-icon>
        </a>
        </li>
        <li id="twitter">
        <a href="https://x.com/?lang=it">
            <ion-icon name="logo-twitter"></ion-icon>
        </a>
        </li>
        <li id="twitch">
        <a href="https://www.twitch.tv/">
            <ion-icon name="logo-twitch"></ion-icon>
        </a>
        </li>
        <li id="linkedin">
        <a href="https://www.linkedin.com/in/alessio-rossano-94a0b8255/">
            <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        </li>
        <li id="instagram">
        <a href="https://www.instagram.com/">
            <ion-icon name="logo-instagram"></ion-icon>
        </a>
        </li>
    </ul>

    <ul className="footer-menu col-sm-6 col-md-6 col-lg-4">
        <li>
        <a href="/">HOME</a>
        </li>
        <li>
        <a href="/expansions">ESPANSIONI</a>
        </li>
        <li>
        <a href="/lore">LORE</a>
        </li>
    </ul>

    <div className="play">
        <img
        className="footer-inside1"
        src={footerbg1}
        alt="bottone per poter giocare"
        />
        <p className="play2 text-white">
        <a href="https://www.google.com/">Gioca!</a>
        </p>
    </div>

    <p>©2024 Dimensions | Tutti i diritti riservati</p>
    </footer>
);
};

export default Footer;

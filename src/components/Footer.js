import "./Footer.css"
import { ReactComponent as Instagram }  from "../img/instagramm.svg";
import { ReactComponent as WhatsApp }  from "../img/whatsApp.svg";



function Footer() {
    return (
        <footer className="container footer">
            <div className="footer-address-contacts">
                <div className="footer-contacts">
                    <p className="footer-contacts-title">Contact</p>
                    <p className="footer-contacts-phone">+49 999 999 99 99</p>
                    <div className="footer-contacts-social">
                        <ul className="footer-contacts-social-list">
                            <li className="footer-contacts-social-list-item">
                                <Instagram />
                                <p className="footer-contacts-social-text">Instagram</p>
                            </li>
                            <li className="footer-contacts-social-list-item">
                                <WhatsApp />
                                <p className="footer-contacts-social-text">WhatsApp</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-address">
                    <p className="footer-address-title">Address</p>
                    <p className="footer-address-link">Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
                    <p className="footer-address-work-hours">Working Hours:</p>
                    <p className="footer-address-text">24 hours a day</p>
                </div>
            </div>
            <div>Карта</div>
        </footer>
    )
}

export default Footer;
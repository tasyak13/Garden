import "./Footer.css"
import { ReactComponent as Instagram }  from "../img/instagramm.svg";
import { ReactComponent as WhatsApp }  from "../img/whatsApp.svg";



function Footer() {
    const styles = {
        border: '0',
   };

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
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.410459266542!2d13.375101599999999!3d52.5079105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2zTGlua3N0cmHDn2UgMi84LiBFdGFnZSwgMTA3ODUgQmVybGluLCDQk9C10YDQvNCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1687257604970!5m2!1sru!2sru" width="1345" height="525" style={styles} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </footer>
    )
}

export default Footer;

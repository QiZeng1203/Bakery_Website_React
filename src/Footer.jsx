import './css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="openning-hour">
                <h4>Opening Hours: </h4>
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Sat & Sun: 9:00 AM - 6:00 PM</p>
            </div>
            <div className="address">
                <h4>Address: </h4>
                <p>225 Terry Ave N</p>
                <p>Seattle, WA 98109</p>
            </div>
            <div className="social-account">
                <h4>Stay in the know.</h4>
                <ul className="footer-links">
                    <li className="footer-link"><a href="https://www.facebook.com/fujibakery/" target="_blank" rel="noopener noreferrer"><i className="gg-facebook" aria-label="navigate to facebook account"></i></a></li>
                    <li className="footer-link"><a href="https://www.instagram.com/fujibakery/?hl=en/" target="_blank" rel="noopener noreferrer"><i className="gg-instagram" aria-label="navigate to instagram account"></i></a></li>
                    <li className="footer-link"><a href="https://twitter.com/85cbakerycafe?lang=en" target="_blank" rel="noopener noreferrer"><i className="gg-twitter" aria-label="navigate to twitter account"></i></a></li>
                </ul>
            </div>
            <p className="copyright">© 2023 Pink House Bakery</p>
        </footer> 
    );
}

export default Footer;
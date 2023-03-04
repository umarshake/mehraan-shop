import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFontAwesome, faTwitterSquare, faFacebookSquare, faInstagramSquare, faYoutubeSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    return (
        <footer className='footer'>
            <div class="row primary">
                <div class="column about">

                    <h3>M-Shop</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                        voluptatem corporis error non,
                    </p>

                    <div class="social">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <FontAwesomeIcon icon={faInstagramSquare} />
                        <FontAwesomeIcon icon={faTwitterSquare} />
                        <FontAwesomeIcon icon={faYoutubeSquare} />
                        <FontAwesomeIcon icon={faWhatsappSquare} />
                    </div>
                </div>

                <div class="column links">
                    <h3>Some Links</h3>

                    <ul>

                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="#support">Support</a>
                        </li>
                    </ul>

                </div>


                <div class="column links">
                    <h3>Some Links</h3>
                    <ul>
                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="#support">Support</a>
                        </li>
                    </ul>
                </div>

                <div class="column subscribe">
                    <h3>Newsletter</h3>
                    <div>
                        <input type="email" placeholder="Your email id here" />
                        <button>Subscribe</button>
                    </div>

                </div>

            </div>

            <div class="row copyright">
                <div class="footer-menu">

                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Blog</a>
                    <a href="">Social</a>

                </div>
                <p>Copyright &copy; 2022 Umar Developer World</p>
            </div>
        </footer>
    );
}
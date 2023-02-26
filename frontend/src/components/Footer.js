import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <div className="footer">
            <div className='footer_column1 about'>
                <h3>Connect</h3>
                <p>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>   Sienna Towers, Service Road, Bangalore
                </p>
                <div class="social">
                    <i class="fa fa-facebook-square"></i>
                    <FontAwesomeIcon icon="fa-brands fa-twitter-square" />

                    <i class="fa fa-linkedin-square"></i>
                    <i class="fa fa-instagram"></i>
                </div>
            </div>
            <div className='footer_column2 link'></div>
            <div className='footer_column1 subscribe'></div>
        </div>
    );
}
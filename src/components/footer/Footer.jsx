import React from 'react';

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-section">
                <ul className="list">
                    <li><h3>About Us</h3></li>
                    <li><a href="">ProjexHub Overview</a></li>
                    <li><a href="">ProjexHub for Business</a></li>
                    <li><a href="">Help Articles</a></li>
                    <li><a href="">Brand Resources</a></li>
                    <li><a href="">Sitemap</a></li>
                </ul>
                <ul className='list'>
                    <li><h3>Legal Thingies</h3></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Code of Conduct</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Residents</a></li>
                    <li><a href="">Cookie Policy</a></li>
                </ul>
                <ul className='list'>
                    <li><h3>Find Us On Social</h3></li>
                    <li>
                        <a href="">
                            <i className='fa-brands fa-facebook-f'></i>
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li>
                    <a href="">
                    <i className="fa-brands fa-instagram"></i>
                            <span>Instagram</span>
                        </a>
                    </li>
                    <li>
                    <a href="">
                    <i class="fa-brands fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                    <a href="">
                    <i className="fa-brands fa-x-twitter"></i>
                            <span>X</span>
                        </a>
                    </li>
                    <li>
                    <a href="">
                    <i className="fa-brands fa-youtube"></i>
                            <span>Facebook</span>
                        </a>
                    </li>
                </ul>

                <div>
                    <ul className="list">
                        <li><h3>Visit Our Avnet Family</h3></li>
                        <li><a href="">Avnet</a></li>
                        <li><a href="">Premier Farnell</a></li>
                        <li><a href="">Element14</a></li>
                    </ul>
                </div>
                <p className='footer-avnet'>ProjexHub, an Avnet Community © 2024</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;

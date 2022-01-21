import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
import './Footer.css';

function Footer() {
    return(
        <footer className="pt-3 mt-3 bg-light pb-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between">
                <div className="footer-group d-flex flex-column text-center">
                    <h3 className="h5">Fast links:</h3>
                    <Link to='/about'>About</Link>
                    <Link to='/terms-and-conditions'>Terms and conditions</Link>
                </div>
                <div className="footer-group text-center">
                    <h3 className="h5">Contact me:</h3>
                    <p className="m-0">
                        <a href="mailto:badaraugabriel95@gmail.com">
                            <Mail className="mb-1 footer-icon" style={{marginRight:"2px"}}/>
                            badaraugabriel95@gmail.com
                        </a>
                    </p>
                    <p className="m-0"><Phone className="footer-icon"/>+40746215876</p>
                </div>
                <div className="footer-group text-center">
                    <h3 className="h5">Where can you find me:</h3>
                    <p className="m-0">
                        <a href="https://github.com/gabrielbadarau">
                            <GitHub className="mr-1 mb-1 footer-icon"/>
                            gabrielbadarau
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/gabrielbadarau/">
                            <LinkedIn className="mr-1 footer-icon"/>
                            gabrielbadarau
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
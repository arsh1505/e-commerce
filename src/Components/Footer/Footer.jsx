import React from "react";
import './Footer.css'
import insta_icon from '../Assets/instagram_icon.png'
import pint_icon from '../Assets/pintester_icon.png'
import whats_icon from '../Assets/whatsapp_icon.png'
import footer_logo from '../Assets/logo_big.png'

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOOPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-conatiner">
                    <img src={insta_icon} alt="" />
                </div>
                <div className="footer-icons-conatiner">
                    <img src={pint_icon} alt="" />
                </div>
                <div className="footer-icons-conatiner">
                    <img src={whats_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer;
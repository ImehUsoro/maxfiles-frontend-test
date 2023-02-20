import React from "react";
import { FooterStyle } from "./FooterStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="top">
        <div className="social-links">
          <img src="/images/linkedIn.png" alt="" />
          <img src="/images/whatsapp.png" alt="" />
          <img src="/images/twitter.png" alt="" />
          <img src="/images/facebook.png" alt="" />
          <img src="/images/instagram.png" alt="" />
        </div>
        <div className="contact-links">
          <div className="single-contact-group">
            <p className="head">Company</p>
            <p className="contact">Home</p>
            <p className="contact">About Us</p>
          </div>
          <div className="single-contact-group">
            <p className="head">Legal</p>
            <p className="contact">Terms of service</p>
            <p className="contact">Privacy policy</p>
          </div>
          <div className="single-contact-group">
            <p className="head">Community</p>
            <p className="contact">Blog</p>
            <a href="#faq" className="contact">
              FAQs
            </a>
          </div>
          <div className="single-contact-group">
            <p className="head">Contact</p>
            <p className="contact">info@visaprof.com</p>
            <p className="contact">07017401336</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>2022 VISAPROF Visa processing firm. All rights reserved</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;

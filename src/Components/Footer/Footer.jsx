import React from "react";
import footerStyle from "./footer.module.css";

import footerImg from "../Assets/images/HeaderLogo.svg";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={footerStyle.footer}>
          <img className={footerStyle.footerImg} src={footerImg} alt="cleaningX" />
        </div>
        <div className={footerStyle.footerLinks}>
          <p className={footerStyle.footerText}>
            Copyright © Cleaning X | Designed by
            <a className={footerStyle.footerLink} href="https://brixtemplates.com/">BRIX Templates</a>
            - Powered by
            <a href="https://brixtemplates.com/templates/blog-webflow-template">Webflow--Licenses</a>

          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

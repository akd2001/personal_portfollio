import { FooterArea } from "@/styles/Footer.styled";
import React from "react";

const Footer = () => {
  return (
    <>
      <FooterArea>
        <p>&#169; 2023 sayandeepkarak.official@gmail.com</p>
        <div id="footlinks">
          <a href="https://in.linkedin.com/in/sayandeep-karak" target="_blank">
            Linkedin
          </a>
          |
          <a href="https://github.com/sayandeepkarak" target="_blank">
            Github
          </a>
        </div>
      </FooterArea>
    </>
  );
};

export default Footer;

import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as footerStyles from "./footer.module.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    const currentYear = new Date().getFullYear();
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

    return (
        <footer>
            <div className={footerStyles.footerIcons}> 
              <a href="https://www.linkedin.com/in/milecal/" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="linkedin"><FaLinkedin /></a>
              <a href="mailto: mileuc95@gmail.com" target="_blank" rel="noreferrer" title="Email" aria-label="email"><FaEnvelope /></a>
              <a href="https://www.github.com/mileuc" target="_blank" rel="noreferrer" title="GitHub" aria-label="github"><FaGithub /></a>
            </div>
            <p className={footerStyles.footerMessage}>created by {data.site.siteMetadata.author} / ⓒ {currentYear}</p>
        </footer>
    )
}

export default Footer;
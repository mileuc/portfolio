import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as footerStyles from "./footer.module.scss";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';


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
              <a href="https://www.linkedin.com/in/milecal/" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="linkedin"><LinkedInIcon /></a>
              <a href="mailto: mileuc95@gmail.com" target="_blank" rel="noreferrer" title="Email" aria-label="email"><EmailIcon /></a>
              <a href="https://www.github.com/mileuc" target="_blank" rel="noreferrer" title="GitHub" aria-label="github"><GitHubIcon /></a>
            </div>
            <p className={footerStyles.footerMessage}>created by {data.site.siteMetadata.author} / ⓒ {currentYear}</p>
        </footer>
    )
}

export default Footer;
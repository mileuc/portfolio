import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
//import "./header.module.scss";
import * as headerStyles from  "./header.module.scss";


const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          initials
        }
      }
    }
  `)

  return (
    <div>
      <header className={headerStyles.header}>
        <nav>
          <ul className={headerStyles.navList}>
            <Link className={headerStyles.title} to="/">
              {data.site.siteMetadata.initials}
            </Link>
            <div className={headerStyles.navListRight}>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">home</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">about</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">projects</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">blog</Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header;

import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/index.scss";
import * as layoutStyles from "./layout.module.scss";
import Fade from 'react-reveal/Fade';
import "@fontsource/karla";

const Layout = (props) => {
    return (
        <div className={layoutStyles.background}>
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                <Fade bottom distance={`25px`} duration={2000}>
                    {props.children}
                </Fade>
            </div>
            <Footer />
        </div>
        </div>
    )
}

export default Layout;
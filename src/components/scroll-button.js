import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';
import * as scrollButtonStyles from "./scroll-button.module.scss";


const ScrollButton = ({showBelow}) => {
    const [visible, setVisible] = useState(showBelow ? false : true);

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
                if (!visible) setVisible(true)
        } 
            
        else {
                if (visible) setVisible(false)
        }
    };

    const handleClick = () => {
        window[`scrollTo`]({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll);
            return () => window.removeEventListener(`scroll`, handleScroll);
        }
    });
    
    return (
        <div>
            {visible &&
                <IconButton
                    className={scrollButtonStyles.scrollButton} 
                    fontSize="large"
                    onClick={handleClick}>
                    <ArrowUpwardIcon fontSize="large"/>
                </IconButton>
            }
        </div>
    );
}

export default ScrollButton;
import React, { useRef, useEffect } from "react";
import { Link } from "gatsby";
import StyledFooter from "../styles/styledfooter";
import MainBtn from "../styles/mainbtn";
import K from "../images/K.png"

const Footer = ({ setHeight }) => {
    const footerRef = useRef(null);

    useEffect(() => {
        const height = footerRef.current.offsetHeight;
        // when we get the height, then we will change the padding on global styles
        setHeight(height);
        console.log(height)
    }, [footerRef, setHeight]);


    return (

        <StyledFooter >
            <div ref={footerRef}>
                    <img src={K} alt="Discover Kitcehn" />
                    <div className="footer-content">
                <div className="footer-links">
                    <div>
                        <h4>Contact</h4>
                        <ul className="links">
                            <li><a href="#" target="_blank"> email</a></li>
                            <li><a href="#" target="_blank">instagram</a></li>
                            <li><a href="#" target="_blank">facebook</a></li>
                        </ul>
                    </div>
                    <div>
                    <h4>Site Links</h4>
                        <ul className="links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="schedule">
                        <MainBtn>Schedule Consultation</MainBtn>
                    </div>
                    </div>
            </div>
        </StyledFooter>
    )
};

export default Footer;

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
    }, [footerRef]);


    return (

        <StyledFooter >
            <div ref={footerRef}>
                    <img src={K} alt="Discover Kitcehn" />
                    <div className="schedule">
                        <MainBtn>Schedule Consultation</MainBtn>
                    </div>
                
                <div className="footer-links">
                    <div>
                        <p>Contact</p>
                        <ul>
                            <li>phone</li>
                            <li>email</li>
                            <li>instagram</li>
                            <li>facebook</li>
                            <li>Schedule Consultation</li>
                        </ul>
                    </div>
                    <div>
                    <p>Site Links</p>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </StyledFooter>
    )
};

export default Footer;

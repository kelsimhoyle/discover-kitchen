import React, { useRef, useEffect } from "react";
import StyledFooter from "../styles/styledfooter";

const Footer = ({setHeight}) => {
    const footerRef = useRef(null);
    
    useEffect(() => {
        const height = footerRef.current.offsetHeight;
        // when we get the height, then we will change the padding on global styles
        setHeight(height);
    }, [footerRef]);


    return (
       
            <StyledFooter >
            <div ref={footerRef}>
                <div>
                    <p>Discover Kitchen</p>
                </div>
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
                    <ul>
                        <li>Home</li>

                        <li>About</li>
                        <li>Services</li>
                        <li>Menu</li>
                    </ul>
                </div>
                </div>
            </StyledFooter>
    )
};

export default Footer;

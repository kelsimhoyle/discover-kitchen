import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import StyledLanding from "../styles/styledlanding";

const Landing = () => {

    return (
        <>
            <StyledLanding>
                <div className="image">
                    <StaticImage
                        src="../images/charcuterieboard.jpg"
                        alt="Discover Kitchen"
                        placeholder="blurred"
                        layout="fullWidth"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        trim={true}
                    />
                </div>
                <div className="dk-logo">
                    <StaticImage
                        src="../images/DiscoverKitchen.png"
                        alt="Discover Kitchen"
                        placeholder="blurred"
                        layout="fullWidth"
                        objectFit="cover"
                    />
                </div>
            </StyledLanding>
            <div className="section is-medium has-text-centered	mx-6">
                <p className="is-size-4">Discover Kitchen is a Denver based personal chef and small businesses caterer. Providing meal solutions for customers to relieve the stress of planning. etc. etc...</p>
            </div>
        </>
    )

}

export default Landing;
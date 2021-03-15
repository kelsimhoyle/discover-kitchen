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
                        layout="fixed"
                        width={1500}
                        style={{"position": "relative", "height": "100vh", "width": "100vw"}}
                        imgStyle={{
                            "height": "100vh",
                            "position": "absolute",
                            "top": "50%",
                            "left": "50%",
                            "transform": "translate(-50%, -50%)"
                        }}
                        trim={true}
                    />
                </div>
                <div className="dk-logo">
                    <StaticImage
                        src="../images/DiscoverKitchen.png"
                        alt="Discover Kitchen"
                        layout="constrained"
                        width={750}
                        placeholder="blurred"
g                        objectFit="cover"
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
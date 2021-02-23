import React from "react";
import styled from "styled-components";
import NavLinks from "./navlinks";
import MobileNav from "./mobilenav";

const NavBar = styled.div`
    .desktop {
        display: none;
    }

    .mobile {
        display: block;
    }

  @media ${props => props.theme.device.laptop} {
    .desktop {
        display: block;
    }

    .mobile {
        display: none;
    }
  }
`

const Nav = () => {
    return (
        <NavBar>
            <div className="mobile">
                <MobileNav />
            </div>
            <div className="desktop">
                <NavLinks />
            </div>
        </NavBar>
    )
};

export default Nav;

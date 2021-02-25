import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components"
import NavLinks from "./navlinks";

const MobileNavList = styled.nav`
    background: ${props => props.theme.colors.red};
    height: 100vh;
    width: 100vw;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 25;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
`

const Icon = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 200;
  overflow: hidden;


  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const NoScroll = createGlobalStyle`
  html, body {
    overflow:  ${({ noScroll }) => noScroll ? 'hidden' : 'scroll'};
  }
`



const MobileNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <NoScroll noScroll={open} />

            <Icon open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </Icon>
            { open ? (
                <MobileNavList
                    onClick={() => setOpen(false)}
                >
                    <NavLinks />
                </MobileNavList>
            ) : null
            }
        </div>
    )
};

export default MobileNav;

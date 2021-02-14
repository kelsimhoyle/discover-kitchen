import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Btn = styled.button`
  background-color: ${props => props.theme.colors.red};
   color:#FFFFFF;
  font-size: 1rem;
  margin: auto;
  padding: .5rem 1rem;
  display:inline-block;
 border:0.16em solid ${props => props.theme.colors.red};
 margin:0 0.3em 0.3em 0;
 box-sizing: border-box;
 text-decoration:none;
 text-transform:uppercase;
 font-weight:bold;
 text-align:center;
 transition: all 0.15s;

:hover{
   background-color: ${props => props.theme.lightRed}

}

:active {
 background-color: ${props => props.theme.lightRed}
  border:  border:0.16em solid ${props => props.theme.colors.red};
}

:focus {
  border:  border:0.16em solid ${props => props.theme.colors.red};
}
`;


const MainBtn = ({ children, href }) => {
  return <Link to={href}><Btn>{children}</Btn></Link>
};

export default MainBtn;
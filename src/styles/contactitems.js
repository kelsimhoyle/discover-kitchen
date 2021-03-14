import React from "react";
import styled from "styled-components";

const Items = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    
    .icon {
        font-size: 2rem;
    }

    .contact-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 1rem;
    }
`

const ContactItems = ({ children }) => {
    return <Items>{children}</Items>
  };
  
  export default ContactItems;
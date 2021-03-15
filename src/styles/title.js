import React from "react";
import styled from "styled-components";

const Text = styled.div`
    margin: 2rem;

    .title-container {
        width: fit-content;
        margin: auto;
    }

    h2 {
    color: ${props => props.theme.colors.red};
    border-bottom: 5px solid ${props => props.theme.colors.red};
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: center;
    padding: .5rem 1rem;
  }
`;
const Title = ({ title, subtitle }) => {
    return (
        <Text>
            <div className="title-container">
                <h2>{title}</h2>
            </div>
            {subtitle ? <p>{subtitle}</p> : null}
        </Text>
    );
};

export default Title;
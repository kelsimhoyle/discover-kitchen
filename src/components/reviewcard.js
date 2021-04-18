import React from "react";
import styled from "styled-components";
import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft";

const Card = styled.div`
width: 85%;
margin-left: 1.25rem;
    min-height: 525px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;


    p {
        padding: .75rem 2rem;
        text-align: center;
    }

    .quote {
        position: absolute;
        top: 0;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: red;
        color: white;
        font-size: 1.75rem;
    }

    @media ${props => props.theme.device.laptop} {
        min-height: 300px;
    }
`

const ReviewCard = ({ review, name }) => {
    return (

        <Card>
            <div className="quote">
                <FaQuoteLeft />
            </div>
            <p >
                {review}
            </p>
            <p className="has-text-weight-semibold	">
                - {name}
            </p>
        </Card>

    )
};

export default ReviewCard;


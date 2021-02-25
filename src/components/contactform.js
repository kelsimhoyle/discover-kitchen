import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.div`
        width: 40vw;
        padding: 5vw;
        background-color: ${props => props.theme.colors.lightRed};
        border-radius: .5rem;
    margin: auto;
    display: flex; 
    flex-direction: column;
    align-items: center;

fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    div {
        margin: .5rem;
    }


    label {
        width: 27%;
        padding-right: 3%;
        text-align: right;
        white-space: nowrap;
        user-select: none;
        cursor: pointer;
    }

    input, textarea, select {
        width: 70%
        }

}
`

const ContactForm = () => {
    const [data, setData] = useState({ name: '', email: '', message: '', sent: false, err: '' });

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }

    return (
        <form method="post">
            <Form>
                <fieldset>
                    <div>
                        <label for="name">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            id="name"
                            onChange={handleChange} />
                    </div>
                    <div>
                        <label for="email">
                            E-Mail
                            </label>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            id="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label for="message">
                            Message
                        </label>

                        <textarea
                            name="message"
                            id="message"
                            value={data.message}
                            rows="5"
                            onChange={handleChange} />
                    </div>
                </fieldset>
                <button type="submit" onSubmit={formSubmit} onClick={formSubmit}>Send</button>
            </Form>

        </form>
    )
}

export default ContactForm;
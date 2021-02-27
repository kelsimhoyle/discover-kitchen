import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.div`
    width: 90vw;
    padding: 5vw;
    margin: 2.5vw;    
    background-color: rgba(255,255,255,0.2);
    border-radius: .5rem;
    margin: auto;
    display: flex; 
    flex-direction: column;
    align-items: center;

    h3 {
        font-weight: bold;
    }

fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    div {
        width: 80%;
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

@media ${props => props.theme.device.laptop} {
            width: 40vw;
            padding: 1rem;
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
        <form method="post" className="box">
            <h3> Contact</h3>
            <fieldset>
                <div className="field">
                    <label for="name" className="label">
                        Name
                        </label>
                    <div className="control">
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            id="name"
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="field has-icons-left has-icons-right">
                    <label for="email" className="label">
                        E-Mail
                            </label>
                    <div className="control">
                        <input className="input is-danger" type="email" placeholder="Email input" value={data.email}
                            id="email"
                            name="email"
                            onChange={handleChange} />
                        <span className="icon is-small is-left">
                            <i className="fa fa-envelope"></i>
                        </span>
                        {/* <span className="icon is-small is-right">
                            <i className="fa fa-warning"></i>
                        </span> */}
                        {/* <p className="help is-danger">This email is invalid</p> */}

                    </div>
                </div>
                <div className="field">
                    <label for="message" className="label">
                        Message
                        </label>
                    <div className="control">
                        <textarea
                            name="message"
                            id="message"
                            value={data.message}
                            rows="5"
                            onChange={handleChange} />
                    </div>
                </div>
            </fieldset>
            <button type="submit" onSubmit={formSubmit} onClick={formSubmit}>Send</button>

        </form>
    )
}

export default ContactForm;
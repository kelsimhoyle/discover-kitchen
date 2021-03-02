import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message/dist';
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaExclamationTriangle } from "@react-icons/all-files/fa/FaExclamationTriangle";

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

const post = (data) => {
    let postData = data;

    if (data.services) {
        postData.services = data.services.join(", ");
    }
    axios.post(process.env.GATSBY_SHEETS_API, postData)
    .then(response => {
        console.log(response);
    })
    .catch(err => console.log(err))
};

const ContactForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    console.log(errors)
    const onSubmit = data => post(data);


    return (
        <div className="container box">
            <h2 className="title is-2 is-capitalized">Contact Us</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} />

            <div className="field">
                <label for="name" className="label is-size-4 has-text-weight-light"></label>
                <div className="control has-icons-left">
                    <input
                        type="text"
                        name="name"
                        className="input"
                        placeholder="Name"
                        autofocus
                        ref={register({ required: "Name is required" })}
                    />
                    <span className="icon is-left">
                        <FaUser />
                    </span>
                </div>

                <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) => <p className="help is-danger">{message}</p>}
                />
            </div>


            <div className="field">
                <label for="email" className="label is-size-4 has-text-weight-light"></label>
                <div className="control has-icons-left">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="input"
                        placeholder="Email"
                        ref={register({
                            required: "E-mail is required",
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Please enter a valid e-mail address"
                            }
                        })}

                    />
                    <span className="icon is-left">
                        <FaEnvelope />
                    </span>
                    {errors.email ? (
                        <span className="icon is-small is-right">
                            <FaExclamationTriangle />
                        </span>
                    ) : null}

                </div>

                <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <p className="help is-danger">{message}</p>}
                />
            </div>

            <div className="field is-horizontal">
                <div className="field-label">
                    <label className="label">Services interest in:</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    id="catering"
                                    name="services"
                                    value="catering"
                                    ref={register}

                                />
                                    Small Event Catering
                             </label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    id="chef"
                                    name="services"
                                    value="chef"
                                    ref={register}

                                />
                                    Personal Chef
                             </label>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                id="other"
                                name="services"
                                value="other"
                                ref={register}

                            />
                                    Other
                             </label>
                    </div>
                </div>
            </div>

            <div className="field">
                <label for="message" className="label is-size-4 has-text-weight-light"></label>
                <textarea
                    name="message"
                    id="message"
                    ref={register}
                    rows="5"
                    className="textarea is-medium"
                    placeholder="Message">
                </textarea>
            </div>

            <button type="submit" onSubmit={handleSubmit(onSubmit)} onClick={handleSubmit(onSubmit)} className="button is-success is-size-5">Send</button>
        </div>

    )
}

export default ContactForm;
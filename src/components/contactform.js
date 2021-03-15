import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { FaExclamationTriangle } from "@react-icons/all-files/fa/FaExclamationTriangle";

import addContact from "../functions/addContact";

const ContactForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [state, setState] = useState({
        submitting: false,
        submitted: false
    });

    const onSubmit = data => {
        setState({ ...state, submitting: true })
        if (addContact(data)) setState({ submitting: false, submitted: true });
    };


    return (
        <div className="container box">
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

            <button
                type="submit"
                onSubmit={handleSubmit(onSubmit)}
                onClick={handleSubmit(onSubmit)}
                className={`button is-success is-size-5 ${state.submitting ? 'is-loading' : null}`}>
                Send
            </button>
            { state.submitted ? (
                <div className="columns is-justify-content-center">
                <div className=" box column is-one-third has-text-centered">
                    <FaCheckCircle className="is-size-1" />
                    <p className="is-size-3">Thank you!</p>
                    <p>We will get back to you as soon as possible.</p>
                    </div>
                </div>
            ) : null}
        </div>

    )
}

export default ContactForm;